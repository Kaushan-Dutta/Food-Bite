import React, { useContext,createContext, useState } from 'react'

const Data=createContext();

const EntityProvider = ({children}) => {

  const [entity,createEntity]=useState();
  const [authenticated,setAuthenticated]=useState(false);
  const [loading,setLoading]=useState(true);

  return (
    <Data.Provider value={{entity,createEntity,authenticated,setAuthenticated,loading,setLoading}}>
      {children}
    </Data.Provider>  
  )
}

export default EntityProvider
export const useEntity=()=>useContext(Data);