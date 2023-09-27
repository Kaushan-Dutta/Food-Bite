import React,{useState} from 'react'
import Searchbox from '../../components/Searchbox'

const CustomPizza = () => {
  const {searchParams,setSearchParams}=useState();
  const array=[1,2,3,4,5]
  return (
    <div id="" className='primary-container py-40 '>
        <header className='text-5xl font-header text-theme text-center'>Your CustomPizzas</header>
        <Searchbox text="Search Order"
             searchParams={searchParams} setSearchParams={setSearchParams}/>
        <div className='flex flex-row justify-between gap-10 flex-wrap  '>
            {array.map((obj,id)=>(
               <div className='w-[300px] h-[200px] rounded-sm shadow-lg border-2 p-5 text-center transition ease-in hover:-translate-y-2'>
                 <p className='text-md font-primary'>Matereros Pizza</p>
                 <div className='my-3 flex flex-row justify-center  flex-wrap gap-1 '>
                    <li className='list-none btn-small bg-theme w-fit px-2'>American Peri X 3</li>
                    <li className='list-none btn-small bg-theme w-fit px-2'>American Peri X 3</li>
                    <li className='list-none btn-small bg-theme w-fit px-2'>American Peri X 3</li>
                    <li className='list-none btn-small bg-theme w-fit px-2'>American Peri X 3</li>
                    <li className='list-none btn-small bg-theme w-fit px-2'>American Peri X 3</li>

                  
                  </div>
                  <button className='btn-small w-[100px] bg-primary p-1 mx-auto'>Delete</button>
               </div>
            ))}
            
        </div>
    </div>
  )
}

export default CustomPizza