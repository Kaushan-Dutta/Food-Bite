import React from 'react';
import { Link } from 'react-router-dom';
import { Footer_Links,Social_Links } from '../pages/Home/static-content';

const Footer = () => {
  return (
    <footer>
          <div className=''>
            <div className=''>
               <Link to="/">Food Bite</Link>
            </div>
            <div className=''>
               {Footer_Links.map((obj,id)=>
                  <Link to={obj.path} key={id}>{obj.name}</Link>
               )}
            </div>
          </div>
          <div className=''>
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