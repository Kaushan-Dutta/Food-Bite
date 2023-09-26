import React, { useCallback, useState } from 'react'

export const authlogic = () => {
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
  
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
    const handleSubmit=useCallback((e)=>{
        e.preventDefault();
        const entity={
            password,email
        }
        console.log(entity);
    },[password,email])

    return {password,email,setPassword,setEmail,inputFields,handleSubmit}   
}

