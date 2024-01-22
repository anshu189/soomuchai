import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { RiArrowDownSLine } from "react-icons/ri";


const FAQ = () => {
  
  const [showfaq, setShowfaq] = useState(null);

  const togglefaq=(index)=>{
    if(showfaq===index){
      return setShowfaq(null)
    }
    setShowfaq(index)
  }

  const faqdata = [{
    question: "What is SOOMUCH.AI?",
    answer: "SOOMUCH.AI is an advanced platform that integrates various solutions for educational institutions, including a multilingual communication platform, admission campaigns, parent surveys, automated fee follow-up, an automated greeting generator, an AI-powered ERP, and more."
  },{
    question: "How can SOOMUCH.AI benefit educational institutions?",
    answer: "SOOMUCH.AI offers a comprehensive suite of tools to streamline communication, enhance engagement, and optimize operations within educational institutions. From boosting admissions to automating fee follow-ups, SOOMUCH.AI contributes to overall efficiency and growth."
  },{
    question: "What is the significance of the Multilingual Communication Platform?",
    answer: "The Multilingual Communication Platform breaks language barriers, fostering seamless communication among parents, faculties, and students. It promotes inclusivity and ensures effective collaboration."
  },{
    question: "Can SOOMUCH.AI help in boosting admissions?",
    answer: "Absolutely! SOOMUCH.AI includes features like strategic outreach and effortless enrollment, enabling educational institutions to engage prospective students through targeted admission campaigns, ultimately leading to increased enrollments."
  },{
    question: "How does the Automated Fee Follow-up work?",
    answer: "The Automated Fee Follow-up system sends timely reminders, minimizes overdue fees, and adopts a cost-effective approach. This ensures that educational institutions can manage and collect fees efficiently, reducing the burden on manual processes."
  },{
    question: "Tell us about the AI-powered ERP.",
    answer: "The AI-powered ERP integrates essential business functions into a powerful system, unleashing efficiency within educational institutions. It provides data-driven insights, streamlines operations, and supports informed decision-making."
  },{
    question: "Are there mobile apps available for SOOMUCH.AI?",
    answer: "Yes, SOOMUCH.AI offers three mobile apps for iOS and Android, tailored for Parents, Faculties, and School Management. These apps enhance accessibility, allowing stakeholders to stay connected anytime, anywhere."
  },{
    question: "Is there a transportation app under development?",
    answer: "Yes, an upcoming Transportation App will simplify logistics with tracking mechanisms for student transportation. Additionally, a Student App is in development, further enriching the suite of solutions."
  },{
    question: "How quickly can educational institutions adopt the system?",
    answer: "The 5 Minutes Mastery feature ensures a short learning curve, allowing users to understand and effectively use the educational ERP within just a few minutes."
  },{
    question: "Is there support available for technical issues?",
    answer: "Absolutely! SOOMUCH.AI provides virtual support with a Virtual Support Executive, ensuring instant assistance within just 30 seconds to address any technical issues and enhance user satisfaction."
  },]

  return (
    <>
      <div className="faq-main-cont">
        <Navbar/>
        <div className="faq-sub-cont1">
          <div className="faq-left">
            <h1 className="faq-heading">Frequently Asked Questions</h1>
            <h4 className="faq-subheading">Here are some Frequently Asked Questions (FAQs) about SOOMUCH.AI</h4>
          </div>
          <div className="faq-right">
                {faqdata.map((items, index) =>{
                  return<>
                    <div className="faq-item">
                      <div className="faq-title" onClick={()=>togglefaq(index)}>
                        <h3 className="faq-q">{items.question}</h3>
                        <span className={showfaq===index?' active-faq':'faq-icon'}><RiArrowDownSLine /></span>  
                      </div>
                      <div className={showfaq===index?' show-faq':'faq-content'}>{items.answer}</div>  
                    </div>  
                  </>                  
                })}
          </div>
        </div>
        <div className="faq-sub-cont2">

          <div className="faq-left2">
            <form className='faq-form' >
              <input className='faq-input' type="text" placeholder='Name'/>
              <input className='faq-input' type="text" placeholder='School Name'/>
              <input className='faq-input' type="number" placeholder='Whatsapp Number'/>
              <input className='faq-input' type="text" placeholder='Your Question...'/>
            </form>
            <button className='faq-submit'><a href="/">Submit</a></button>
          </div>

          <div className="faq-right2">
            <h1 className="faq-heading2">For any additional inquiries or specific details, feel free to contact our support team.</h1>
          </div>
        </div>
      </div>
    </>
    )
}

export default FAQ