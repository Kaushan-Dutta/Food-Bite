import React,{useState} from 'react'
import Searchbox from '../../components/Searchbox';

const Offer = () => {
  const {searchParams,setSearchParams}=useState();

  return (
    <div className=''>
        <Searchbox text="Search Offers"
             searchParams={searchParams} setSearchParams={setSearchParams}/>
        
        <div className=''>
            Offers
        </div>
    </div>
  )
}

export default Offer