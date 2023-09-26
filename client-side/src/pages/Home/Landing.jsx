import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Filter_Links,} from "./static-content.jsx";

const Landing = () => {
  const array=[1,2,3,4,5,6,7]
  return (
    <div className=''>
       
       <section id="top-banner" className='h-[80vh] space-x-10 bg-primary py-40 primary-container flx-row-between'>
           <div className='w-1/2 gap-y-10 flex flex-col text-left'>
              <p className='text-7xl font-header text-theme'>Grab a bite of Pizza</p>
              <p className='text-lg font-primary text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quasi vero at saepe assumenda eligendi ipsam beatae! Assumenda mollitia alias ad sequi quisquam ut velit. Sunt similique ducimus laboriosam atque.</p>
              <button className='btn-primary w-[200px]'>Our Collection</button>
           </div>
           <div className='w-1/2'>
              <img src=""/>
           </div>
       </section>
       <section id="offers" className='primary-container my-20 '>
          <header className='text-5xl font-header  text-theme'>Ongoing Offers</header>
          <div className='flx-row-between overflow-x-auto bar'>
               {array.map((obj,id)=>(
                  <div className='cursor-pointer bg-contain flx-center flex-shrink-0 w-[500px] h-[250px] rounded-lg shadow-md ' key={id} style={{backgroundImage:`url(${'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ322EDOGf0dv1A4uHch1Cg_yCfww5WtQYbJg&usqp=CAU'}`}}>
                     {/* <div className=''>
                     <p className='text-3xl font-header text-theme'>Offer Name</p>
                     <p className='text-md font-primary text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                     </div> */}
                  </div>
               ))}
          </div>
       </section>
       <section id="beverages" className='primary-container my-20 '>
           
              <header className='text-5xl font-header text-theme'>Our Beverages</header>
              <div className='grid md:grid-cols-4 grid-cols-2 '>
                  {array.map((obj,id)=>(
                     <div className='bg-base my-5 flx-row-between w-[350px]  p-5 rounded-lg'>
                        <div className='w-1/4'>
                           <img src="https://static.vecteezy.com/system/resources/previews/021/620/229/non_2x/cute-burger-cartoon-icon-illustration-delicious-cheeseburger-food-icon-concept-illustration-suitable-for-icon-logo-sticker-clipart-free-vector.jpg" className='w-[70px] h-[70px] rounded-md'/>
                        </div>
                        <div className='2/4'>
                           <p className='text-lg font-header '>Beverage Name</p>
                           <p className='text-md font-primary text-primary'>Rs 250</p>
                        </div>
                        <div className='w-1/4'>
                           <button className='font-logo w-[50px] h-[50px] rounded-md  text-5xl bg-theme text-white'><b>+</b></button>
                        </div>
                     </div>
                  ))}
              </div>
           
       </section>
       <section id="menu-bar" className='primary-container my-20 '>
           <header className='text-5xl font-header text-theme text-center'>Our Pizza Collection</header>

           <div className="list-none flx-row-center flex-wrap text-center w-1/2 gap-3 mx-auto " >
               {Filter_Links.map((obj,id)=>
                  <li key={id} className='min-w-[50px] flx-row justify-center   cursor-pointer p-2 border-2 border-theme rounded-full text-theme font-primary hover:text-white hover:bg-theme'>{obj.header}</li>
               )}
            </div>
          
           <div className="flx-row-center flex-wrap gap-y-10 gap-x-5 mx-auto ">
               {
                  array.map((obj,id)=>(
                     <div className='w-[300px] h-[350px] rounded-lg shadow-md p-5 font-primary transition ease-out hover:-translate-y-2'>
                        <img src="https://static.vecteezy.com/system/resources/previews/021/620/229/non_2x/cute-burger-cartoon-icon-illustration-delicious-cheeseburger-food-icon-concept-illustration-suitable-for-icon-logo-sticker-clipart-free-vector.jpg" className='w-[200px] h-[200px] rounded-md mx-auto'/>
                        <div className=''>
                           <p className='text-lg font-header '>Pizza Name</p>
                           <div className='flx-row-between my-3'>
                              <p className='text-md font-primary text-primary'>Rs 250</p>
                              <button className=' w-[100px] py-2 rounded-md  bg-primary text-white'>Add Item</button>
                           </div>
                        </div>
                     </div>
                  ))
               }
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