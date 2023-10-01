import React,{useState,useCallback,useEffect} from 'react'
import { Outlet } from 'react-router-dom';
import { useEntity } from '../context/EntityProvider';
import Loading from '../components/Loading';
import axios from 'axios';

const EntityWrapper = () => {
  const {entity,createEntity,authenticated,setAuthenticated,loading,setLoading}=useEntity();
  useEffect(()=>{
    const loadContents=async()=>{
                //setLoading(true);
                const res=JSON.parse(localStorage.getItem('foodbite'));
                console.log(res)
                if(res){
                try{
                const getEntity=await axios.get('http://localhost:7000',{headers:{
                    authorization:`Bearer ${res.token}`
                }});
                //console.log("This is entity",getEntity.data);
                createEntity(getEntity.data);
                //setAuthenticated(true);
                }
                catch(err){
                    console.log(err);
                }
                } 
        
                //setLoading(false);
            }
            
        loadContents();
    },[])
  if(loading) return (<Loading/>)
  return (
    <div><Outlet/></div>
  )
}

export default EntityWrapper
