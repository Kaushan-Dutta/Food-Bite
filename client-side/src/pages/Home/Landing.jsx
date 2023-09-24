import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Filter_Links,} from "./static-content.jsx";

const Landing = () => {
  return (
    <div className=''>
       
       <section id="top-banner">
           <div className=''>
              <p>Grab a bite of Pizza</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi vero at saepe assumenda eligendi ipsam beatae! Assumenda mollitia alias ad sequi quisquam ut velit. Sunt similique ducimus laboriosam atque.</p>
              <button>Our Collection</button>
           </div>
           <div className=''>
              <img src=""/>
           </div>
       </section>
       <section id="offers">
          
       </section>
       <section id="beverages">
           <div className=''>
              <p>Our Beverages</p>
              <div className=''>

              </div>
           </div>
       </section>
       <section id="pizza-collection">
           <div className=''>
              <p>Our Pizza Collection</p>
           </div>
           <div className='menu-bar'>
               {Filter_Links.map((obj,id)=>
                  <li key={id}>{obj.header}</li>
               )}
            </div>
          
           <div className=''>
              
           </div>
       </section>
       <section id="newsletter">
         <div className=''>

         </div>
         <div className=''>

         </div>
       </section>
       
    </div>
  )
}

export default Landing