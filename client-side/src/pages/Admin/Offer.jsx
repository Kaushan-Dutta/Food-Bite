import React,{useState} from 'react'
import Searchbox from '../../components/Searchbox';

const offerBox=async()=>{
  <div className=''>
    <img src=""/>
    <div className=''>

    </div>
    <div className='cursor-pointer bg-contain flx-center flex-shrink-0 w-[500px] h-[250px] rounded-lg shadow-md ' key={id} >

      <div className=''>

      </div>
      <div className=''>
        
      </div>
    </div>
  </div>
}
const Offer = () => {
  const {searchParams,setSearchParams}=useState();

  return (
    <div className='primary-container py-40'>
        <header className='text-5xl font-header  text-theme'>Ongoing Offers</header>

        <Searchbox text="Search Offers"
             searchParams={searchParams} setSearchParams={setSearchParams}/>
        
        <div className=''>
            <OfferBox/>
        </div>
    </div>
  )
}

export default Offer