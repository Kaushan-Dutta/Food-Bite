import React,{useState} from 'react'
import {authlogic} from '../../logic/entity-auth.logic'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'
import { toast } from "react-hot-toast";


const Register = () => {
  const {inputFields,handleSubmit,loading}=authlogic();
  if(loading) return <Loading/>
   
  return (
    <div className='primary-container py-40'>
        <div className='w-2/4 rounded-xl shadow-lg p-10 mx-auto border-2  font-primary'>
            <header className='text-5xl font-header  text-theme text-center my-5'>Welcome to Food Bite</header>
            <div className="flx-row-center">
                  
                  <form className='w-2/3 my-5' onSubmit={handleSubmit}>
                    {inputFields.map((obj,id)=>(
                        <div  key={id}>
                            <label htmlFor=''>{obj.name}</label>
                            <p></p>
                            <input {...obj}  className='px-3 py-1 border-2 w-full rounded-md'/>
                        </div>
                    ))}
                    
                    <button type="submit" className='btn-primary w-[200px] my-5'>Login</button> 
                    <p>Not Registered?<Link to="/auth/register">Register</Link></p>  
                </form>
              </div>
        </div>
    </div>
  )
}

export default Register
