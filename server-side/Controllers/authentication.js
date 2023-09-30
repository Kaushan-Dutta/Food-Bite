const mongoose=require('mongoose');
const {userModel}=require('../Models/usermodel')
const {adminModel}=require('../Models/adminmodel')

const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const otpGenerator=require('otp-generator');
const nodemailer=require('nodemailer');
const  EmailHandler=require('../Modules/mailer');


const secret=process.env.JWT_SECRET_KEY;

const checkEmail=async(email)=>{
    return await userModel.findOne({email});
}
const checkUser=async(username)=>{
    return await userModel.findOne({username});
}
const checkPassword=async(password)=>{
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}
async function verifyToken(req,res,next){
    try{
        const token=req.headers.authorization?.split(' ')[1];
        //console.log(token)
        //const entity=req.params.username || req.body.username || req.body.adminame || req.params.adminame;
        if(!token){
            return res.status(401).json({message:'Not authorized'})
        }
        const verifyToken=jwt.verify(token,secret);
        if(!verifyToken){
            return res.status(401).json({message:'Not authorized'})
        }
        /* if(verifyToken.name!=entity ){
            return res.status(401).json({message:'Not authorized'})
        } */
        console.log(verifyToken);
        next();
        
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}
async function getEntity(req,res){
    try{
        const getToken=req.headers.authorization?.split(' ')[1];
        if(!getToken){return res.status(401).json({message:'Not authorized'})}

        const verifyToken=jwt.verify(getToken,secret);
        if(!verifyToken){return res.status(401).json({message:'Not authorized'})}
        //console.log(verifyToken);
        if(verifyToken.entity=='user'){
            const user=await userModel.findById({_id:verifyToken.id});
            return res.status(200).json({entity:verifyToken.entity,user:user});
        }
        if(verifyToken.entity=='admin'){
            const admin=await adminModel.findById({_id:verifyToken.id});
            return res.status(200).json({entity:verifyToken.entity,admin:admin});
        }
        return res.status(401).json({message:'Not authorized'})

    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}
async function login(req,res){
    try{
        const {email,password}=req.body;
        const user=await userModel.findOne({email:email});
        const admin=await adminModel.findOne({email:email});
        
       if(user && await bcrypt.compare(password,user.password)){

            const token=jwt.sign({
                id:user._id,email:user.email,entity:"user" },secret,{expiresIn:'24 hours'});
            const refreshtoken=jwt.sign({
                id:user._id,email:user.email,entity:"user"},secret,{expiresIn:'24 days'});

            return res.status(200).json({message:"Login Successfull",accesstoken:token,refreshtoken:refreshtoken});
        }
        if(admin && await bcrypt.compare(password,admin.password)){

            const token=jwt.sign({
                email:admin.email,id:admin._id ,entity:"admin"},secret,{expiresIn:'24 hours'});
            const refreshtoken=jwt.sign({
                email:admin.email,id:admin._id,entity:"admin"},secret,{expiresIn:'24 days'});

            return res.status(200).json({message:"Login Successfull",accesstoken:token,refreshtoken:refreshtoken});
        }
        if(user==null && admin==null){
            return res.status(404).json({message:'Entity doesnot exist'});
        }
        return res.status(401).json({message:'Password doesnot match'});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}

async function signup(req,res){
    const {username,password,email,phone,profile}=req.body;
    try{
        if(!await checkEmail(email)){
            if(!await checkUser(username)){
                if(checkPassword(password)){
                    const encrypt = await bcrypt.hash(password,10);
                    const createUser=new userModel({username,password:encrypt,email,phone,profile});
                    var signup_emailBody = EmailHandler.mailGenerator.generate(EmailHandler.signup_email());

                    const info = await EmailHandler.transporter.sendMail({
                        from:process.env.NODE_MAILER_FROM, 
                        to: email,
                        subject: "Confirmation Mail", 
                        text: "Thanks for signing", 
                        html: signup_emailBody,
                    });
                    await createUser.save();
                    return res.status(200).json({message:'Confirmation mail is send'});
                }
                return res.status(422).json({message:'Provide Strong Password'})
            }
        }
        return res.status(401).json({message:'Error in registration'})
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:err.message});
    }
}

async function registerMail(req,res){
    try{
        const {email}=req.body;
        //console.log(email,emailBody);
        
        return res.status(200).json({message:"Confirmation email is sent"});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}

async function generateOTP(req,res){
    try{
        req.app.locals.OTP=await otpGenerator.generate(4,{ upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false})
        //console.log(req.app.locals.OTP);
        var otp_emailBody = EmailHandler.mailGenerator.generate(EmailHandler.otp_email(req.app.locals.OTP));
        const info = await EmailHandler.transporter.sendMail({
            from:process.env.NODE_MAILER_FROM, 
            to: req.body.email, 
            subject: "Generated OTP", 
            text: "Reset your password", 
            html: otp_emailBody,
        });
        return res.status(200).json({message:req.app.locals.OTP});
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}
async function verifyOTP(req,res){
    try{
        const {otp}=req.body;
        if(parseInt(req.app.locals.OTP)==parseInt(otp)){
            req.app.locals.OTP=null;
            req.app.locals.resetSession=true;
            return res.status(200).json({message:'true'})
        }
        return res.status(200).json({message:'Not verified'})
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}
async function resetSession(req,res){
    try{
        if(req.app.locals.resetSession){
            req.app.locals.resetSession=false;
            return res.status(200).json({message:'Access Granted'})
        }
        return res.status(401).json({message:'Access Denied'})                
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}
async function resetPassword(req,res){
    try{
        if(!req.app.locals.resetSession) return res.status(401).json({message:'Session Expired'});
        const {email,password} = req.body;

        const encrypt = await bcrypt.hash(password,10);
        const resetData=await userModel.updateOne({email},{$set:{password:encrypt}});

        req.app.locals.resetSession=false;
        return res.status(200).json({message:resetData})
    }
    catch(err){
        return res.status(500).json({message:err.message});
    }
}

module.exports = {login,signup,generateOTP,verifyOTP,resetPassword,verifyToken,registerMail,getEntity}
