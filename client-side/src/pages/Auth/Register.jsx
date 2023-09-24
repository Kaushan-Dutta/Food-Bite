import React from 'react'

const Register = () => {
  return (
    <div className=''>
        <div className=''>

        </div>
        <div className='' form={onSubmit}>
           <div className=''>
               <div className=''>

               </div>

           </div>
           <div className=''>
              <label>Your Name:</label>
              <input type="text" className='' placeholder='Enter your Name...'/>
              <label>Enter Password:</label>
              <input type="password" className='' placeholder='Enter password'/>
              <label>Your Phone no.</label>
              <input type="number" className='' placeholder='10 digit phone number'/>
              <label>Your Email id</label>
              <input type="email" className='' placeholder='Your Email'/> 
              <button type="submit" className=''>Get Started</button>  
              <p>Already Registered?<Link to="/auth/login">Login</Link></p>  
           </div>
        </div>
    </div>
  )
}

export default Register