import React from 'react'
import Navbar from '../../components/Navbar'

const FreeCustomization = () => {
  return (
    <>
      <div className="main-cont">
        <Navbar/>
        <div className="main-sub-cont">

          <div className="single-blog-heading-cont">
            <div className="single-blog-heading">Tailored to Your Needs: 1 Free Customization!</div>

            <div className="single-blog-details">
                <div className="single-blog-writtenby">Chloe Anderson</div>
                <div className="single-blog-date">Mar 22, 2023</div>
            </div>

          </div>

          <div className="single-blog-content-cont">
            
            <div className='mp-main-content'>
            Enhance Your Experience:-Experience the enhanced features and functionality of SOOMUCH.AI tailored specifically for your educational institution. 🎓✨ #CustomizationOffer #SOOMUCHAI #EducationTailored</div>
            <div className="single-blog-demo-btn">Schedule a demo</div>
            <hr className="demo-model-bottom-divider"></hr>

            <div className="mp-steps">Flexibility at its Best:</div>
            <div className="mp-steps-content">Enjoy the adaptability of SOOMUCH.AI to cater to your unique needs.</div>
            
            <div className="mp-steps">Complimentary Customization:</div>
            <div className="mp-steps-content">Avail the offer of one free customization for Fee and Report Cards.</div>
            
            <div className="mp-steps">Unique Educational Institutions:</div>
            <div className="mp-steps-content">Recognizing the diversity, we understand the importance of adapting to various fee structures and report card formats.</div>
            
            <div className="mp-steps">Seamless Fit:</div>
            <div className="mp-steps-content">Let us customize it precisely as per your requirements, ensuring a seamless fit for your institution.</div>
             
          </div>
        </div>
      </div>
    </>
  )
}

export default FreeCustomization