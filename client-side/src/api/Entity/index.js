import React, { useCallback, useState } from 'react'
import axios from 'axios';
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const API = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
    },
});

export const authlogic = () => {
    const navigate=useNavigate();

    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [loading,setLoading]=useState(false);
    
    const inputFields=[
        
        {
            name:"Password",
            placeholder:"Enter the password",
            type:"password",
            className:'',
            value:password,
            onChange:(e)=>setPassword(e.target.value)
        },
        
        {
            name:"Email Id",
            placeholder:"Enter the Email Id",
            type:"email",
            className:'',
            value:email,
            onChange:(e)=>setEmail(e.target.value)
        },
    ]
    
      
    const handleSubmit=useCallback(async(e)=>{
        e.preventDefault();
        setLoading(true);
        const entity={
            password,email
        }
        let loginCallback;
        try{
            loginCallback=await API.post("/auth/login",entity);
            toast.success(loginCallback.data.message);
            localStorage.setItem('foodbite',JSON.stringify({token:loginCallback.data.accesstoken}));
            window.location.href="/";
        }
        catch(err){
            toast.error("Invalid Credentials");
        }
        setLoading(false);

    },[password,email])

    return {password,email,setPassword,setEmail,loading,setLoading,inputFields,handleSubmit}   
}
/* 

export const registerUser = (formData) => API.post("/auth/register", formData);
export const loginUser = (formData) => API.post("/auth/login", formData);

 */