import React, { useEffect,useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../components/Loading';

const AuthWrapper = () => {
  const [state,setState]=useState(true);

  useEffect(()=>{
    const entity=JSON.parse(localStorage.getItem('foodbite'));
    if(entity){
      window.location.href='/';
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

export default AuthWrapper