const express=require('express');
const http=require('http');
const cors=require('cors');

const app=express();
const server=http.createServer(app);


app.use(express.json());
app.use(cors(
    {origin:true,credentials:true}
));
app.get('/testmode',(req,res)=>{
    return res.status(200).json({message:true,data:'Configured the initial files'})
})
app.use('/user',require('./Routers/user-routes'));
app.use('/auth',require('./Routers/auth-routes'));
app.use('/admin',require('./Routers/admin-routes'));


server.listen(7000,()=>{
    console.log('Server Started on port 7000');
})
