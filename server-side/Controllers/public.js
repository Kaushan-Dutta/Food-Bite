const {pizzaModel}=require('../Models/ordermodel');

async function sendNewsletter(req,res){
    try{

        return res.status(200).json({message:'Inventory updated'}   )
    }
    catch(err){
        return res.status(500).json({message: err.message});  
    }
}
async function getPizzas(req,res){
    try{

        return res.status(200).json({message:await pizzaModel.find({})}   )
    }
    catch(err){
        return res.status(500).json({message: err.message});  
    }
}

module.exports={getPizzas,sendNewsletter};