import React from 'react'

const OrderBox=()=>{
    const isAdminRoute = location.pathname.includes('admin');
    const isUserRoute = location.pathname.includes('user');

    return(
      
        <div className=' w-full h-[120px]   bg-slate-100 flx-row-between rounded-lg p-5 shadow-lg '>

          <div className='w-3/5 '>

            <p className='font-primary'>Order Id:1a2b3c9-29920-30292 | Price: Rs 2000.00</p>
            <div className='group my-1 flex flex-row  flex-wrap gap-1'>
              <li className='list-none btn-small bg-primary w-fit px-2'>American Peri X 3</li>
              <li className='list-none btn-small bg-primary w-fit px-2'>American Peri X 3</li>
              <li className='list-none btn-small bg-primary w-fit px-2'>American Peri X 3</li>
              <li className='list-none btn-small bg-primary w-fit px-2'>American Peri X 3</li>
              <li className='list-none btn-small bg-primary w-fit px-2'>American Peri X 3</li>
  
            
            </div>
            <p className='font-primary'>24/7 Nagtala Road Gariahat,Kolkata</p>
          </div>

          {isAdminRoute?(
            <div className='w-1/5 flx-row-center font-primary  '>
                <select className='rounded-md p-2'>
                <option value="">Approved</option>
                <option value="">Reject</option>
                <option value="">Packed</option>
                <option value="">Shipped</option>
                <option value="">Delivered</option>
                </select>
            </div>

          ):(<p className='font-primary'>Status: Confirmed</p>)}

          <div className='w-1/5 flx-row justify-end'>
              {isAdminRoute?<button className='btn-primary bg-theme w-[100px]'>Save</button>:
              <button className='btn-primary bg-theme w-[100px]'>Cancel</button>}
          </div>

        </div>
     
    )
  }
  

export default OrderBox