import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const UserWrapper = () => {
  
  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default UserWrapper