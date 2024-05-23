import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './Register.css'
import sallyimg from '../Register/Saly-14.png'
import Header from '../../Componants/Header';
import { registerApi } from '../../Services/AllApi';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Register() {
  const navigate = useNavigate()
  const [registerUsers, setRegisterUsers] = useState({ Username: "", Email: "", Password: "",conformpaa:"" })

  const handleRegister = async (e) => {
    e.preventDefault()
    if (registerUsers.Username && registerUsers.Email && registerUsers.Password && registerUsers.conformpaa) {
      if(registerUsers.Password === registerUsers.conformpaa){
        try {
          const result = await registerApi(registerUsers)
          console.log(result);
          if (result.status == 200) {
              toast.success("Registration Success")
              setTimeout(() => {
                  setRegisterUsers({ Username: "", Email: "", Password: "",conformpaa:""  })
              navigate('/login')
              }, 1500);
              
          }
          else {
              toast.error(result.response.data)
              setTimeout(() => {
                  setRegisterUsers({ Username: "", Email: "", Password: "",conformpaa:""  })
              }, 1000)
          }
      }
      catch (err) {
      }
      }
      else{
        toast.error("Password Dont Match")
      }
        
    }
    else {
        toast.error("Please Fill The Form Compleately")
    }
}

  return (
    
    <div style={{ overflowY: "hidden" }} className='mt-1 container w-100  '>
      <Header/>
      <div className="row ">
        <div className="col-lg-1"></div>
        <div className="col-lg-4 p-5 ">


          <h5 className='text-center '>Sign Up</h5>
          <input value={registerUsers.Username} onChange={(e) => setRegisterUsers({ ...registerUsers, Username: e.target.value })} type="text" placeholder='Username' className='custom-input' />
          <input value={registerUsers.Email} onChange={(e) => setRegisterUsers({ ...registerUsers, Email: e.target.value })} type="text" placeholder='Email' className='custom-input' />
          <input value={registerUsers.Password} onChange={(e) => setRegisterUsers({ ...registerUsers, Password: e.target.value })} type="text" placeholder='Password' className='custom-input' />
          <input value={registerUsers.conformpaa} onChange={(e) => setRegisterUsers({ ...registerUsers, conformpaa: e.target.value })} type="text" placeholder='Confirm Password' className='custom-input' />
          <button onClick={handleRegister} className='register-button mb-1'>Register</button>
          <hr />
          <div className='text-center'><p >Or Continue With</p></div>
          <div className='w-100  text-center d-flex justify-content-around'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-apple"></i>
            <i class="fa-brands fa-google"></i>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6 p-5 ">
          <h4 className='mb-3'>Sign up to</h4>
          <h6>Lorem Ipsum is Simple</h6>
          <div className='d-flex'>
            <div className='mt-4  ' >
              <p style={{fontSize:'15px'}}>If you are already have an account <br />You can <Link to = {'/login'}>Login here!</Link></p>
  
            </div>
            <div  >
              <img className='registerimg' src={sallyimg} alt="" /></div >
          </div>
          </div>
      </div>
      < ToastContainer position='top-center' theme='colored' autoClose={'1500'} />

    </div>
    
  )
}

export default Register