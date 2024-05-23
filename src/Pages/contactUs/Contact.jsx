import React from 'react'
import Header from '../../Componants/Header'
import contactphoto from '../contactUs/HeroImage.png'


function Contact() {
    return (
        <div className='container'>
            <Header afterlogin />
            <div className="row">
                <div className="col-lg-6  p-5">
                    <h2 className='mt-2'>Contact Us</h2>
                    <p className='mt-2'>Subheading for discription and instruction</p>
                    <div className='d-flex'>
                        <div><label htmlFor="">First Name</label><br />
                            <input className='form-control w-100' type="text" /></div>

                        <div className='ms-5'>
                            <label htmlFor="">Last Name</label><br />
                            <input className='form-control w-100' type="text" />
                        </div>
                    </div>
                    <label htmlFor="">Email Address</label><br />
                    <input className='form-control w-100' type="text" /><br />
                    <label htmlFor="">Your Message</label> <br />
                    <textarea className='form-control w-100' name="" id=""></textarea>
                    <button style={{border:"none" , background:"black",color:"white", borderRadius:"5px"}} className='mt-4 w-100'>Submit</button>
                </div>
                <div className="col-lg-6 p-5">
                    <img height="380px" width="100%" src={contactphoto} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Contact