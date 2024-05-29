import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../index.css'
import { googleLogout } from '@react-oauth/google'


function Header({ afterlogin }) {
  const navigate = useNavigate()

  const handlelogout = () => {
    sessionStorage.clear()
    googleLogout()
    navigate('/login')

  }

  const [user, setuser] = useState({})
  console.log(user);
  useEffect(() => {
    const userdetails = sessionStorage.getItem("existingUser")
    if (userdetails) {
      setuser(JSON.parse(userdetails))
    }
  }, [])


  return (
    <div className='navbar d-flex justify-content-between ps-3 pe-3 '>
      <h6 className='headerwatch'>D'WATCH</h6>
      {afterlogin &&
        <div className='d-flex justify-content-between'>

          <div className=' me-2 border-bottom border-success border-2 '>
            <Link style={{ textDecoration: "none", color: '#b0b7b8' }} to={'/home'}>Product</Link>
          </div>
          <div className='me-2'>
            <Link style={{ textDecoration: "none", color: '#b0b7b8' }}>About</Link>
          </div>
          <div className='me-2' >
            <Link style={{ textDecoration: "none", color: '#b0b7b8' }} to={'/contact'}>Contact</Link>

          </div>
          <div>
            <i class="fa-solid fa-cart-shopping text-success"></i>
          </div>
          <div className='me-2 ms-2'  >
            <a style={{ textDecoration: "none", color: '#b0b7b8' }} onClick={handlelogout}> Logout </a>
          </div>
          <div className='me-1 ms-2'  >
            <img className='profileimg' height="10px" src={user.ProfileImg} alt="" />
          </div>
          <div className='me-2'  >
            <p style={{color:'#b0b7b8'}}>{user.Username}</p>          </div>


        </div>}
    </div>
  )
}

export default Header