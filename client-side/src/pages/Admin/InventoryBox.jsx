import React,{useState} from 'react'

const InventoryBox = () => {
  const [add,setAdd]=useState(false);
  return (
    <div className=' m-5 flex flex-col w-[350px]'>
        <div className= 'bg-base flx-row-between  p-5 rounded-lg'>
            <div className='w-1/4'>
                <img src="https://static.vecteezy.com/system/resources/previews/021/620/229/non_2x/cute-burger-cartoon-icon-illustration-delicious-cheeseburger-food-icon-concept-illustration-suitable-for-icon-logo-sticker-clipart-free-vector.jpg" className='w-[70px] h-[70px] rounded-md'/>
            </div>
            <div className='2/4'>
                <p className='text-lg font-header '>Item Name</p>
                <p className='text-md font-primary text-primary'>250 units</p>
            </div>
            <div className='w-1/4' onClick={()=>setAdd(!add)}>
                <button className='font-logo w-[50px] h-[50px] rounded-md  text-5xl bg-theme text-white'><b>+</b></button>
            </div>
        </div>
        <div className={`${add?'':'hidden'} my-5 p-5 rounded-lg bg-base `}>
            <input type='number' className='rounded-full w-full px-5 py-2 ' placeholder='Enter the value'/>
        </div>
    </div>
  )
}

export default InventoryBox