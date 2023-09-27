import React from 'react'

const PizzaBox = () => {
  return (
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
  )
}

export default PizzaBox