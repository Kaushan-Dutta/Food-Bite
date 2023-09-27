import React,{useState} from 'react'
//import { Link } from 'react-router-dom'
import { useEntity } from '../context/EntityProvider'

const Profile = () => {
  const {entity,createEntity,authenticated,setAuthenticated,loading,setLoading}=useEntity();
  
  return (
    <div className='primary-container py-40'>
        <div className='w-3/4 rounded-xl shadow-lg p-10 mx-auto border-2 flx-row-between font-primary'>
            <div className='w-1/3 text-center '>
               <img src="" alt="" className='w-[300px] h-[300px] rounded-full'/>
            </div>
            <form className='w-2/3 my-5' >
              
                  <div  >
                      <label htmlFor=''></label>
                      <p></p>
                      <input  className='px-3 py-1 border-2 w-full rounded-md'/>
                  </div>
              
              
           </form>
        </div>
    </div>
  )
}

export default Profile