import React,{useState} from 'react'
import {authlogic} from '../../logic/entity-auth.logic'
import { Link } from 'react-router-dom'

const Register = () => {
  const {inputFields,handleSubmit}=authlogic();
  
   
  return (
    <div className=''>
        <div className=''>

        </div>
                 
           <form className='' onSubmit={handleSubmit}>
              {inputFields.map((obj,id)=>(
                  <div className='' key={id}>
                      <label htmlFor=''>{obj.name}</label>
                      <input {...obj}/>
                  </div>
              ))}
              
              <button type="submit" className=''>Login</button>  
              <p>Not Registered?<Link to="/auth/register">Sign Up</Link></p>  
           </form>
       
    </div>
  )
}

export default Register