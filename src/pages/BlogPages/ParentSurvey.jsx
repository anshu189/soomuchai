import React from 'react'
import Navbar from '../../components/Navbar'

const ParentSurvey = () => {
  return (
    <>
      <div className="main-cont">
        <Navbar/>
        <div className="main-sub-cont">

          <div className="single-blog-heading-cont">
            <div className="single-blog-heading">Parent survey and Feedback</div>

            <div className="single-blog-details">
                <div className="single-blog-writtenby">Daniel Johnson</div>
                <div className="single-blog-date">May 20, 2023</div>
            </div>

          </div>

          <div className="single-blog-content-cont">
            <div className="mp-soomuchai">Elevate Educational Experiences with Parent Feedback!</div>

            <div className='mp-main-content'>
              Unlock quality education and extracurricular activities through admission guarantees. Experience a seamless process with quarterly automated surveys, providing insights into satisfaction levels and areas for improvement. SOOMUCH.AI generates intelligent reports for tailored enhancements, ensuring continuous improvement.
            </div>
            <div className='mp-main-content'>
              Ready to witness the positive impact on parent satisfaction and word-of-mouth advertising? Schedule a demo now and embark on a journey of continuous improvement! 📋👥 <br/>#ParentFeedback #DemoRequest #ContinuousImprovement
            </div>
            
            <div className="single-blog-demo-btn">Schedule a demo</div>
            <hr className="demo-model-bottom-divider"></hr>
            
            <div className="mp-steps" style={{fontSize:'30px', color:'#490e85'}}>📋 Parent Survey and Feedback: Enhancing Educational Experiences</div>

            <div className="mp-steps">🔍 Admission Guarantees:</div>
            <div className="mp-steps-content">Educational institutions assure quality education and extracurricular activities during admissions.</div>
            
            <div className="mp-steps">🔄 Quarterly Automated Surveys:</div>
            <div className="mp-steps-content">Conducting automated parent surveys every quarter to gauge satisfaction levels.</div>
            
            <div className="mp-steps">📊 Feedback Analysis:</div>
            <div className="mp-steps-content">Identify areas of satisfaction and improvement based on parent feedback.</div>
            
            <div className="mp-steps">🧠 SOOMUCH.AI Intelligence Report:</div>
            <div className="mp-steps-content">Generate a business intelligence report recommending necessary changes for parent satisfaction.</div>
            
            <div className="mp-steps">🔄 Implementation and Communication:</div>
            <div className="mp-steps-content">Implement suggested changes and communicate updates to parents through SOOMUCH.AI.</div>
            
            <div className="mp-steps">🔄 Continuous Improvement:</div>
            <div className="mp-steps-content">Repeat the process three times a year to consistently improve institutions' strengths and address areas of improvement.</div>
            
            <div className="mp-steps">👂 Empathy and Communication:</div>
            <div className="mp-steps-content">Show empathy, listen to parent concerns, and communicate implemented changes.</div>
            
            <div className="mp-steps">📢 Positive Impact:</div>
            <div className="mp-steps-content">Happy parents lead to positive word-of-mouth advertising and increased referrals.
            Embrace a cycle of improvement and communication to create a positive and satisfying educational experience. <br/>🌟 #ParentFeedback #ContinuousImprovement</div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default ParentSurvey