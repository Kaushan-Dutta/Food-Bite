import React, { useEffect,useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../components/Loading'

const AdminWrapper = () => {

  const [state,setState]=useState(true);
  useEffect(()=>{
    const entity=JSON.parse(localStorage.getItem('entity'));
    if(!entity){
      window.location.href='/auth/login';
    }
    setState(false);
  },[])
  
  if(state) return (<Loading/>)
  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default AdminWrapper