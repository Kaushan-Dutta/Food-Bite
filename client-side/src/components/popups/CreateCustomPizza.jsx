import React from 'react'

const CreateCustomPizza = ({state,setState}) => {
  return (
    <div className='popup-window'>
      <div className='w-1/3 bg-slate-100 rounded-lg shadow-lg p-10'>
          <div className='text-right'>
            <button className='justify-end' onClick={()=>setState(false)}>X</button>
          </div>
          <header className='text-5xl font-header  text-theme'>Create Custom Pizza </header>

          <div className='flx-row-between space-x-5 mt-5'>
              
              <div className='flex flex-col gap-3 font-primary'>
                <div className='flx-row-between'>
                    <div className='w-1/2'>
                        <p>Pizza Name:</p>
                        <input type="text" className='w-full p-2'/>
                    </div>
                    <div className='w-1/2'>
                        <p>Heading:</p>
                        <input type="text" className='w-full p-2'/>
                    </div>
                </div>
                
                <div className='flx-row-between'>
                    <div className='w-1/2'>
                      <p>Pizza Veggies:</p>
                      <select className='w-full p-2'>
                          <option>Personal</option>
                          <option>Small</option>
                          <option>Medium</option>
                          <option>Large</option>
                      </select>
                    </div>
                    <div className='w-1/2'>
                      <p>Pizza Cheese Type:</p>
                      <select className='w-full p-2'>
                          <option>Personal</option>
                          <option>Small</option>
                          <option>Medium</option>
                          <option>Large</option>
                      </select>
                    </div>
                    
                </div>
                <div className='flx-row-between'>
                    <div className='w-1/2'>
                      <p>Pizza Bases:</p>
                      <select className='w-full p-2'>
                          <option>Personal</option>
                          <option>Small</option>
                          <option>Medium</option>
                          <option>Large</option>
                      </select>
                    </div>
                    <div className='w-1/2'>
                      <p>Pizza Sauce:</p>
                      <select className='w-full p-2'>
                          <option>Personal</option>
                          <option>Small</option>
                          <option>Medium</option>
                          <option>Large</option>
                      </select>
                    </div>
                    
                </div>
                <button className='btn-primary bg-theme w-[200px] my-3'>Create Pizza</button>
              </div>
          </div>

      </div>
    </div>
  )
}

export default CreateCustomPizza