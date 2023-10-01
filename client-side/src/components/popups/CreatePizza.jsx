import React,{useEffect,useState,useCallback} from 'react'
import Loading from '../Loading';
import {useDropzone} from 'react-dropzone';
import {Inventory} from '../../api/Admin/Inventory.logic'
import {Pizza} from '../../api/Admin/Pizza.logic'

const CreatePizza = ({state, setState}) => {


  const {inventories}=Inventory();
  const {CreatePizza,loading,description,setDescription,
    price,setPrice,image,setImage,name,setName,size,setSize,ingredients,setIngredients,
    heading,setHeading}=Pizza();

  
  const onDrop=useCallback(async(acceptedFiles)=>{
    setImage(acceptedFiles[0]);
  },[image])

  const {getRootProps, getInputProps, isDragActive} = useDropzone(
    {onDrop,type:'image/jpeg,image/png,image/jpg'});

  const handleIngredient=(obj)=>{
    const updatedIngredients = [...ingredients];

    const isPresent = updatedIngredients.includes(obj);
  
    if (isPresent) {
      const index = updatedIngredients.indexOf(obj);
      updatedIngredients.splice(index, 1);
    } else {
      updatedIngredients.push(obj);
    }
  
    setIngredients(updatedIngredients);

  }


  if(loading) return (<Loading/>)

  return (
    <div className='popup-window'>
      <div className='w-1/2 bg-slate-100 rounded-lg shadow-lg p-10'>
          <div className='text-right'>
            <button className='justify-end' onClick={()=>{setState(false)}}>X</button>
          </div>
          <header className='text-5xl font-header  text-theme'>New Pizza Creation </header>

          <form className='flx-row-between space-x-5 mt-5' onSubmit={CreatePizza}>
              <div className='w-1/3' {...getRootProps()}>
                <input {...getInputProps()}/>
                <img src={image!='' && URL.createObjectURL(image)} className='bg-slate-300 rounded-full w-full h-[220px]'/>
                <p className='text-center'>Upload Image</p>
              </div>
              <div className='w-2/3 flex flex-col gap-3 font-primary'>
                <div className='flx-row-between'>
                    <div className='w-1/2'>
                        <p>Pizza Name:</p>
                        <input type="text" className='w-full p-2' value={name} onChange={(e)=>{setName(e.target.value)}} />
                    </div>
                    <div className='w-1/2'>
                        <p>Heading:</p>
                        <input type="text" className='w-full p-2' value={heading} onChange={(e)=>{setHeading(e.target.value)}} />
                    </div>
                </div>
                <p>Description</p>
                <input type="text" className='w-full p-2' value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                <div className='flx-row-between'>
                    <div className='w-1/2'>
                      <p>Price:</p>
                      <input type="number" className='w-full p-2' value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                    </div>
                    <div className='w-1/2'>
                      <p>Size:</p>
                      <select id="pizza-size" className='w-full p-2' value={size} onChange={(e)=>{
                        const size=document.getElementById('pizza-size').value;
                        setSize(size)
                      }}>
                          <option>Personal</option>
                          <option>Small</option>
                          <option>Medium</option>
                          <option>Large</option>
                      </select>
                    </div>
                </div>
                <p>Ingredients:</p>
                <div className='w-full p-2 list-none flex-wrap'>
                  {inventories.length>0 && inventories.map((obj,id)=>(
                      <li key={id}><input type="checkbox" onChange={()=>handleIngredient(obj._id)} checked={ingredients.includes(obj._id).toString}/>&nbsp;{obj.ingredient}</li>
                  ))}
                </div>
                <button type="submit" className='btn-primary bg-theme w-[200px]'>Create Pizza</button>
              </div>
          </form>

      </div>
    </div>
  )
}

export default CreatePizza