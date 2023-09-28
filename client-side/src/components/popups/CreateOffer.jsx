import React from 'react'


const CreateOffer = () => {
  return (
    <div className='popup-window'>
      <div className='w-1/3 bg-slate-100 rounded-lg shadow-lg p-10'>
          <div className='text-right'>
            <button className='justify-end'>X</button>
          </div>
          <header className='text-5xl font-header  text-theme'>New Offer</header>

          <div className='mt-5 font-primary'>
              <div className='w-full'>
                <img src="" className='bg-slate-300 rounded-lg w-full h-[150px]'/>
              </div>
                  <div className='flx-row-between space-x-5'>
                      <div className='w-1/2'>
                        <p>Offer Name:</p>
                        <input type="text" className='w-full p-2'/>
                      </div>
                      <div className='w-1/2'>
                        <p>Discount Percent</p>
                        <input type="number" className='w-full p-2'/>
                      </div>
                  </div>
                  <p>Description</p>
                  <input type="text" className='w-full p-2'/>
                  <div className='flx-row-between'>
                      <div className='w-1/2'>
                          <p>Start Date</p>
                          <input type="date" className='w-full p-2'/>
                      </div>
                      <div className='w-1/2'>
                          <p>End Date</p>
                          <input type="date" className='w-full p-2'/>
                      </div>
                  </div>
      
              <button className='my-3 btn-primary bg-theme w-[200px]'>Create Offer</button>
          </div>
        </div>

    </div>
  )
}

export default CreateOffer