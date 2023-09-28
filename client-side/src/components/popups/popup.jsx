import React, { useState } from 'react'
import CreatePizza from './CreatePizza';
import CreateCustomPizza from './CreateCustomPizza';

const Popup = () => {
  const [state,setState]=useState(false);
  return (
    <>
        <div className='fixed z-10 bottom-5 right-5'>
            <button className='flx-row-center w-[70px] h-[70px] rounded-full bg-theme hover:bg-base text-3xl text-white ' onClick={()=>setState(true)}>+</button>
        </div>
        {state && <CreateCustomPizza/>}
    </>
  )
}

export default Popup