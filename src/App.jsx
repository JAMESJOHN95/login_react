import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Contact from './Pages/contactUs/Contact'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>

    </>
  )
}

export default App
