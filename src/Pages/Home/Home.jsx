import React from 'react'
import Header from '../../Componants/Header'
import './Home.css'
import watchimg1 from '../Home/Rectangle_3.png'
import watchimg2 from '../Home/watch2.png'
import watchimg3 from '../Home/watch4.png'

function Home() {
  return (
    <div className='mainrow ps-4 pe-4  '>
      <Header afterlogin />
      <div className=" row ">
        <div className="col-lg-1"></div>
        <div className="col-lg-6 p-3 pe-5">
          <h2 className='headingman' >This is the time to <br /> turn yourself into a <br /> real man</h2>
          <h6 className='headingpremium'>Handpicked collection of <span style={{ color: "#7bd40b" }}>premium</span> time keepers <br /> for all purpose and ages.</h6>
          <div className="d-flex justify-content-between ">
            <div>
              <h6 className='headingpremium'>Featured Collections</h6>
            </div>
            <div className='me-2'>
              <button className='btn'><i style={{ color: "white" }} class="fa-solid fa-arrow-left "></i></button>
              <button className='btn'><i style={{ color: "white" }} class="fa-solid fa-arrow-right "></i></button>
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <div className='watchcard'>
              <img width="100px" height="130px" src={watchimg2} alt="" />
              <h6 style={{ color: "black" }} className='cardhead'>Zero Midship G</h6>
              <div className='text-center'><p>$ 145</p></div>
              <div className='text-center'><button className='buybutton'>Buy Now</button></div>
            </div>
            <div className='watchcard'>
              <img width="100px" height="130px" src={watchimg2} alt="" />
              <h6 style={{ color: "black" }} className='cardhead'>Zero Midship G</h6>
              <div className='text-center'><p>$ 169</p></div>
              <div className='text-center'><button className='buybutton'>Buy Now</button></div>
            </div>
            <div className='watchcard'>
              <img width="100px" height="130px" src={watchimg2} alt="" />
              <h6 style={{ color: "black" }} className='cardhead'>Zero Midship G</h6>
              <div className='text-center'><p> $142</p></div>
              <div className='text-center'><button className='buybutton'>Buy Now</button></div>
            </div>
          </div>
<div className='mt-3 ms-3'><button className='buybutton'>
  Explore</button></div>
        </div>
<div className="col-lg-1"></div>

        <div className="col-lg-4 p-3">
          <div style={{ background: "#0d4738b5" }} className='d-flex justify-content-between  border p-2 rounded'>
            <div>
              <h4 style={{ color: "#d4d3d3" }}>Bremont Star</h4>
              <h6 style={{ color: "#d4d3d3" }}>$ 147</h6>
            </div>
            <div className='text-center  p-3 border-start'>
              <button className='buybutton'>Buy Now</button>
            </div>
          </div>

          <div className='mt-3 p-3 text-center'>

            <img className='watchimg' width="100%" src={watchimg1} alt="" />
            
          </div >
          <div className='d-flex justify-content-around mt-4'>
            <div><i class="fa-solid fa-circle text-success "></i></div>
          <div><i class="fa-solid fa-circle text-teritiary"></i></div>
         <div> <i class="fa-solid fa-circle"></i></div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Home