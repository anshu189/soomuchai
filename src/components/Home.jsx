import Navbar from './Navbar';
import Select from 'react-select';
import React, { useState } from 'react'
import video from '../assets/vids/video.mp4';
import { RiCloseFill } from "react-icons/ri";
import Hands from '../assets/images/hands.svg'
import { Typewriter } from 'react-simple-typewriter'
import { HiOutlinePlayCircle } from "react-icons/hi2";

const Home = () => {
  const [langvalue, setLangvalue] = useState("");
  const [connectvalue, setConnectvalue] = useState("");
  const [riskvalue, setRiskvalue] = useState("");
  const [Videostate, setVideostate] = useState(false);
  const [optnum, setOtpnum] = useState('');
  const [tabscntr, setTabCntr] = useState(0);
  const customTheme=(theme)=>{
    return{
      ...theme,
      colors:{
        ...theme.colors,
        primary25:"#7001DC",
        primary:"#7001DC",
        text: '#2c2c2c',
      }
    }
  }
  
  const subheading=['Faces challenges in student retention and attracting new admissions.',
  'Faces difficulties in timely fee collection leading to increase in arrears.', 
  'Operates with low profit margins because of increasing competition.',
  'Parents face difficulty due to a lack of communication in local languages.',
  'Send’s English SMS to parents despite only 30% of them understanding.']

  const langoptions = [
    {value:"Telugu",label:"Telugu"},
    {value:"Hindi",label:"Hindi"},
    {value:"English",label:"English"},
  ]
  const connectoptions = [
    {value:"SMS",label:"SMS"},
    {value:"Whatsapp",label:"Whatsapp"},
  ]
  const riskoptions = [
    {value:"Yes",label:"Yes"},
    {value:"No",label:"No"},
  ]

  const handletabs=()=>{
    if(tabscntr===5){
      setTabCntr(1)
    }else{
      setTabCntr(1+tabscntr)
    }
  }

  // Handle the Demo Function 
  const handledemosubmit=()=>{
    const demolang = langvalue.value;
    const connectoption = connectvalue.value;
    const riskoption = riskvalue.value;

    // Send Data to backend and scehdule a demo
    
    console.log(demolang,connectoption,riskoption,optnum);
  }

  return (
      <div className="home-main-cont">
        <Navbar/>
        <div className="hero-main-cont">
          {Videostate===true?<>
            <span className='closeicon' onClick={()=>setVideostate(false)}><RiCloseFill/></span>
            <span className="videospan">
              <video width={"800px"} height={"490px"} 
              controls autoPlay  className='video'>
                <source src={video} type='video/mp4'/>
              </video>
            </span>
          </>:null}
          <div className="hero-left">
            <div className="hero-left-top-cont">
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
                      delaySpeed={1000}
                      words={subheading}
                      onDelay={handletabs}
                    />
                  </div>
            </div>

            <div className="hero-left-bottom-cont">
              <span style={{fontSize:'24px'}}>Prime Minister's Support: Narendra Modi</span>
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

          <div className="hero-right">

            <div className="vertical-right-heading">Boost Your Business</div>

            <div className="hero-right-top-cont">
              <div className="hero-right-top-heading">30% Growth<br/>with 30 seconds<br/>live demo</div>
                <div className="select-section">
                    <Select 
                    className='individual-select' 
                    isSearchable 
                    onChange={setLangvalue} 
                    options={langoptions} 
                    defaultValue={langvalue} 
                    placeholder="Choose Language"
                    theme={customTheme}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        boxShadow: "none",
                        border: "none",
                        width:"100%",
                        padding:"0.1rem",
                        cursor:"pointer",
                        fontFamily:"Helvetica",
                        fontWeight:"500"
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isSelected ? '#7001DC' : 'inherit',
                        color: state.isFocused ? '#2c2c2c' : '#2c2c2c',
                        color: state.isSelected ? '#f7f7f7' : '#2c2c2c',
                        cursor:"pointer"
                      }),
                    }}
                    />

                    <Select 
                    className='individual-select' 
                    isSearchable 
                    onChange={setConnectvalue} 
                    options={connectoptions} 
                    defaultValue={connectvalue} 
                    placeholder="Parental Connect"
                    theme={customTheme}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        boxShadow: "none",
                        border: "none",
                        width:"100%",
                        padding:"0.1rem",
                        cursor:"pointer",
                        fontFamily:"Helvetica",
                        fontWeight:"500"
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isSelected ? '#7001DC' : 'inherit',
                        color: state.isFocused ? '#2c2c2c' : '#2c2c2c',
                        color: state.isSelected ? '#f7f7f7' : '#2c2c2c',
                        cursor:"pointer"
                      })
                    }}
                    />
                    
                    <Select 
                    className='individual-select' 
                    isSearchable 
                    onChange={setRiskvalue} 
                    options={riskoptions} 
                    defaultValue={riskvalue} 
                    placeholder="Analyze Risk"
                    theme={customTheme}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        boxShadow: "none",
                        border: "none",
                        width:"100%",
                        padding:"0.1rem",
                        cursor:"pointer",
                        fontFamily:"Helvetica",
                        fontWeight:"500"
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isSelected ? '#7001DC' : 'inherit',
                        color: state.isFocused ? '#2c2c2c' : '#2c2c2c',
                        color: state.isSelected ? '#f7f7f7' : '#2c2c2c',
                        cursor:"pointer"
                      })
                    }}
                    />

                    <input type="number" className="individual-select select-otpnum-input" onChange={(e)=> setOtpnum(e.target.value)} placeholder='Number'/>
                </div>
                <button onClick={handledemosubmit} className="btn select-submit-btn">Submit</button>
            </div>

            <div className="hero-right-bottom-cont">
              <img src={Hands} alt="Join Hands" className='joinhands-img' />
            <span className='hero-right-bottom-divider'></span>
              <div className="hero-right-bottom-sub-cont">
              Join hands with us; together, we can transform education.
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Home