import React, { useState } from 'react'
import sallyimg from '../Register/Saly-14.png'
import Header from '../../Componants/Header'
import { loginApi } from '../../Services/AllApi'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {

  const navigate = useNavigate()
  const [registerUsers, setRegisterUsers] = useState({ Username: "", Email: "", Password: "" })

  const handleLogin = async (e) => {
    e.preventDefault()
    if (registerUsers.Email && registerUsers.Password) {
      try {
        const result = await loginApi(registerUsers)
        // console.log(result);
        if (result.status == 200) {
          sessionStorage.setItem("Existinguser", JSON.stringify(result.data.existinguser))
          sessionStorage.setItem("token", result.data.token)
          toast.success(`Welcome ${result.data.existinguser.Username}`)
          setTimeout(() => {
            setRegisterUsers({ Email: "", Password: "" })
            navigate('/home')

          }, 2000);
        }
        else {
          setRegisterUsers({ Email: "", Password: "" })
          toast.info("Invalid Mailid Or Password")
        }
      } catch (err) {
        console.log(err);
      }

    }
    else {
      toast.error("Please Fill The Details")
    }

  }


  return (
    <div className='container'>
      <Header />
      <div className="row p-5">
        <div className="col-lg-6 pt-1 ">
          <h4 className='mb-3'>Sign in to</h4>
          <h6>Lorem Ipsum is Simple</h6>
          <div className='d-flex'>
            <div className='mt-4  ' >
              <p style={{ fontSize: '15px' }}>If you Dont have an Account <br />You can <Link to= {'/'}>Register Now!</Link></p>

            </div>
            <div  >
              <img className='registerimg' src={sallyimg} alt="" /></div >
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4 pt-5">
          <h5 className='text-center '>Sign Up</h5>
          <input value={registerUsers.Email}
            onChange={(e) => setRegisterUsers({ ...registerUsers, Email: e.target.value })} type="text" placeholder='Email' className='custom-input' />
          <input value={registerUsers.Password}
            onChange={(e) => setRegisterUsers({ ...registerUsers, Password: e.currentTarget.value })} type="text" placeholder='Password' className='custom-input' />
          <button onClick={handleLogin} className='register-button mb-1'>Login</button>
          <hr />
          <div className='text-center'><p >Or Continue With</p></div>
          <div className='w-100  text-center d-flex justify-content-around'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-apple"></i>
            <i className="fa-brands fa-google"></i>
          </div>
        </div>
        <div className="col-lg-1"></div>

      </div>
      < ToastContainer position='top-center' theme='colored' autoClose={'1500'} />

    </div>
  )
}

export default Login