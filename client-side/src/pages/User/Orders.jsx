import React, { useState } from 'react'
import Searchbox from '../../components/Searchbox';
import OrderBox from '../../components/OrderBox';

const Orders = () => {
  const {searchParams,setSearchParams}=useState();
  const array=[1,2,3,4,5]
  return (
    <div id="" className='primary-container py-40 '>
        <header className='text-5xl font-header text-theme text-center'>Update the orders</header>
        <Searchbox text="Search Order"
             searchParams={searchParams} setSearchParams={setSearchParams}/>
        <div className='flex flex-col gap-5 mx-auto w-3/4'>
            {array.map((obj,id)=>(
              <OrderBox key={id}/>
            ))}
            
        </div>
    </div>
  )
}

export default Orders