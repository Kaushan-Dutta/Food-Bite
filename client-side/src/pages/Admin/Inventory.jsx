import React, { useState } from 'react'
import InventoryBox from './InventoryBox'

const Inventory = () => {
  const array=[1,2,3,4,5,6,7]
  
  return (
    
      <div className='primary-container py-40'>
        <header className='text-5xl font-header text-theme text-center'>Inventory System</header>
        <div className='grid md:grid-cols-4 grid-cols-2 '>
                  {array.map((obj,id)=>(
                    <InventoryBox/>
                  ))}
         </div>
      </div>
        
  
  )
}

export default Inventory