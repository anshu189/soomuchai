import React from 'react'
import Navbar from '../components/Navbar';

const JoinHands = () => {

  const elemetnsdata = [{
    title:'🌐Multilingual Communication Platform',
    first:'Enhanced Connectivity: Seamlessly connect stakeholders.(Parents, Students and Management)',
    second:'Language Inclusivity: Break language barriers effortlessly. Choose language of your choice.',
    third:'Efficient Collaboration: Streamline interactions for all.'
  },{
    title:'🚀Admission Campaign',
    first:'Strategic Outreach: Engage students with targeted campaigns.',
    second:'Effortless Enrollment: Simplify admissions with user-friendly interfaces.',
    third:'Boosted Admissions: Witness increased enrollments.'
  },{
    title:'📋Parent Survey and Feedback',
    first:'Continuous Improvement: Conduct real-time surveys for enhancement.',
    second:'Stakeholder Engagement: Strengthen bonds between parents and institutions.',
    third:'Informed Decision-Making: Leverage feedback for data-driven improvements.'
  },{
    title:'🔄Automated Fee Follow-up',
    first:'Timely Reminders: Ensure prompt fee payments.',
    second:'Reduction in Arrears: Minimize overdue fees efficiently.',
    third:'Cost-Effective Approach: Save time and resources.'
  },{
    title:'🌟Automated Greeting Generator',
    first:'Personalized Engagement: Greet on special occasions.',
    second:'Emotional Connection: Build positive relationships.',
    third:'Word of Mouth Impact: Create happy memories for recommendations.'
  },{
    title:'🤖AI-powered ERP',
    first:'Holistic Management: Integrate essential functions seamlessly.',
    second:'Efficiency Unleashed: Boost productivity and streamline operations.',
    third:'Data-Driven Insights: Make informed decisions with AI analytics.'
  },{
    title:'📱3 Mobile Apps (iOS and Android)',
    first:'Comprehensive Solutions: Tailored apps for Parents, Faculties, and School Management.',
    second:'Enhanced Accessibility: Stay connected anywhere, anytime.',
    third:'Upcoming Transportation App: Simplify logistics with a tracking mechanism for student transportation. Student app coming soon!'
  },{
    title:'⏰5 Minutes Mastery',
    first:'User-Friendly Interface: Easily navigate the educational ERP system.',
    second:'Efficient Training: Swift adoption with a short learning curve.',
    third:'Immediate Integration: Benefit from the ERP within minutes.'
  },{
    title:'🌐Virtual Support Executive',
    first:'Instant Assistance: Real-time support within just 30 seconds.',
    second:'Issue Resolution: Address concerns promptly for an uninterrupted experience.',
    third:'Enhanced User Satisfaction: Ensure a seamless user experience with quick support.'
  },]
  const elementsurl = [{
    url:'/MultilingualProgram'
  },{
    url:'/'
  },{
    url:'/'
  },{
    url:'/'
  },{
    url:'/'
  },{
    url:'/'
  },{
    url:'/'
  },{
    url:'/'
  },{
    url:'/'
  },{
    url:'/'
  },]
  return (
    <>
      <div className="jh-main-cont">
        <Navbar/>
        <div className="jh-sub-cont">
          <h1 className="jh-heading">Join Hands</h1>
          <div className="jh-contents">
            <div className='jh-content'>Embark on the EdTech Revolution with SOOMUCH.AI - 
              India's Premier Multilingual Communication Platform for 
              Educational Institutions!
            </div>
            <div className='jh-content'>Discover the transformative power of SOOMUCH.AI, 
              India's pioneer in multilingual communication exclusively
               tailored for educational institutions.
            </div>
          </div>
        </div>

        <div className="jh-sub-cont2">
          <div className='jh-sub-ans'><span className='jh-ans-highlight'>Endorsed by Leaders: </span>Our Honourable Prime Minister, Narendra Modi, 
            recognizes the significance of a multilingual communication platform. <br /><br />
            <span className='jh-ans-highlight'>Industry Giants Embrace It: </span>Multinational companies like Google, Amazon, 
            Microsoft, and more are actively investing in the importance of multilingualism.
          </div>
          <h1 className='jh-sub-q'>Why Multilingual Communication Matters?</h1>
        </div>
        
        <div className="jh-sub-cont3">
          <h2 className='jh-elements-heading'>Explore the potential of our platform and join the ranks of educational
             institutions leveraging the EdTech revolution.
          </h2>
          <div className='joinhands-cards'>
            {elemetnsdata.map((items, i)=>{
              return<>
              <div className={'jh-card '+(i%2===0?'jh-card-left':' jh-card-right')}>
                <h2 className="jh-card-heading">{items.title}</h2>
                <div className="jh-card-points">
                  <div className="jh-card-point">{"> "+items.first}</div>
                  <div className="jh-card-point">{"> "+items.second}</div>
                  <div className="jh-card-point">{"> "+items.third}</div>
                  <a href={elementsurl[i].url} className='jh-card-readmore'>Read More...</a>
                </div>
              </div>
            </>})}
          </div>
          <div className="jh-last-cont">
            <h1 className='jh-last-heading'>
            Immerse your institution in the future of learning. Join hands with SOOMUCH.AI for a revolutionary 
            journey in education! #EdTechRevolution #SOOMUCH.AI #TransformingEducation.
            </h1>
          </div>
        </div>
        </div>
    </>
  );
}

export default JoinHands