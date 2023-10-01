import axios from 'axios';
const API = 
   axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
    headers: {
        authorization: `Bearer ${JSON.parse(localStorage.getItem('foodbite')).token}`
    },
    
   });

export default  API