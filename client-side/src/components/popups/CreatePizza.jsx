import React,{useEffect,useState,useCallback} from 'react'
import AdminCall from '../../query-call/adminCall';
import {useEntity} from '../../context/EntityProvider';
import Loading from '../Loading';
import {useDropzone} from 'react-dropzone';


const CreatePizza = ({state, setState}) => {

  const [inventories,setInventories]=useState([]);
  const {loading,setLoading}=useEntity();
  const [pizza,setPizza]=useState({name:'',description:'',price:0,size:'Personal',ingredients:[],heading:''})
  const [image,setImage]=useState('');
  const [profile,setProfile]=useState('');


  const {Inventories,AddPizza}=AdminCall();

  let Name,Value=""

  const handleChange=(e)=>{
    e.preventDefault();
    Name=e.target.name;
    Value=e.target.value;
    setPizza({...pizza,[Name]:Value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(pizza);
    AddPizza({pizza,profile});
  }

  const onDrop=useCallback(async(acceptedFiles)=>{
    setProfile(acceptedFiles[0]);
    setImage(URL.createObjectURL(acceptedFiles[0]))
  },[image])

  const {getRootProps, getInputProps, isDragActive} = useDropzone(
    {onDrop,type:'image/jpeg,image/png,image/jpg'});

  const handleIngredient=(obj)=>{
      //console.log(pizza.ingredients)
      const isPresent=pizza.ingredients.includes(obj);
      
      if(isPresent){
        const index=pizza.ingredients.indexOf(obj);
        pizza.ingredients.splice(index,1);
      }
      else{
        pizza.ingredients.push(obj);
      }
      setPizza({...pizza,ingredients:pizza.ingredients});

  }
  useEffect(()=>{
    const loadContents=async()=>{

      setInventories(await Inventories());
    }
    loadContents();
  },[])

  if(loading) return (<Loading/>)

  return (
    <div className='popup-window'>
      <div className='w-1/2 bg-slate-100 rounded-lg shadow-lg p-10'>
          <div className='text-right'>
            <button className='justify-end' onClick={()=>{setState(false)}}>X</button>
          </div>
          <header className='text-5xl font-header  text-theme'>New Pizza Creation </header>

          <form className='flx-row-between space-x-5 mt-5' onSubmit={handleSubmit}>
              <div className='w-1/3' {...getRootProps()}>
                <input {...getInputProps()}/>
                <img src={image} className='bg-slate-300 rounded-full w-full h-[220px]'/>
                <p className='text-center'>Upload Image</p>
              </div>
              <div className='w-2/3 flex flex-col gap-3 font-primary'>
                <div className='flx-row-between'>
                    <div className='w-1/2'>
                        <p>Pizza Name:</p>
                        <input type="text" className='w-full p-2' value={pizza.name} onChange={handleChange} name="name"/>
                    </div>
                    <div className='w-1/2'>
                        <p>Heading:</p>
                        <input type="text" className='w-full p-2' value={pizza.heading} onChange={handleChange} name="heading"/>
                    </div>
                </div>
                <p>Description</p>
                <input type="text" className='w-full p-2' value={pizza.description} onChange={handleChange} name="description"/>
                <div className='flx-row-between'>
                    <div className='w-1/2'>
                      <p>Price:</p>
                      <input type="number" className='w-full p-2' value={pizza.price} onChange={handleChange} name="price"/>
                    </div>
                    <div className='w-1/2'>
                      <p>Size:</p>
                      <select id="pizza-size" className='w-full p-2' value={pizza.size} onChange={()=>{
                        const size=document.getElementById('pizza-size').value;
                        setPizza({...pizza,size:size})
                      }} name="size">
                          <option>Personal</option>
                          <option>Small</option>
                          <option>Medium</option>
                          <option>Large</option>
                      </select>
                    </div>
                </div>
                <p>Ingredients:</p>
                <div className='w-full p-2 list-none flex-wrap'>
                  {inventories?.map((obj,id)=>(
                      <li key={id}><input type="checkbox" onChange={()=>handleIngredient(obj._id)} checked={pizza.ingredients.includes(obj._id)}/>&nbsp;{obj.ingredient}</li>
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