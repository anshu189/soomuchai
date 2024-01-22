import React from 'react'
import Navbar from '../../components/Navbar'

const MobileApps = () => {
  return (
    <>
      <div className="main-cont">
        <Navbar/>
        <div className="main-sub-cont">

          <div className="single-blog-heading-cont">
            <div className="single-blog-heading">Mobile Apps (Android And IOS) </div>

            <div className="single-blog-details">
                <div className="single-blog-writtenby">Ava Wilson</div>
                <div className="single-blog-date">Oct 30, 2023</div>
            </div>

          </div>

          <div className="single-blog-content-cont">
            <div className="mp-soomuchai">📱 SOOMUCH.AI Mobile Apps: Simplifying Education Management</div>

            <div className='mp-main-content'>
            Efficiently distribute tasks among parents, faculties, and Super Admin, saving significant time for everyone involved. Ready to explore the simplicity? Schedule a demo now! 🌐💡 <br />#SOOMUCHAI #EducationSimplified #MobileApps </div>
            
            <div className="single-blog-demo-btn">Schedule a demo</div>
            <hr className="demo-model-bottom-divider"></hr>

            <div className="mp-steps">Super Admin App:</div>
            <div className="mp-steps-content">Get an overview of all institution branches in one app. <br />Streamline management tasks effortlessly.</div>
            
            <div className="mp-steps">Parent App:</div>
            <div className="mp-steps-content">Mark students' homework completion.<br /> Time-saving for faculties in homework collection. <br />Request/approval feature for flexible fee payment.</div>
            
            <div className="mp-steps">SMS Template Approval Support: </div>
            <div className="mp-steps-content">Customize your communication effortlessly with SMS template approval support, enhancing your messaging efficiency.</div>
            
            <div className="mp-steps">Faculty App: </div>
            <div className="mp-steps-content">Assign homework to single or multiple classes. <br /> Create question papers, add results, and track tasks.<br />Facilitate communication among faculty members.</div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileApps