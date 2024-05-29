import React, { useState } from 'react'
import sallyimg from '../Register/Saly-14.png'
import Header from '../../Componants/Header'
import { getgoogleloginApi, loginApi } from '../../Services/AllApi'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import facebookimg from './facebook.webp'
import appleimg from './apple.webp'
import googleimg from './google.jpg'
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'





function Login() {

  const navigate = useNavigate()
  const [registerUsers, setRegisterUsers] = useState({ Username: "", Email: "", Password: "" })
  const [user, setuser] = useState([])

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
  const clientId = "75037750498-vldb23aqps645gvf4378tshpm9h9f488.apps.googleusercontent.com";

  const googleloginfetch = useGoogleLogin({
    clientId: clientId,
    onSuccess: async (credentialResponse) => {
      // setuser(credentialResponse)
      console.log(credentialResponse);

      try {
        const response = await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo`,
          {
            headers:
            {
              Authorization: `Bearer ${credentialResponse.access_token} `
            }
          });
        console.log(response.data);

        const newuser = {
          Username: response.data.name,
          Email: response.data.email,
          ProfileImg: response.data.picture
        }

        await handlegooglelogin(newuser)
      } catch (err) {
        console.log(err);
      }
    },
    onError: (error) => {
      console.log(error);
    }
  })


  const handlegooglelogin = async (userdetails)=>{
    
   try{ 
    const result = await getgoogleloginApi (userdetails)
    console.log(result.data);
    if(result.status >= 200 && result.status <=300){
      sessionStorage.setItem("existingUser", JSON.stringify(result.data.existinguser))
      toast.success(`Welcome ${result.data.existinguser.Username} `)
      setTimeout(() => {
        setRegisterUsers({ Email: "", Password: "" })
        navigate('/home')

      }, 2000);
    }
    else{
      console.log("Google Login Failed");

    }}
    catch(err){

      console.log(err);
      
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
              <p style={{ fontSize: '15px' }}>If you Dont have an Account <br />You can <Link to={'/'}>Register Now!</Link></p>

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
          <Link>Forgot Password?</Link>
          <button onClick={handleLogin} className='register-button mb-1 mt-2'>Login</button>
          <hr />
          <div className='text-center'><p >Or Continue With</p></div>
          <div className='w-100  text-center d-flex justify-content-around'>
            <div><button className='btn'><img width="30px" src={facebookimg} alt="" /></button></div>
            <div><button className='btn'><img width="30px" src={appleimg} alt="" /></button></div>
            <div><button onClick={googleloginfetch} className='btn'><img width="30px" src={googleimg} alt="" /> </button></div>
          </div>
        </div>
        <div className="col-lg-1"></div>

      </div>
      < ToastContainer position='top-center' theme='colored' autoClose={'1500'} />

    </div>
  )
}

export default Login