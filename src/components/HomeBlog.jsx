import React, {useState} from 'react'
import Blog2 from '../assets/images/Blog2.jpeg';

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
    ];

  return (
    <div className="blog-main-cont">

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

            <div className="recent-blogs-right" style={{gap:"0"}}>
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