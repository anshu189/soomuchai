import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Logo from '../assets/logo/logo.svg';
import { RiMenu3Fill } from "react-icons/ri";

// import Demomodel from '../model/demomodel';

const Navbar = () => {
  const [modelactive, setModelactive] = useState(false);
  const navbarItems=["Join Hands", "Blogs", "Testimonials","Why we?","FAQ's", "Contact us", "Login"]
  const [isLinksVisible, setLinksVisible] = useState(false);

  const toggleLinks = () => {
    setLinksVisible(!isLinksVisible);
  };
  const togglemodel=()=>{
    // Send Data to backend and schedule a call
    setModelactive(!modelactive);
  }

  return (
    <>
    {/* Hamburger Menu */}
    <div className="ham-nav">
          <div className="navbar-logo"> <a href="/"><img src={Logo} alt="soomuch.ai" /></a></div>
          <div id="myLinks" style={{ display: isLinksVisible ? 'block' : 'none' }}>
            <a href="/joinhands">Join Hands</a>
            <a href="/blogs">Blogs</a>
            <a href="/testimonials">Testimonials</a>
            <a href="/whywe">Why we?</a>
            <a href="/faq's">FAQ's</a>
            <a href="/contactus">Contact us</a>
            <a href="https://web.soomuch.ai">Login</a>
          </div>
          <a href="javascript:void(0);" className="ham-icon-cont" onClick={toggleLinks}>
            <span className='ham-icon'><RiMenu3Fill /></span>
          </a>
        </div>
    <div className="navbar-cont">
        <div className="navbar-logo"> <a href="/"><img src={Logo} alt="soomuch.ai" /></a></div>
        <div className="navbar-items">
          <ul>
          {navbarItems.map((items) => (
            <li key={(items.replaceAll(' ', '').toLowerCase())}>
              <Link to={items.includes("Login")?'https://web.soomuch.ai':'/'+(items.replaceAll(' ', '').toLowerCase())}>{items}</Link>
            </li>
          ))}
          <button onClick={togglemodel} className='btn'>Book a Demo</button>
          <div id="gtranslator-cont"></div>
          </ul>
        </div>
              
      {/* Book a Demo */}
      {/* {modelactive===true?<>
          <div className="demo-model-cont">
              <div className="demo-overlay-cont">
                  <div className="demo-model">
                      <div className="demo-model-top">
                          <div className="demo-model-heading">Note: You will get calls assuming you are a parent</div>
                      </div>             
                      <div className="demo-model-mid">
                            <div className="demo-model-points">
                              1. 100% Delivery of your child Information <br /> 
                              2. Multiple retry attempts in-case call is not picked. <br /> 
                              3. Demo Duration: Minimum of 30 Seconds to maximum of 45 sec <br /> 
                              4. Please pick up next 3 calls <br />
                              5. You will receive calls from this number: 8885035035 <br />
                              6. Demo School Name: SOOMUCH Educational institution <br />
                              7. Call will start in 15 seconds. <br />
                            </div>
                            <div onClick={()=>setModelactive()} className="demo-model-close-btn">Close</div>
                      </div>    
                      <div className="demo-model-bottom">
                          <div className="demo-model-bottom-last-points">
                            <div className="demo-model-bottom-last-point">Examination Dates</div>
                            <div className="demo-model-bottom-last-point">Results</div>
                            <div className="demo-model-bottom-last-point">Fee Follow-ups</div>
                          </div>
                      </div>
                  </div>
              </div> 
          </div>
          </>:''} */}
    </div>
    </>)
}

export default Navbar