import React from 'react'


const CreatePizza = () => {
  return (
    <div className='popup-window'>
      <div className='w-1/2 bg-slate-100 rounded-lg shadow-lg p-10'>
          <div className='text-right'>
            <button className='justify-end'>X</button>
          </div>
          <header className='text-5xl font-header  text-theme'>New Pizza Creation </header>

          <div className='flx-row-between space-x-5 mt-5'>
              <div className='w-1/3'>
                <img src="" className='bg-slate-300 rounded-full w-full h-[250px]'/>
                <p className='text-center'>Upload Image</p>
              </div>
              <div className='w-2/3 flex flex-col gap-3 font-primary'>
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
                <p>Description</p>
                <input type="text" className='w-full p-2'/>
                <div className='flx-row-between'>
                    <div className='w-1/2'>
                      <p>Price:</p>
                      <input type="number" className='w-full p-2'/>
                    </div>
                    <div className='w-1/2'>
                      <p>Size:</p>
                      <select className='w-full p-2'>
                          <option>Personal</option>
                          <option>Small</option>
                          <option>Medium</option>
                          <option>Large</option>
                      </select>
                    </div>
                </div>
                <p>Ingredients:</p>
                <select className='w-full p-2'>
                        <option>Personal</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                </select>
                <button className='btn-primary bg-theme w-[200px]'>Create Pizza</button>
              </div>
          </div>

      </div>
    </div>
  )
}

export default CreatePizza