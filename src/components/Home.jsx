import Navbar from "./Navbar";
import Select from "react-select";
import React, { useState, useRef } from "react";
import video from "../assets/vids/video.mp4";
import { RiCloseFill } from "react-icons/ri";
import Hands from "../assets/images/hands.svg";
import { IoShieldCheckmark } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";
import { HiOutlinePlayCircle } from "react-icons/hi2";

const Home = () => {
  const [optnum, setOtpnum] = useState('');
  const [tabscntr, setTabCntr] = useState(0);
  const [langvalue, setLangvalue] = useState("");
  const [riskvalue, setRiskvalue] = useState("");
  const [connectvalue, setConnectvalue] = useState("");
  const [Otpopup, setOtpopup] = useState(false);
  const [Videostate, setVideostate] = useState(false);
  const [getOTP, setGetOTP] = useState("");
  const [modelactive, setModelactive] = useState(false);
  const selectInputRef1 = useRef();
  const selectInputRef2 = useRef();
  const selectInputRef3 = useRef();
  const selectInputRef4 = useRef();

  const customTheme=(theme)=>{
    return{
      ...theme,
      colors:{
        ...theme.colors,
        primary25:"#7001DC",
        primary:"#7001DC",
        text: '#2c2c2c',
        neutral50:"#fff"
      }
    }
  }
  
  const subheading=['Faces challenges in student retention and attracting new admissions.',
  'Faces difficulties in timely fee collection leading to increase in arrears.', 
  'Operates with low profit margins because of increasing competition.',
  'Parents face difficulty due to a lack of communication in local languages.',
  'Send’s English SMS to parents despite only 30% of them understanding.']

    const langoptions = [
        { value: "Telugu", label: "Telugu" },
        { value: "Hindi", label: "Hindi" },
        { value: "English", label: "English" },
    ];
    const connectoptions = [
        { value: "SMS", label: "SMS" },
        { value: "Whatsapp", label: "Whatsapp" },
    ];
    const riskoptions = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];

    const handletabs = () => {
        if (tabscntr === 5) {
            setTabCntr(1);
        } else {
            setTabCntr(1 + tabscntr);
        }
    };

    // const togglemodel=(e)=>{
    //   // e.preventDefault();
    //   // Send Data to backend and schedule a call
    //   setModelactive(!modelactive);
    // }

    // Handle the Demo Function 
    const handledemosubmit=(e)=>{
    const demolang = langvalue.value;
    const connectoption = connectvalue.value;
    const riskoption = riskvalue.value;

    if((demolang && connectoption && riskoption) && !(optnum.length!==10)){
      // setOtpopup(true);
      setModelactive(true)
      // Send Data to backend and scehdule a demo
      
    }
    else{
      alert("Please Choose all the remaining fields!")
      // setOtpopup(false);
      setModelactive(false)
    }
  }

    // Verify OTP
    const verifyOTP = () => {
        if (getOTP.length !== 4) {
            alert("Enter the OTP");
            setOtpopup(true);
        } else {
            setOtpopup(false);
            selectInputRef1.current.clearValue();
            selectInputRef2.current.clearValue();
            selectInputRef3.current.clearValue();
            selectInputRef4.current.value = null;
            // Verify it from Backend
            // Write your code here...
        }
    };

  return (<>
  {/* Gradient BG */}
    <div className='gradient-bg' style={{position: 'absolute'}}>
        <svg xmlns='http://www.w3.org/2000/svg'>
            <defs>
                <filter id='goo'>
                    <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
                    <feColorMatrix
                        in='blur'
                        mode='matrix'
                        values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
                        result='goo'
                    />{" "}
                    <feBlend in='SourceGraphic' in2='goo' />
                </filter>
            </defs>
        </svg>
        <div className='gradients-container'>
            <div className='g1'></div>
            <div className='g2'></div>
            <div className='g3'></div>
            <div className='interactive'></div>
        </div>
      </div>
                
      <div className="home-main-cont">

        {/* Book a Demo */}
        {modelactive===true?<>
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
            </>:''}

        <Navbar/>
        <div className="hero-main-cont">
          
          {/* Scroll Mouse Animation*/}
          <div className="mouse-cont">
            <div className="scroll-mouse"></div>
          </div>

          {Videostate && <>
            <span className='closeicon' onClick={()=>setVideostate(false)}><RiCloseFill/></span>
            <span className="videospan">
              <video width={"800px"} height={"490px"} 
              controls autoPlay  className='video'>
                <source src={video} type='video/mp4'/>
              </video>
            </span>
          </>}

          {Otpopup && <>
            <div className="demo-model-cont">
            <span style={{zIndex:"9999999"}} className='closeicon' onClick={()=>setOtpopup(false)}><RiCloseFill/></span>
              <div className="demo-overlay-cont">
                  <div className="demo-model" style={{gap:"1rem",width:"22%", height:"45%", alignItems:"center", padding:"2rem 0 0 0"}}>
                      <div className="demo-model-top" style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", widt
                    :"100%"}}>
                          <span className="otp-icon"><IoShieldCheckmark /></span>
                          <div className="demo-model-heading" style={{fontSize:"24px",color:"#2c2c2c", fontFamily:"Inter"}}>Enter OTP Code</div>
                      </div>             
                      <div className="demo-model-mid" style={{padding:"0 2rem"}}>
                            <input type="text" onChange={(e)=>{setGetOTP(e.target.value)}} className="otp-input" maxlength="4" pattern="\d{4}" required/>
                      </div>    
                      <div className="demo-model-bottom" style={{ margin:"auto"}}>
                        <div className="single-blog-demo-btn otp-btn" onClick={verifyOTP}>Verify OTP</div>
                      </div>
                  </div>
              </div> 
            </div>
          </>}

          <div className='hero-left'>
              <div className='hero-left-top-cont'>
                  <div className='hero-heading'>90% Educational Institutions</div>
                  <div className='tab'>
                      <button
                          className={
                              "hero-tab-btn" + (tabscntr === 1 ? " hero-tab-active" : "")
                          }></button>
                      <button
                          className={
                              "hero-tab-btn" + (tabscntr === 2 ? " hero-tab-active" : "")
                          }></button>
                      <button
                          className={
                              "hero-tab-btn" + (tabscntr === 3 ? " hero-tab-active" : "")
                          }></button>
                      <button
                          className={
                              "hero-tab-btn" + (tabscntr === 4 ? " hero-tab-active" : "")
                          }></button>
                      <button
                          className={
                              "hero-tab-btn" + (tabscntr === 5 ? " hero-tab-active" : "")
                          }></button>
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

            {/* <div className="hero-left-bottom-cont">
              <span style={{fontSize:'2vw', fontWeight:"200"}}>Prime Minister's Support: <span style={{fontWeight:"600", border:"1px solid #f7f7f7", borderRadius:"6px", padding:"0 0.5vw", background:"#f7f7f7", color:"#8400cf", userSelect:"none"}}>Narendra Modi</span></span>
              <span className='hero-bottom-divider'></span>
              <span className='play-icon' onClick={()=>setVideostate(true)}><HiOutlinePlayCircle />See how it works</span>
              <div className="hero-left-bottom-sub-cont">
              recognizes the importance of a multilingual communication platform.
              <br/> <br />
              🚀Education Transformation: We're the pioneers bringing 
              this platform to the education sector, connecting institutions, 
              parents, and students. Together, let's transform communication in education! 
              </div>
            </div> */}

            <div className="hero-left-bottom-cont">
              <div className="hero-left-bottom-cont1"><span className="see-how-it-works" onClick={()=>setVideostate(true)}>See how <br /> it works<HiOutlinePlayCircle style={{width:"35px", height:"35px"}} /></span></div>
              <div className="hero-left-bottom-cont2">
                <span className="pm-support">Prime Minister's Support:</span>
                
                <div className="hero-left-bottom-sub-cont-hightlight">
                <span style={{margin:"0 5px 0 0",fontWeight:"600", border:"1px solid #f7f7f7", borderRadius:"6px", padding:"0 0.2vw", background:"#f7f7f7", color:"#8400cf", userSelect:"none"}}>Narendra Modi</span>
                recognizes the importance of a multilingual communication platform.
                </div>

                <div className="hero-left-bottom-sub-cont">
                🚀Education Transformation: We're the pioneers bringing 
                this platform to the education sector, connecting institutions, 
                parents, and students. Together, let's transform communication in education! 
                </div>

              </div>
              {/* <span className='hero-bottom-divider'></span>
              <span className='play-icon' onClick={()=>setVideostate(true)}><HiOutlinePlayCircle />See how it works</span> */}
            </div>

          </div>

          <div className="hero-right">
            <div className="vertical-right-heading">Boost Your Business</div>

            <div className="hero-right-top-cont">

              <div className="hero-right-top-heading">30% Growth<br/>with 30 seconds<br/>live demo</div>
                <div className="select-section">
                    <div className="select-cont">
                      <div className="select-label">Choose Language</div>
                      <Select 
                      ref={selectInputRef1}
                      className='individual-select' 
                      onChange={setLangvalue} 
                      options={langoptions} 
                      defaultValue={langvalue}
                      placeholder="Choose Language"
                      theme={customTheme}
                      isOptionDisabled={(option) => option.disabled}
                      styles={{
                        control: (provided, state) => ({
                          ...provided,
                          width:"18vw",
                          border: "none",
                          borderRadius:"0",
                          display:"flex",
                          borderBottom:"1px solid #fff",
                          background:"transparent",
                          fontWeight:"400",
                          cursor:"pointer",
                          padding:"0.1rem",
                          boxShadow: "none",
                          justifyContent:"right",
                          fontFamily:"Helvetica",
                        }),
                        option: (provided, state) => ({
                          ...provided,
                          backgroundColor: state.isSelected ? '#7001DC' : 'inherit',
                          color: state.isFocused ? '#2c2c2c' : '#2c2c2c',
                          color: state.isSelected ? '#f7f7f7' : '#2c2c2c',
                          cursor:"pointer"
                        }),
                        menu:(provided,state) => ({
                          ...provided,
                          width: '15vw',
                        })
                      }}
                      />
                    </div>

                    <div className="select-cont">
                      <div className="select-label">Parental Connect</div>
                      <Select 
                      ref={selectInputRef2}
                      className='individual-select' 
                      onChange={setConnectvalue} 
                      options={connectoptions} 
                      defaultValue={connectvalue} 
                      placeholder="Parental Connect"
                      theme={customTheme}
                      isOptionDisabled={(option) => option.disabled}
                      styles={{
                        control: (provided, state) => ({
                          ...provided,
                          width:"18vw",
                          boxShadow: "none",
                          border: "none",
                          borderBottom:"1px solid #fff",
                          background:"transparent",
                          borderRadius:"0",
                          padding:"0.1rem",
                          cursor:"pointer",
                          fontFamily:"Helvetica",
                          fontWeight:"400"
                        }),
                        option: (provided, state) => ({
                          ...provided,
                          backgroundColor: state.isSelected ? '#7001DC' : 'inherit',
                          color: state.isFocused ? '#2c2c2c' : '#2c2c2c',
                          color: state.isSelected ? '#f7f7f7' : '#2c2c2c',
                          cursor:"pointer"
                        }),
                        menu:(provided,state) => ({
                          ...provided,
                          width: '15vw',
                        })
                      }}
                      />
                    </div>
                    
                    <div className="select-cont">
                    <div className="select-label">Risk Analysis</div>
                      <Select 
                      ref={selectInputRef3}
                      className='individual-select' 
                      onChange={setRiskvalue} 
                      options={riskoptions} 
                      defaultValue={riskvalue} 
                      placeholder="Analyze Risk"
                      theme={customTheme}
                      isOptionDisabled={(option) => option.disabled}
                      styles={{
                        control: (provided, state) => ({
                          ...provided,
                          width:"18vw",
                          boxShadow: "none",
                          border: "none",
                          borderBottom:"1px solid #fff",
                          background:"transparent",
                          borderRadius:"0",
                          padding:"0.1rem",
                          cursor:"pointer",
                          fontFamily:"Helvetica",
                          fontWeight:"400"
                        }),
                        option: (provided, state) => ({
                          ...provided,
                          backgroundColor: state.isSelected ? '#7001DC' : 'inherit',
                          color: state.isFocused ? '#2c2c2c' : '#2c2c2c',
                          color: state.isSelected ? '#f7f7f7' : '#2c2c2c',
                          cursor:"pointer"
                        }),
                        menu:(provided,state) => ({
                          ...provided,
                          width: '15vw',
                        })
                      }}
                      />
                    </div>
                    
                    <div className="select-cont select-whatsapp" >
                      <div className="select-label">Whatsapp Number</div>
                      <input ref={selectInputRef4} pattern='((\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}' maxlength="10" type="text" className="individual-select select-otpnum-input" onChange={(e)=> setOtpnum(e.target.value)} placeholder='Whatsapp Number'/>
                    </div>
                </div>
                <button onClick={handledemosubmit} className='btn select-submit-btn'>
                  <a href='#' onClick={(e)=>e.preventDefault()}>Submit</a>
                </button>
            </div>

            <div className="hero-right-bottom-cont">
              <img src={Hands} alt="Join Hands" className='joinhands-img' />
            <span className='hero-right-bottom-divider'></span>
              <div className="hero-right-bottom-sub-cont">
              {/* Join hands with us; together, we can transform education. */}
              Discover a Multilingual Communication Platform seamlessly integrated with business essentials 
              and an AI-powered ERP. Master this powerhouse in just 5 minutes! 
              Elevate your business growth with key success elements. <br /> 
              </div>
              <span className="home-hashtags" style={{fontSize:"1vw", width:"43vw", fontWeight:"600"}}> 🌐💼🤖 #BusinessSuccess #MultilingualPlatform #AI ERP #5MinuteMastery </span> 
            </div>

          </div>

        </div>
      </div>
      </>)
}

export default Home