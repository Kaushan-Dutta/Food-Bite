import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const EntityProvider = () => {
  
  return (
    <div>
       <Outlet/>
    </div>
  )
}

export default EntityProvider