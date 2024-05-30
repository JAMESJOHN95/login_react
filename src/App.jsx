import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Contact from './Pages/contactUs/Contact'
import { useContext, useEffect, useState } from 'react'
import { tokenAuthenticationContext } from './Contexts/TokenAuthentication'

function App() {
const {isAuthentication,setIsAuthentication} = useContext(tokenAuthenticationContext)
// console.log(`"isauthentication :" ${isAuthentication}`);



  return (
    <>
      <Routes>
        <Route path='/' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={isAuthentication?<Home/>  : <Navigate to = {'/login'} />}/>
        <Route path='/contact' element={ isAuthentication?<Contact/>  : <Navigate to = {'/login'} /> }/>
        <Route path='/*' element = {<Navigate to= {'/'}/>}/>

      </Routes>

    </>
  )
}

export default App
