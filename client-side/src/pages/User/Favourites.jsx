import React,{useState} from 'react'
import Searchbox from '../../components/Searchbox'
import PizzaBox from '../../components/PizzaBox';

const Favourites = () => {
  const {searchParams,setSearchParams}=useState();
  const array=[1,2,3,4,5]
  return (
    <div id="" className='primary-container py-40 '>
        <header className='text-5xl font-header text-theme text-center'>Your Favourites</header>
        <Searchbox text="Search Order"
             searchParams={searchParams} setSearchParams={setSearchParams}/>
        <div className='flex flex-row justify-between gap-10 flex-wrap   '>
            {array.map((obj,id)=>(
              <PizzaBox key={id}/>
            ))}
            
        </div>
    </div>
  )
}

export default Favourites