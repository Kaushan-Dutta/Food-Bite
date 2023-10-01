const mongoose=require('mongoose');

require('../connectDb');


const pizzaSchema=new mongoose.Schema({
    name:{
        type:String,required:true},
    description:{
        type:String,required:true},
    price:{
        type:Number,required:true},
    image:{
        type:String },
    size:{
        type:String,required:true} ,
    ingredient:{
        type:[mongoose.Schema.Types.ObjectId],ref:'InventoryModel'
    },
    heading:{type:String}
})
const pizzaModel=new mongoose.model('PizzaModel',pizzaSchema);

const orderSchema=new mongoose.Schema({
    orderedBy:{
        type:mongoose.Schema.Types.String,required:true,ref:'UserModel'
    },
    orderContent:{type:[
        {
            pizzaId:{type:mongoose.Schema.Types.ObjectId,ref:'PizzaModel'},
            quantity:{type:Number,required:true},
       
        }
    ]},       
    address:{
        type:String,required:true},
    price:{
        type:Number,required:true},  
    status:{
        type:String,deafult:'Pending',enum:['Pending','Confirmed','Packed','Set Delivery','Delivered','Not Delivered']
    },
    feedback:{
        type:String }

},{timestamps:true})

const orderModel=new mongoose.model('OrderModel',orderSchema);

const customPizzaSchema=new mongoose.Schema({
    madeBy:{
        type:mongoose.Schema.Types.ObjectId,ref:'UserModel',required:true },
    name:{
        type:String,required:true},
    description:{
        type:String,required:true},
    image:{
        type:String },
    size:{
        type:[Number],required:true}    
})
const customPizzaModel=new mongoose.model('CustomPizzaModel',customPizzaSchema);

module.exports={pizzaModel,orderModel,customPizzaModel}