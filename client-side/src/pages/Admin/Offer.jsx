import React,{useState} from 'react'
import Searchbox from '../../components/Searchbox';
import CreateOffer from '../../components/popups/CreateOffer';

const OfferBox=()=>{
  return(
  <div className='bg-slate-400 m-5 p-5 w-[350px] h-[450px] shadow-lg rounded-md transition ease-out hover:-translate-y-2'>
    <img className='h-2/3 mx-auto' src="https://static.vecteezy.com/system/resources/previews/021/620/229/non_2x/cute-burger-cartoon-icon-illustration-delicious-cheeseburger-food-icon-concept-illustration-suitable-for-icon-logo-sticker-clipart-free-vector.jpg"/>
    <div className=''>
      <p className='font-header text-2xl text-center'>12:00:23:34 left</p>
    </div>
    <div className='flx-row-between my-3'  >

      <div className=''>
        <p className='text-lg  '>Offer Name</p>
        <p className='text-sm font-primary text-primary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      </div>
      <div className=''>
        <button className='btn-small w-[50px] bg-base'>Add it</button>
      </div>
    </div>
  </div>)
}
const Offer = () => {
  const {searchParams,setSearchParams}=useState();
  const [state,setState]=useState(false);
  
  const array=[1,2,3,4,5,6]
  return (
    <div className='primary-container py-40 '>
        <header className='text-5xl font-header  text-theme'>Ongoing Offers</header>
        
        <Searchbox text="Search Offers"
             searchParams={searchParams} setSearchParams={setSearchParams}/>
        
        <div className='flx-row-center  flex-wrap'>
            {array.map((obj,id)=><OfferBox key={id}/>)}
        </div>
        <button className='btn-primary w-[200px] mx-auto' onClick={()=>setState(true)}>Create Offer</button>
        {state && <CreateOffer/>}
    </div>
  )
}

export default Offer