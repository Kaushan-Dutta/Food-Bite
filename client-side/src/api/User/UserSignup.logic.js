import React, { useCallback, useState } from 'react'
import axios from 'axios';
import { toast } from "react-hot-toast";
import {v4 as uuidv4} from 'uuid';
import storage from '../Configure/appwrite.config.js'


const API = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
    },
});
export const SignupLogic = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const [profile,setProfile]=useState('');
    const [image,setImage]=useState('');
    const [loading,setLoading]=useState(false);

    const inputFields=[
        {
            name:"Username",
            placeholder:"Enter the username",
            type:"text",
            className:'',
            value:username,
            onChange:(e)=>setUsername(e.target.value)
        },
        {
            name:"Password",
            placeholder:"Enter the password",
            type:"password",
            className:'',
            value:password,
            onChange:(e)=>setPassword(e.target.value)
        },
        {
            name:"Phone No.",
            placeholder:"Your Phone no.",
            type:"number",
            className:'',
            value:phone,
            onChange:(e)=>setPhone(e.target.value)
        },
        {
            name:"Email Id",
            placeholder:"Enter the Email Id",
            type:"email",
            className:'',
            value:email,
            onChange:(e)=>setEmail(e.target.value)
        },
        {
            name:"Address",
            placeholder:"Enter the address",
            type:"text",
            className:'',
            value:address,
            onChange:(e)=>setAddress(e.target.value)
        },
        
    ]
    const usersignup=async(e)=>{
        e?.preventDefault();
        setLoading(true);
        const user={
            username,password,email,phone,profile
        }
        console.log(user);
        let register;
        try{
            const  uploadProfile= await storage.createFile(import.meta.env.VITE_APP_APPWRITE_BUCKET_KEY, uuidv4(), profile);
            const getFilePreview = await storage.getFilePreview(import.meta.env.VITE_APP_APPWRITE_BUCKET_KEY,uploadProfile.$id);
            user.profile=getFilePreview.href;
            try{
            
            register=await API.post('/auth/signup',user);
            toast.success(register.data.message);}
            catch(err){
                toast.error(register.message);
            }
        }
        catch(err){
            toast.error("Sign Up Error");
        }
        setLoading(false);
    }

    return {username,password,email,phone,profile,image,loading,setLoading,setImage,
        setUsername,setPassword,setEmail,setPhone,setProfile,inputFields,usersignup}   
}

