import React, { useEffect,useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading';
import { useEntity } from '../context/EntityProvider';


const UserWrapper = () => {
  const {entity,loading,setLoading}=useEntity();
  /* useEffect(()=>{
    setLoading(true);
      //console.log(entity.entity);
    
      if(entity && entity.entity=='user'){
        //window.location.href='/';
        console.log(entity);
      }
      else{
        window.location.href='/';
      }
  
    setLoading(false);
    
  },[entity,navigate])
  
  if(loading) return (<Loading/>) */
  
  return (
    <div>
       {entity?.entity=="user"?<Outlet/>:<Loading/>}
    </div>
  )
}

export default UserWrapper