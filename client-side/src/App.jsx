import React from 'react'
import {Routes,Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Home/Landing'

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from './pages/Auth/ForgotPassword';

import Menu from './pages/Admin/Menu';
import Inventory from './pages/Admin/Inventory';
import Offer from './pages/Admin/Offer';
import AdminOrders from './pages/Admin/Orders';
import Profile from './components/Profile';

import CustomPizza from './pages/User/CustomPizza';
import Cart from './pages/User/Cart';
import Favourites from './pages/User/Favourites';
import UserOrders from './pages/User/Orders';

import AdminWrapper from './Wrappers/AdminWrapper';
import UserWrapper from './Wrappers/UserWrapper';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
          {/**Public Routes */}
          <Route path="/" element={<Landing/>}/>
          
          {/**Auth Routes */}
          <Route path="/auth">
              <Route path="login" element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="forgot-password" element={<ForgotPassword/>}/>
          </Route> 

          {/**Admin Routes */}
          <Route path="/admin" element={<AdminWrapper/>}>
              <Route index element={<Profile/>}/>
              <Route path="menu" element={<Menu/>}/>
              <Route path="orders" element={<AdminOrders/>}/>
              <Route path="inventory" element={<Inventory/>}/>
              <Route path="offer" element={<Offer/>}/>
          </Route> 

          {/**User Routes */}
          <Route path="/user" element={<UserWrapper/>}>
              <Route index element={<Profile/>}/>
              <Route path="custom-pizza" element={<CustomPizza/>}/>
              <Route path="orders" element={<UserOrders/>}/>
              <Route path="cart" element={<Cart/>}/>
              <Route path="favourites" element={<Favourites/>}/>
          </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

//<Route path="/pizza/:id" element={<Pizza/>}/>







{/**Payment Gateway */}