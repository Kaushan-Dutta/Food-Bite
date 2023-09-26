import React,{useState,useCallback} from 'react'
import {useDropzone} from 'react-dropzone';
import {userlogic} from '../../logic/user.logic'
import { Link } from 'react-router-dom'

const Register = () => {
  const {profile,setProfile,image,setImage,inputFields,handleSubmit}=userlogic();

  const onDrop=useCallback(async(acceptedFiles)=>{
    //console.log(isDragActive,acceptedFiles[0]);
    setProfile(acceptedFiles[0]);
    setImage(URL.createObjectURL(acceptedFiles[0]))
  },[])
  
  const {getRootProps, getInputProps, isDragActive} = useDropzone(
    {onDrop,type:'image/jpeg,image/png,image/jpg'});
  
  return (
    <div className=''>
        <div className=''>

        </div>
        <div className='' >
           <div className=''>
               <img src={image} alt="" />
               <div className='' {...getRootProps()}>
                    <input {...getInputProps()}/>
                    <p>{profile.path}</p>
               </div>

           </div>
           <form className='' onSubmit={handleSubmit}>
              {inputFields.map((obj,id)=>(
                  <div className='' key={id}>
                      <label htmlFor=''>{obj.name}</label>
                      <input {...obj}/>
                  </div>
              ))}
              
              <button type="submit" className=''>Get Started</button>  
              <p>Already Registered?<Link to="/auth/login">Login</Link></p>  
           </form>
        </div>
    </div>
  )
}

export default Register