import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const API = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
    },
});

export const fetchData = () => {
    const [pizza,getPizzas]=useState([]);
    const [beverages,getBeverages]=useState([]);
    const [loading,setLoading]=useState(false);

    const fetchPizza =async() => {
        try{
            setLoading(true);
            const res=await API.get('/getPizzas');
            getPizzas(res.data.message);
            setLoading(false);
        }
        catch(err){
            toast.error("Unsuccessful fetch");
        }
    }
    useEffect(()=>{fetchPizza()},[])
    return {pizza,getPizzas,loading,setLoading}
}
