const mongoose=require('mongoose');
const {adminModel,updateModel,inventoryModel}=require('../Models/adminmodel');
const {orderModel}=require('../Models/ordermodel');

async function getAdminDetails(req, res) {
    try{
        const {adminame}=req.params.adminame || req.body.adminame;
        const getAdmin=await adminModel.findOne(adminame);
        if(!getAdmin) return res.status(404).json({message:'Admin not found'});
        return res.status(200).json({message:getAdmin})
    }
    catch(err){
        return res.status(500).json({message: err.message});  
    }
}
async function updateOffer(req,res){
    try{
        const {image,title,description,status,startDate,endDate,discount}=req.body;
        const createOffer= new updateModel({image,title,description,status,startDate,endDate,discount});
        await createOffer.save();
        return res.status(200).json({message: 'Offer updated '});  
    }
    catch(err){
        return res.status(500).json({message: err.message});  
    }
}
async function updateOrder(req,res){
    try{
        const {_id,status}=req.body;
        const upgrade=await orderModel.updateOne({_id},{$set:{status}});
        return res.status(200).json({message:'Order Upgraded'});        
    }
    catch(err){
        return res.status(500).json({message: err.message});  
    }
}
async function getOrders(req,res){
    try{
        return res.status(200).json({message:await orderModel.find()}); 
    }
    catch(err){
        return res.status(500).json({message: err.message});  
    }
}
async function getInventories(req,res){
    try{
        return res.status(200).json({message:await inventoryModel.find()});   
    }
    catch(err){
        return res.status(500).json({message: err.message});  
    }
}

module.exports={getInventories,getOrders,updateOrder, updateOffer,getAdminDetails}