import React, { useState } from 'react'
import Searchbox from '../../components/Searchbox';

const OrderBox=()=>{
  return(
    
      <div className=' w-full h-[120px]   bg-slate-100 flx-row-between rounded-lg p-5 shadow-lg '>
        <div className='w-3/5 '>
          <p className='font-primary'>Order Id:1a2b3c9-29920-30292</p>
          <div className='group my-1 flex flex-row  flex-wrap gap-1'>
            <li className='list-none btn-small bg-primary w-fit px-2'>American Peri X 3</li>
            <li className='list-none btn-small bg-primary w-fit px-2'>American Peri X 3</li>
            <li className='list-none btn-small bg-primary w-fit px-2'>American Peri X 3</li>
            <li className='list-none btn-small bg-primary w-fit px-2'>American Peri X 3</li>
            <li className='list-none btn-small bg-primary w-fit px-2'>American Peri X 3</li>

          
          </div>
          <p className='font-primary'>24/7 Nagtala Road Gariahat,Kolkata</p>
        </div>
        <div className='w-1/5 flx-row-center font-primary  '>
          <select className='rounded-md p-2'>
            <option value="">Approved</option>
            <option value="">Reject</option>
            <option value="">Packed</option>
            <option value="">Shipped</option>
            <option value="">Delivered</option>
          </select>
        </div>
        <div className='w-1/5 flx-row justify-end'>
            <button className='btn-primary bg-theme w-[100px]'>Save</button>
        </div>
      </div>
   
  )
}
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