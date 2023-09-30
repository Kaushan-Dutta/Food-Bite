import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Navlinks} from '../route.config.js'
import { useEntity } from '../context/EntityProvider'

const Navbar = () => {
  const {entity,createEntity}=useEntity();

  const [dropbar,setDropbar]=useState(false);
  return (
    <nav className='w-full fixed bg-primary shadow-md p-5 text-white primary-container flx-row-between font-primary text-2xl '>
          
          <div className='w-1/5'>
             <Link to="/" className='font-logo text-5xl '>Food Bite</Link>
          </div>

          <div className='w-4/5 flx-row justify-end  space-x-10  '>
             {Navlinks.filter((obj)=>                
                obj.showOnNav              
             ).filter((obj)=>(
                obj.protected?(entity?.entity==obj.author?true:false):true
             )).map((route,id)=>(
                <Link to={route.path} key={id} className='hover:text-[#FFA500]'>{route.name}</Link>
             ))}
             <button className='btn-primary w-[150px]'>
                {entity?<Link onClick={()=>{localStorage.removeItem('foodbite');window.location.href="/";}}>Logout</Link>:<Link to="/auth/login">Login</Link>}
             </button>
          </div>

          <div className=''>
              {entity && (
                  <img src={entity?.entity=='user'?(entity?.user.profile):(entity?.admin.profile)} className='w-[55px] h-[50px]  rounded-full cursor-pointer' onClick={()=>setDropbar(!dropbar)}/>
              )}
              <div className={`${dropbar?'flex flex-col':'hidden'} w-[170px] p-5 rounded-lg bg-theme gap-y-3 text-md absolute -translate-x-20 translate-y-5`}>
                {Navlinks.filter((obj)=>                
                    obj.showOnDrop              
                ).filter((obj)=>(
                    obj.protected?(entity?.entity==obj.author?true:false):true
                )).map((route,id)=>(
                    <Link to={route.path} key={id} className='hover:text-primary'>{route.name}</Link>
                ))}
              </div>
          </div>

    </nav>
  )
}

export default Navbar