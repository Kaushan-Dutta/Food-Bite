import React,{useCallback,useEffect,useState} from 'react'
import toast from 'react-hot-toast'
import storage from '../Configure/appwrite.config.js'
import {v4 as uuidv4} from 'uuid';
import  API  from './index.js';


export const Pizza= () => {
  const [loading,setLoading]=useState(false);
  const [name,setName]=useState('');
  const [description,setDescription]=useState('');
  const [price,setPrice]=useState('');
  const [size,setSize]=useState('Personal');
  const [ingredients,setIngredients]=useState([]);
  const [heading,setHeading]=useState('');
  const [image,setImage]=useState('');

  
  const CreatePizza = async (e) => {
    e?.preventDefault();
    console.log(image,price,size,heading,description,name,ingredients);
    setLoading(true)

    try {
      const uploadImage= await storage.createFile(import.meta.env.VITE_APP_APPWRITE_BUCKET_KEY, uuidv4(), image);
      const getFilePreview = await storage.getFilePreview(import.meta.env.VITE_APP_APPWRITE_BUCKET_KEY,uploadImage.$id);
      const img=getFilePreview.href;
      //console.log(img);
      
      const createpizza = await API.post("/admin/createPizza",{image:img,price,size,heading,description,name,ingredient:ingredients} ); 
      toast.success(createpizza.data.message);
      
      //return inventories.data.message;
    } catch (err) {
      console.log(err);
      toast.error("Incomplete fetch");
    } 
    setLoading(false)
    //window.location.reload();

  }

  return {CreatePizza,loading,setLoading,description,setDescription,
    price,setPrice,image,setImage,name,setName,size,setSize,ingredients,setIngredients,
    heading,setHeading}
}

