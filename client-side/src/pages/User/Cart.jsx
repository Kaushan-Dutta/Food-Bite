import React,{useReducer} from 'react'

const reducer=(state,action)=>{
  if(action.type==='Increment'){return state+1}
  if(action.type==='Decrement'){return state-1}
}
const CartBox=()=>{
  const [state,dispatch]=useReducer(reducer,1);

  return(
    <div className='w-2/3 h-[100px] shadow-lg rounded-md p-5 px-10 transition-hover border-2 flx-row-between'>
      <div className='flx-row-center'>
        <img src="https://api.dicebear.com/7.x/identicon/svg?seed=Pumpkin" className=' w-[50px] rounded-md' />
        <div className='font-header'>
          <p className='text-primary'>Maeritotis Pizza</p>
          <p>Size: 5</p>
        </div>
      </div>
      <div className='font-primary text-lg'>
         <p>Rs 200.00</p>
      </div>
      <div className='font-primary text-lg flx-row-between '>
        <p>Quantity: </p>
        <button className='w-[30px] h-[30px] rounded-md p-1 bg-slate-200 flx-row-center text-3xl' onClick={()=>dispatch({type:"Increment"})}>+</button>
        <span>{state}</span>
        <button className='w-[30px] h-[30px] rounded-md p-1 bg-slate-200 flx-row-center text-3xl' onClick={()=>dispatch({type:"Decrement"})}>-</button>
      </div>
    </div>
  )
}
const Cart = () => {
  const array=[1,2,3]
  return (
    <div id="" className='primary-container py-40 '>
        <header className='text-5xl font-header text-theme text-center'>Your Cart</header>
        
        <div className='flex flex-col gap-10 justify-center items-center'>
            {array.map((obj,id)=>(
              <CartBox key={id}/>
            ))}
            
        </div>
        <div className='gap-5 flex flex-col justify-end w-2/3 mx-auto'>
        <p className='font-header text-3xl '>NetPrice: Rs 2000</p>
        <input type="text" placeholder='Ente the address of delivery' className='w-[400px] outline-none border-2 p-2 rounded-md '/>
        <button className='btn-primary w-[200px]'>Payment</button>
    </div>
    </div>
  )
}

export default Cart