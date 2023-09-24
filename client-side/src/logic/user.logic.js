import React, { useState } from 'react'

const userlogic = () => {
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const [email,setEmail]=useState();
    const [phone,setPhone]=useState();
    const [profile,setProfile]=useState();

    const inputFields=[
        {
            name:"Username",
            placeholder:"Enter the username",
            type:"text",
            classname:'',
            value:username,
            onChange:(e)=>setUsername(e.target.value)
        },
        {
            name:"Password",
            placeholder:"Enter the password",
            type:"password",
            classname:'',
            value:password,
            onChange:(e)=>setPassword(e.target.value)
        },
        {
            name:"Phone No.",
            placeholder:"Your Phone no.",
            type:"number",
            classname:'',
            value:phone,
            onChange:(e)=>setPhone(e.target.value)
        },
        {
            name:"Email Id",
            placeholder:"Enter the Email Id",
            type:"email",
            classname:'',
            value:email,
            onChange:()=>setEmail(e.target.value)
        },
        
    ]
    return(username,password,email,phone,profile,
        setUsername,setPassword,setEmail,setPhone,setProfile,inputFields)    
}

export default userlogic