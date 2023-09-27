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
    <div className='primary-container py-40'>
        <div className='w-3/4 rounded-xl shadow-lg p-10 mx-auto border-2  font-primary'>
            <header className='text-5xl font-header  text-theme text-center my-5'>Welcome to Food Bite</header>
            <div className="flx-row-between">
                  <div className='w-1/3 text-center '>
                    <img src={image} alt="" className='w-[300px] h-[300px] rounded-full'/>
                    <div className='gap-5' {...getRootProps()}>
                          <input {...getInputProps()}/>
                          <p className='-translate-x-6'>{profile?profile.path:'Upload Image'}</p>
                    </div>
                  </div>
                  <form className='w-2/3 my-5' onSubmit={handleSubmit}>
                    {inputFields.map((obj,id)=>(
                        <div  key={id}>
                            <label htmlFor=''>{obj.name}</label>
                            <p></p>
                            <input {...obj}  className='px-3 py-1 border-2 w-full rounded-md'/>
                        </div>
                    ))}
                    
                    <button type="submit" className='btn-primary w-[200px] my-5'>Get Started</button> 
                    <p>Already Registered?<Link to="/auth/login">Login</Link></p>  
                </form>
              </div>
        </div>
    </div>
  )
}

export default Register
