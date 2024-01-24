import React, {useState} from 'react'
import Logo from '../assets/logo/logo_purple_text.png';

const Footer = () => {

    // Handle Email Field
    const [email, setEmail] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
        console.log('value is:', event.target.value);
    };

    const handlesendEmail=()=>{
        setEmail("");
        // Send the Email for Newsletter
    }

  return (
    <div className="Footer" id='Footer' >
        <div className="footer-top">
            <div className="footer-logo-cont">
                <a href="/"><img src={Logo} alt="Soomuchai logo" className="footer-logo" /></a>
            </div>
            <div className="column-quick-links">
                <h4 className='footer-quicklinks-heading' >Quick Links</h4>
                <a className='footer-links' href="/contactus">Contact us</a>
                <a className='footer-links' href="/joinhands">Join hands</a>
                <a className='footer-links' href="/blogs">Blogs</a>
                <a className='footer-links' href="/faq's">FAQ</a>
            </div>
            <div className="column-follow-us">
                <h4 className='footer-followus-heading'>Follow Us</h4>
                <a className='footer-links' href="https://facebook.com">Facebook</a>
                <a className='footer-links' href="https://twitter.com">Twitter</a>
                <a className='footer-links' href="https://linkedin.com">Linkedin</a>
            </div>
            <div className="footer-email-form">
                <h4 className='footer-subscribe-heading'>Subscribe</h4>
                <h6 className='footer-subscribe-subheading'>Get the latest AI related resources, news and more.</h6>
                <div className="recent-blogs-input-cont">
                    <input type="email" className='recent-blog-emailinput' 
                    value={email} onChange={handleEmail} placeholder='Enter your Email'/>
                    <button onClick={handlesendEmail} className="recent-blog-submit-btn">Send</button>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <h4 className="soomuchai-copyright">2024 © Soomuch.AI All Rights Reserved</h4>
        </div>
    </div>
  )
}

export default Footer