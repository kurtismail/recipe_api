import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom" 
import { GlobalStyles } from '../components/globalstyles/GlobalStyles'
import About from '../pages/about/About'
import Detail from '../pages/detail/Detail'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Navbar from "./../components/nav/Navbar"
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login />}/>
   
        <Route path='about' element={<PrivateRouter />}>
          <Route path='' element={<About />}/>
        </Route>
  
        <Route path='detail' element={<PrivateRouter />}>
          <Route path='' element={<Detail />}/>
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default AppRouter
