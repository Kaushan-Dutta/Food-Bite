import React, { useCallback, useState, useEffect } from 'react';
import { useEntity } from '../context/EntityProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const createAxiosInstance = (token) => {
  return axios.create({
    baseURL: 'http://localhost:7000/admin/',
    headers: {
      authorization: `Bearer ${token}`
    }
  });
};


const axiosInstance = createAxiosInstance(localStorage.getItem('foodbite').token); // Create the Axios instance once

const AdminCall = () => {
  const { entity, setEntity } = useEntity();

  const Inventories = async () => {
    try {
      const inventories = await axiosInstance.get('/inventories'); // Reuse the same Axios instance
      console.log(inventories.data.message);
      return inventories.data.message;
    } catch (err) {
      toast.error("Incomplete fetch");
    }
  }
  const AddPizza = useCallback(async ({pizza,profile}) => {
    console.log(pizza,profile);
    /* try {
      const inventories = await axiosInstance.post('/createPizza', pizza); // Reuse the same Axios instance
      console.log(inventories.data.message);
      return inventories.data.message;
    } catch (err) {
      toast.error("Incomplete fetch");
    } */
  },[pizza])

  return { Inventories, AddPizza };
}

export default AdminCall;