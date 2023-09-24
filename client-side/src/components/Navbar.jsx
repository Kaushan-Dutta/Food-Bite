import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {Navlinks} from '../route.config.js'

const Navbar = () => {
  const [entity,setEntity]=useState();

  return (
    <nav>
          <div className=''>
             <Link to="/">Food Bite</Link>
          </div>
          <div className=''>
             {Navlinks.filter((obj)=>                
                obj.showOnNav              
             ).filter((obj)=>(
                obj.protected?(entity?.name==obj.author?true:false):true
             )).map((route,id)=>(
                <Link to={route.path} key={id}>{route.name}</Link>
             ))}
             <button>
                {entity?<Link>Logout</Link>:<Link to="/auth/register">Login</Link>}
             </button>
          </div>
          <div className=''>
              {entity && (
                  <img src="" />
              )}
              <div className=''>
                {Navlinks.filter((obj)=>                
                    obj.showOnDrop              
                ).filter((obj)=>(
                    obj.protected?(entity?.name==obj.author?true:false):true
                )).map((route,id)=>(
                    <Link to={route.path} key={id}>{route.name}</Link>
                ))}
              </div>
          </div>
    </nav>
  )
}

export default Navbar