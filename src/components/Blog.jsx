import React, {useState} from 'react'
import Blogimg from '../assets/images/Blog.jpeg';
import Blog2 from '../assets/images/Blog2.jpeg';
import { FiExternalLink } from "react-icons/fi";

const Blog = () => {

    // Handle Email Field
    const [email, setEmail] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
        console.log('value is:', event.target.value);
    };

    const blogTitles = [
        {
            title: "Multilingual Platform",
            author: 'Lisa Chren',
            Lang: 'AI', 
            Date: 'JAN 8, 2024',
            url:'/MultilingualProgram'
        },
        {
            title: "Admission Campaign",
            author: 'Emma Smith', 
            Lang: 'Python', 
            Date: 'Sep 8, 2022',
            url:'/AdmissionCampaign'
        },
        {
            title: "Revolutionize Fee Collection with Automation!",
            author: 'Daniel Johnson',
            Lang: 'JavaScript',
            Date: 'May 20, 2023',
            url:'/AutomatedFee'
        },
        {
            title: "Parent survey and Feedback",
            author: 'Ryan Miller',
            Lang: 'C++',
            Date: 'Nov 12, 2022',
            url:'/ParentSurvey'
        },
        {
            title: "Automated Greeting Generator",
            author: 'Olivia White',
            Lang: 'Ruby',
            Date: 'Apr 5, 2023',
            url:'/AutomatedGreeting'
        },
        {
            title: "Experience the SOOMUCH.AI-Powered ERP",
            author: 'Matthew Davis',
            Lang: 'Swift',
            Date: 'Feb 17, 2024',
            url:'/ExperienceERP'
        },
        {
            title: "Mobile Apps (Android And IOS)",
            author: 'Ava Wilson',
            Lang: 'Go',
            Date: 'Oct 30, 2023',
            url:'/MobileApps'
        },
        {
            title: "5 Minutes Mastery",
            author: 'Ethan Martinez',
            Lang: 'PHP',
            Date: 'Jan 9, 2024',
            url:'/MinutesMastery'
        },
        {
            title: "Tailored to Your Needs: 1 Free Customization!",
            author: 'Chloe Anderson',
            Lang: 'Rust',
            Date: 'Mar 22, 2023',
            url:'/FreeCustomization'
        },
        {
            title: "INBUILT Virtual Assistants for Unparalleled Support",
            author: 'Jung Lee',
            Lang: 'VR/AR',
            Date: 'Jul 18, 2023',
            url:'/VirtualAssistants'
        },
    ];

  return (
    <div className="blog-main-cont">
        <div className="blog-top-cont">
            <div className="blog-heading">Soomuch AI Blog</div>
            <div className="blog-top-sub-cont">
                <div className="blog-top-left"><img src={Blogimg} alt="" /></div>
                <div className="blog-top-right">
                    <div className='blog-featured'>Featured</div>
                    <a className="blog-featured-heading" href='/MultilingualProgram'> Multilingual Platform</a>
                    <div className="blog-details">
                        <div className="writtenby author-details">Author | <span>John</span></div>
                        <div className="Language author-details">English</div>
                        <div className="Date author-details">21 Mar</div>
                    </div>
                    <hr className="blog-sep"></hr>
                    <div className="blog-content">
                    Schedule a demo with our Business consultant to discover how the absence
                    of a Multilingual platform is costing educational institutions lakhs of
                    rupees. Learn how SOOMUCH.AI, India's first Multilingual platform, 
                    addresses this issue by boosting admissions, increasing parent satisfaction, 
                    and enhancing brand value for institutions. 
                    </div>
                    <a href='/blogs' className="viewallblog">Read more <FiExternalLink /></a>
                </div>
            </div>
        </div>

        <div className="blog-bottom-cont">
            <div className="recent-blogs-left">
                <div className="recent-blogs-heading">Recent <br /> blogs</div>
                <div className="recent-blogs-subheading">AI Unleashed: Discover the language of innovation in our recent blogs.</div>
                <div className="recent-blogs-input-cont">
                    <input type="email" className='recent-blog-emailinput' 
                    value={email} onChange={handleEmail} placeholder='Enter your Email'/>
                    <button className="recent-blog-submit-btn">Send</button>
                </div>
            </div>

            <div className="recent-blogs-right">
                {blogTitles.map((items)=>{return<>
                    <div className="recent-blog-right-card">
                        <img src={Blog2} alt="Blog" className='recent-blog-card-img'/>
                        <div className="recent-blog-card-right-cont">
                            <a className="recent-blog-card-heading" href={items.url}>{items.title}</a>
                            <div className="recent-blog-card-author-details">
                                <div className="recent-blog-card-author">{items.author}</div>
                                <div className="recent-blog-card-lang">{items.Lang}</div>
                                <div className="recent-blog-card-date">{items.Date}</div>
                            </div>
                        </div>
                    </div>
                </>})}
            </div>

        </div>
    </div>
  )
}

export default Blog