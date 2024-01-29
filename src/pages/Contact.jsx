import React from 'react'
import Navbar from '../components/Navbar';
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact-main-cont">
        <Navbar/>
        <div className="contact-sub-cont">
          <div className="contact-left">
            <h4 className="contact-heading">Contact Us</h4>
            <h1 className="contact-subheading">
              Welcome to <span className='contact-soomuchai'>SOOMUCH.AI!</span> We're here to assist you. Whether you have 
              questions about our solutions, want to explore partnership opportunities, 
              or need support, feel free to reach out. Your satisfaction is our priority.
            </h1>
          </div>

          <div className="contact-right">
            <div className="contact-card">

              <div className="contact-card-head">Get in Touch</div>

              <div className="contact-card-cont">
                <div className="contact-phone-email">
                  <h3>General Inquiries:</h3>
                  <span><MdEmail/><h3>info@soomuch.ai</h3></span>
                  <span><IoIosCall/><h3>+1(555)123-4567</h3></span>
                </div>

                <div className="contact-phone-email">
                  <h3>Sales and Partnerships:</h3>
                  <span><MdEmail/><h3>sales@soomuch.ai</h3></span>
                  <span><IoIosCall/><h3>+1(555)987-6543</h3></span>
                </div>

                <div className="contact-phone-email">
                  <h3>Technical Support:</h3>
                  <span><MdEmail/><h3>support@soomuch.ai</h3></span>
                  <span><IoIosCall/><h3>+1(555)789-0123</h3></span>
                </div>

                <div className="contact-phone-email">
                  <span className='contact-visit'>
                    <h3>Visit Our Headquarters:</h3>
                    <h3>123 Tech Avenue, Suite 456 Cityville, State, 19350</h3>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-sub-cont2">
          <div className="contact-left2">
            <span className='social-details'>
              <h1 className='social-heading'>Connect on Social Media</h1>
              <h3 className='social-subheading'>Stay updated on our latest developments, news, and events 
                by following us on social media.</h3>
            </span>
          </div>
          <div className="contact-right2">
            <div className="social-media-cont">
              <span className='social-icons'><FaFacebookF style={{color:'#1453da'}}/><a href="https://facebook.com">Facebook: SoomuchAI</a></span>
              <span className='social-icons'><FaTwitter style={{color:'#1DA1F2'}}/><a href="https://twitter.com">Twitter: SoomuchAI</a></span>
              <span className='social-icons'><FaLinkedin style={{color:'#0077b5'}}/><a href="https://in.linkedin.com/company/soomuch">Linkedin: SOOMUCH.AI</a></span>
            </div>
          </div>
        </div>

        <div className="contact-sub-cont3">
          {/* sadfds */}
        </div>
      </div>
  </>)
}

export default Contact