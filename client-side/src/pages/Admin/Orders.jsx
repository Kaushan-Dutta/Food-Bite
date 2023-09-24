import React, { useState } from 'react'
import Searchbox from '../../components/Searchbox';

const Orders = () => {
  const {searchParams,setSearchParams}=useState();
  return (
    <div className=''>
        <Searchbox text="Search Order"
             searchParams={searchParams} setSearchParams={setSearchParams}/>
        <div className=''>
            List of Orders
        </div>
    </div>
  )
}

export default Orders