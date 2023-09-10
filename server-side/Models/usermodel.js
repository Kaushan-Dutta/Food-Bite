const mongoose=require('mongoose');

require('../connectDb');

const userSchema=new mongoose.Schema({
    username:{
        type:String,required:true,unique:true },
    password:{
        type:String,required:true },
    email:{
        type:String,required:true,unique:true },
    phone:{
        type:Number,required:true,unique:true },
    profile:{
        type:String },
    favourites:{type:
        [
            {type:mongoose.Schema.Types.ObjectId,ref:'PizzaModel'}
        ]
    },
    
})

const userModel=new mongoose.model('UserModel',userSchema);

module.exports={userModel}