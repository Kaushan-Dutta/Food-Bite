import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const AdminWrapper = () => {
  
  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default AdminWrapper