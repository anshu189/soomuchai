import React from 'react'
import Navbar from '../../components/Navbar'

const MinutesMastery = () => {
  return (
    <>
      <div className="main-cont">
        <Navbar/>
        <div className="main-sub-cont">

          <div className="single-blog-heading-cont">
            <div className="single-blog-heading">5 Minutes Mastery</div>

            <div className="single-blog-details">
                <div className="single-blog-writtenby">Ethan Martinez</div>
                <div className="single-blog-date">Jan 9, 2024</div>
            </div>

          </div>

          <div className="single-blog-content-cont">
            
            <div className='mp-main-content'>
            Explore the vast possibilities SOOMUCH.AI offers with swift mastery and efficient operation. Ready to experience it yourself? Begin the 5-minute journey now! 🌐🔍 #SOOMUCHAI #5MinuteMastery #EfficiencyUnleashed</div>
            
            <div className="single-blog-demo-btn">Schedule a demo</div>
            <hr className="demo-model-bottom-divider"></hr>
            
            <div className="mp-steps">🚀 Unlock SOOMUCH.AI in Just 5 Minutes!</div>
            <div className="mp-steps-content">Discover the simplicity of SOOMUCH.AI with a quick 5-minute mastery, inspired by the efficiency of Google and ChatGPT Search.</div>
            
            <div className="mp-steps">🕐 Rapid Learning:</div>
            <div className="mp-steps-content">Ask any information and learn to use it in just 5 minutes.</div>
            
            <div className="mp-steps">💡 Effortless Operation:</div>
            <div className="mp-steps-content">Only 3 clicks to operate the feature-rich SOOMUCH.AI platform.</div>
            
            <div className="mp-steps">🧠 Intelligent Search:</div>
            <div className="mp-steps-content">Harness the power of an intelligent search button. Access the information you need in just 3 clicks.</div>
             
          </div>
        </div>
      </div>
    </>
  )
}

export default MinutesMastery