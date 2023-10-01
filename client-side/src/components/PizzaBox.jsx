import React from 'react'

const PizzaBox = ({obj}) => {
  return (
    <div className='w-[300px] h-[350px] rounded-lg shadow-md p-5 font-primary transition ease-out hover:-translate-y-2'>
        <img src={obj.image} className='w-[200px] h-[200px] rounded-md mx-auto'/>
        <div className=''>
                <p className='text-lg font-header '>{obj.name}</p>
                <div className='flx-row-between my-3'>
                    <p className='text-md font-primary text-primary'>Rs {obj.price}</p>
                    <button className=' w-[100px] py-2 rounded-md  bg-primary text-white'>Add Item</button>
                </div>
        </div>
    </div>
  )
}

export default PizzaBox