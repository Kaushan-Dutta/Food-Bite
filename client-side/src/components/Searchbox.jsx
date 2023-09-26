import React from 'react'

const Searchbox = ({text,searchParams,setSearchParams}) => {
  return (
    <div className='w-1/2 mx-auto my-10'>
      <div className='w-full h-[70px]  bg-slate-100 flx-row-between rounded-full p-5 shadow-lg'>
          
              <input className="outline-none w-full font-primary bg-slate-100 px-5" type="text" placeholder={text}/>
          
       
              <button className='btn-primary w-[150px]'>Search</button>
     
      </div>
    </div>
  )
}

export default Searchbox