const mongoose=require('mongoose');

require('../connectDb');

const adminSchema=new mongoose.Schema({
    adminame:{
        type:String,required:true,unique:true },
    password:{
        type:String,required:true },
    email:{
        type:String,required:true,unique:true },
    phone:{
        type:Number,required:true,unique:true },
    profile:{
        type:String },
    
})
const inventorySchema=new mongoose.Schema({
    ingredient:{
        type:String,required:true
    },
    amount:{
        type:Number,required:true
    },
    thresholdValue:{
        type:Number,required:true
    }
})
const updateSchema=new mongoose.Schema({
    image:{
        type:String  },
    title:{
        type:String,required:true },
    description:{
        type:String,required:true },
    status:{
        type:String,required:true,default:'Inactive',enum:['Active','Inactive']
    },
    startDate: {
        type:Date,required:true},
    endDate: {
        type:Date,required:true},
    discount:{
            type:Number,required:true }
})
const adminModel=new mongoose.model('AdminModel',adminSchema);
const inventoryModel=new mongoose.model('InventoryModel',inventorySchema);
const updateModel=new mongoose.model('UpdateModel',updateSchema);

module.exports={adminModel,inventoryModel,updateModel};