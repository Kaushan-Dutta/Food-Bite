import React, { useState } from 'react'
import CreatePizza from './CreatePizza';
import CreateCustomPizza from './CreateCustomPizza';
import { useEntity } from '../../context/EntityProvider';

const Popup = () => {
  const [state,setState]=useState(false);
  const {entity}=useEntity();

  return (
    <>
        <div className='fixed z-10 bottom-5 right-5'>
            <button className='flx-row-center w-[70px] h-[70px] rounded-full bg-theme hover:bg-base text-3xl text-white ' onClick={()=>setState(true)}>+</button>
        </div>
        {state && (entity?.entity=='user'?<CreateCustomPizza state={state} setState={setState}/>:<CreatePizza state={state} setState={setState}/>)}
    </>
  )
}

export default Popup