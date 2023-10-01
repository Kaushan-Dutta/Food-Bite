import React,{useState,useCallback,useEffect} from 'react'
import  API  from './index';
import toast from 'react-hot-toast';
import axios from 'axios';

export const Inventory = () => {
  const [inventories,setInventories]=useState([]);

  const [loading,setLoading]=useState(false);

  const getInventories =useCallback(async() =>{
    try {
        setLoading(true);
        //console.log("Entered to Inventory")
        const inventories = await API.get('/admin/inventories'); // Reuse the same Axios instance
        //console.log("///////////////",inventories.data.message);
        setInventories(inventories.data.message)
        setLoading(false);
        
      } catch (err) {
        toast.error("Incomplete fetch");
    }
  },[]);

  useEffect(()=>{
    getInventories();
  },[getInventories])


  return {inventories,setInventories,Inventory}
    
}

