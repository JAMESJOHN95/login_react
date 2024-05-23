import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginApi, registerApi } from '../Services/AllApi';



function Authentication({ insideregister }) {
    const navigate = useNavigate()
    const [registerUsers, setRegisterUsers] = useState({ Username: "", Email: "", Password: "" })
    // console.log(registerUsers);

    const handleRegister = async (e) => {
        e.preventDefault()
        if (registerUsers.Username && registerUsers.Email && registerUsers.Password) {
            try {
                const result = await registerApi(registerUsers)
                console.log(result);
                if (result.status == 200) {
                    toast.success("Registration Success")
                    setTimeout(() => {
                        setRegisterUsers({ Username: "", Email: "", Password: "" })
                    navigate('/login')
                    }, 1500);
                    
                }
                else {
                    toast.error(result.response.data)
                    setTimeout(() => {
                        setRegisterUsers({ Username: "", Email: "", Password: "" })
                    }, 1000)
                }
            }
            catch (err) {
            }
        }
        else {
            toast.error("Please Fill The Form Compleately")
        }
    }

    const handleLogin = async (e)=>{
        e.preventDefault()
        if(registerUsers.Email && registerUsers.Password){
          try { const result = await loginApi(registerUsers)
            // console.log(result);
            if(result.status == 200){
                sessionStorage.setItem("Existinguser",JSON.stringify(result.data.existinguser) )
                sessionStorage.setItem("token",result.data.token)
                toast.success(`Welcome ${result.data.existinguser.Username}`)
                setTimeout(() => {
                    setRegisterUsers({Email:"",Password:""})
                    navigate('/home')
                    
                }, 2000);
            }
            else{
                setRegisterUsers({Email:"",Password:""})
                toast.info("Invalid Mailid Or Password")
            }
          }catch(err){
            console.log(err);
          }

        }
        else{
            toast.error("Please Fill The Details")
        }

    }

    return (
        <>
            <div style={{ width: '100%' }} className='container d-flex justify-content-center align-item-center mt-2 '>
                <div className="containe w-75  p-2 d-flex align-item-center">
                    <div className="card shadow pe-5 ">
                        <div className="row">
                            <div className="col-lg-6 p-3  d-flex align-item-center justify-content-center  ">
                                <img style={{ height: '250px' }} className='w-100' src="https://dms.sgou.ac.in/repository/public/backend/assets//img/loginindex.gif" alt="" />
                            </div>
                            <div className="col-lg-6 p-3 ">
                                <h3>REGISTER AND LOGIN</h3>

                                <h4>Sign {insideregister ? "up" : " in"} to your Account</h4>

                                <form action="">

                                    {insideregister ?
                                        <div >
                                            <label htmlFor=""> Username</label>
                                            <input value={registerUsers.Username} onChange={(e) => setRegisterUsers({ ...registerUsers, Username: e.target.value })} type="text" placeholder='Enter Your Username' className='form-control' />
                                            <label htmlFor=""> Email</label>
                                            <input value={registerUsers.Email} onChange={(e) => setRegisterUsers({ ...registerUsers, Email: e.target.value })} type="email" placeholder='Enter Your Email' className='form-control' />
                                            <label htmlFor=""> Password</label>
                                            <input value={registerUsers.Password} onChange={(e) => setRegisterUsers({ ...registerUsers, Password: e.target.value })} type="password" placeholder='Enter Your Password' className='form-control' />
                                        </div>
                                        :
                                        <div>
                                            <FloatingLabel
                                                controlId="floatingInput"
                                                label="Email address"
                                                className="mb-3"
                                            >
                                                <Form.Control
                                                value={registerUsers.Email}
                                                onChange={(e)=>setRegisterUsers({...registerUsers,Email:e.target.value})}
                                                    type="email"
                                                    placeholder="name@example.com" />
                                            </FloatingLabel>
                                            <FloatingLabel 
                                            controlId="floatingPassword"
                                            label="Password">
                                                <Form.Control
                                                value={registerUsers.Password}
                                                onChange={(e)=>setRegisterUsers({...registerUsers,Password:e.currentTarget.value})}
                                                 type="password"
                                                  placeholder="Password" />
                                            </FloatingLabel>
                                        </div>}

                                    {insideregister ?
                                        <div  ><button onClick={handleRegister} className='mt-3 btn btn-primary mb-2'>Register</button>
                                            <p>Already have an account ?<Link to={'/login'}>Login</Link></p>
                                        </div>
                                        :
                                        <div className='mt-3'><button onClick={handleLogin} className='btn btn-success mb-2'>Login</button>
                                            <p>Already have an account ? <Link to={'/'}  >Register Now</Link></p>

                                        </div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            < ToastContainer position='top-center' theme='colored' autoClose={'1500'} />

        </>
    )
}

export default Authentication