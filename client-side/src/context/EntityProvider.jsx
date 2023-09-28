import React, { useContext,createContext, useState, useEffect } from 'react'
import Loading from '../components/Loading';

const Data=createContext();

const EntityProvider = ({children}) => {

  const [entity,createEntity]=useState();
  const [authenticated,setAuthenticated]=useState(false);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    const entity=JSON.parse(localStorage.getItem('entity'));
    if(entity){
      createEntity(entity);
      setAuthenticated(true);
    }
    setLoading(false);
  },[])
  if(loading) return(<Loading/>)

  return (
    <Data.Provider value={{entity,createEntity,authenticated,setAuthenticated,loading,setLoading}}>
      {children}
    </Data.Provider>  
  )
}

export default EntityProvider
export const useEntity=()=>useContext(Data);