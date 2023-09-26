import React from 'react';
import { Link } from 'react-router-dom';
import { Footer_Links,Social_Links } from '../pages/Home/static-content';

const Footer = () => {
  return (
    <footer className='w-full bg-primary shadow-md py-10 text-white primary-container  font-primary text-2xl '>
          <div className='flx-row-between border-white py-10 border-b-2'>
            <div className='w-1/5'>
               <Link to="/" className='font-logo text-5xl '>Food Bite</Link>
            </div>
            <div className='w-4/5 flx-row justify-end  space-x-10 '>
               {Footer_Links.map((obj,id)=>
                  <Link to={obj.path} key={id} className='hover:text-[#FFA500]'>{obj.name}</Link>
               )}
            </div>
          </div>
          
          <div className='text-center'>
               <div className=''>
                  {Social_Links.map((obj,id)=>
                     <Link to={obj.link} key={id}>{obj.icon}</Link>
                  )}
               </div>
               <div className=''>
                  Copyright (c) 2023 | Food Bite
               </div>
          </div>
    </footer>
  )
}

export default Footer