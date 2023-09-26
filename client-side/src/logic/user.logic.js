import React, { useCallback, useState } from 'react'

export const userlogic = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [address,setAddress]=useState('');
    const [profile,setProfile]=useState('');
    const [image,setImage]=useState('');

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
    const handleSubmit=useCallback((e)=>{
        e.preventDefault();
        const user={
            username,password,email,phone,profile
        }
        console.log(user);
    },[username,password,email,phone,profile])

    return {username,password,email,phone,profile,image,setImage,
        setUsername,setPassword,setEmail,setPhone,setProfile,inputFields,handleSubmit}   
}

