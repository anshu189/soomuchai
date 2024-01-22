import React, { useState } from 'react'
import Loginlogo from '../assets/logo/logo_purple.png'
import Login1 from '../assets/images/Login1.svg'

const Login = () => {
  const [registerview, setRegisterview] = useState(true);

  return (
  <>
    <div className="login-main-cont">
        <div className="login-left">

          <div className="login-left-top">
            <div className="login-left-img"><img src={Login1} alt="Soomuchai" /></div>
            <div className="login-left-heading">A One-Stop Solution for Schools All Over India</div>

            <div className="login-left-subheading">
              Soomuch.AI is a completely automated marketplace for institutions in India that 
              helps with admissions, collects fees, greets parents and children on special occasions, 
              and addresses problems faced by students, faculty, and management. 
              It also provides an institute management application with 100+ modules and 
              4 mobile applications powered by AI.
            </div>

          </div>

          <div className="login-left-bottom">
            <div className="login-left-copyright">© 2022 Soomuch.AI All Rights Reserved.</div>
          </div>

        </div>

        {registerview===true? <>
        <div className="login-right">
          <div className="login-box">
            <div className="login-logo"><a href="/"><img src={Loginlogo} alt="Soomuchai Logo" /></a></div>
            <div className="login-welcome">Welcome Back! 👋</div>
            
            <div className="login-username">
              <label htmlFor="">Username</label>
              <input type="text" className='login-username-input' />
            </div>
            <div className="login-password">
              <label htmlFor="">Password</label>
              <input type="password" className='login-password-input' />
            </div>
              <button className="login-btn">Login</button>
          </div>
          <div className="login-bottom-box">
            <span className="forgot-pass">Forget Password?</span>
            <div className="login-register">Don't have a Soomuch.AI account? <span onClick={()=>setRegisterview(false)}>Sign Up Now</span></div>
          </div>
        </div>
        </>:<>
        <div className="login-right">
          <div className="login-box">
            <div className="login-logo"><a href="/"><img src={Loginlogo} alt="Soomuchai Logo" /></a></div>
            <div className="login-welcome">Hola, Let's get started with Soomuch.AI! 👋</div>
            
            <div className="login-username">
              <label htmlFor="">Email</label>
              <input type="email" className='login-username-input' />
            </div>
            <div className="login-password">
              <label htmlFor="">Password</label>
              <input type="password" className='login-password-input' />
            </div>
              <button className="login-btn">Sign up</button>
          </div>
          <div className="login-bottom-box">
            <span className="forgot-pass">Forget Password?</span>
            <div className="login-register">Already have a Soomuch.AI account. <span onClick={()=>setRegisterview(true)}>Login</span></div>
          </div>
        </div>      
        </>}

    </div>
  </>
  )
}

export default Login