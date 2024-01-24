import React, { useState } from 'react'
import video from '../assets/vids/video.mp4';
import { RiCloseFill } from "react-icons/ri";
// import Login1 from '../assets/images/Login1.svg'
import { Typewriter } from 'react-simple-typewriter'
import Loginlogo from '../assets/logo/logo_purple.png'
import { HiOutlinePlayCircle } from "react-icons/hi2";

const Login = () => {
  const [tabscntr, setTabCntr] = useState(0);
  const [Videostate, setVideostate] = useState(false);
  const [registerview, setRegisterview] = useState(true);
  

  const handletabs=()=>{
    if(tabscntr===5){
      setTabCntr(1)
    }else{
      setTabCntr(1+tabscntr)
    }
  }

  const subheading=['Faces challenges in student retention and attracting new admissions.',
  'Faces difficulties in timely fee collection leading to increase in arrears.', 
  'Operates with low profit margins because of increasing competition.',
  'Parents face difficulty due to a lack of communication in local languages.',
  'Send’s English SMS to parents despite only 30% of them understanding.']

  return (
  <>
    <div className="login-main-cont">
        {Videostate===true?<>
          <span style={{color:"black"}} className='closeicon' onClick={()=>setVideostate(false)}><RiCloseFill/></span>
          <span className="videospan">
            <video width={"800px"} height={"490px"} 
            controls autoPlay  className='video'>
              <source src={video} type='video/mp4'/>
            </video>
          </span>
        </>:null}

        <div className="login-left">

        <div className="hero-left-top-cont" style={{width:"100%", padding:"0", color:"#f7f7f7",scale:"0.95"}}>
              <div className="hero-heading">90% Educational Institutions</div>
              <div className="tab">
                <button className={"hero-tab-btn"+(tabscntr === 1?' hero-tab-active':'')}></button>
                <button className={"hero-tab-btn"+(tabscntr === 2?' hero-tab-active':'')}></button>
                <button className={"hero-tab-btn"+(tabscntr === 3?' hero-tab-active':'')}></button>
                <button className={"hero-tab-btn"+(tabscntr === 4?' hero-tab-active':'')}></button>
                <button className={"hero-tab-btn"+(tabscntr === 5?' hero-tab-active':'')}></button>
              </div>
                  <div className='hero-subheading'>
                    <Typewriter
                      cursor
                      loop={100}
                      cursorStyle='|'
                      deleteSpeed={1}
                      typeSpeed={100}
                      delaySpeed={4000}
                      words={subheading}
                      onDelay={handletabs}
                    />
                  </div>
            </div>

            <div className="hero-left-bottom-cont" style={{width:"100%", height:"50%", color:"#f7f7f7",scale:"0.95"}}>
              <span style={{fontSize:'1.7vw', fontWeight:"800"}}>Prime Minister's Support: Narendra Modi</span>
              <span className='hero-bottom-divider'></span>
              <span className='play-icon' onClick={()=>setVideostate(true)}><HiOutlinePlayCircle />See how it works</span>
              <div className="hero-left-bottom-sub-cont">
              recognizes the importance of a multilingual communication platform.
              <br/> <br />
              🚀Education Transformation: We're the pioneers bringing 
              this platform to the education sector, connecting institutions, 
              parents, and students. Together, let's transform communication in education! 
              </div>
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