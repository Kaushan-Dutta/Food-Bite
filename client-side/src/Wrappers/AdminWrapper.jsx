import React, { useEffect,useState } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../components/Loading'
import { useEntity } from '../context/EntityProvider'

const AdminWrapper = () => {

  const {entity}=useEntity();
  /* useEffect(()=>{
    setLoading(true);

    if(entity?.entity!='admin'){
      window.location.href='/';
    }
    setLoading(false);
  },[])
  
  if(loading) return (<Loading/>) */
  
  return (
    <div>
       {entity?.entity=="admin"?<Outlet/>:<Loading/>}
    </div>
  )
}

export default AdminWrapper