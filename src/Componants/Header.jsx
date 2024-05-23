import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../index.css'


function Header({afterlogin}) {
  const navigate = useNavigate()

const handlelogout = ()=>{
  sessionStorage.clear()
  navigate('/login')

}


  return (
    <div className='d-flex justify-content-between ps-3 pe-3 '>
      <h6 className='headerwatch'>D'WATCH</h6>
     {afterlogin && 
     <div className='d-flex justify-content-between'>
       
          <div   className=' me-4 border-bottom border-success border-2 '>
          <Link style={{textDecoration:"none",color:'#b0b7b8'}} to = {'/home'}>Product</Link>
          </div>
          <div className='me-4'>
          <Link style={{textDecoration:"none",color:'#b0b7b8'}}>About</Link>
          </div>
          <div className='me-4' >
          <Link style={{textDecoration:"none",color:'#b0b7b8'}} to = {'/contact'}>Contact</Link>
  
          </div>
          <div className='me-4'  >
          <a style={{textDecoration:"none",color:'#b0b7b8'}} onClick={handlelogout}> Logout </a>
          </div>
       
      </div>}
    </div>
  )
}

export default Header