import React, { useEffect, useRef, useState } from "react";


const BusinessEssentials = () => {
	const bubbleref = useRef();
	const titleref = useRef();
    const [checkview, setCheckview] = useState(false);
    const [togglepopup, setTogglepopup] = useState(false);
    const [bubblepopupurl, setBubblepopupurl] = useState("");
    const [bubblepopupdesc, setBubblepopupdesc] = useState("");
    const [bubblepopuptitle, setBubblepopuptitle] = useState("");

    useEffect(()=>{
      const bubbleObserver = new IntersectionObserver((entries)=>{
        const entry=entries[0];
        setCheckview(entry.isIntersecting);
      })
      bubbleObserver.observe(bubbleref.current);

      const titleObserver = new IntersectionObserver((entries)=>{
        const entry1=entries[0];
        console.log(entry1);
        setCheckview(entry1.isIntersecting);
      })
      titleObserver.observe(titleref.current);
      
    },[])

    const updateTogglepopup=(index)=>{
      setTogglepopup(true);
      setBubblepopupurl(popupdetails[index].url)      
      setBubblepopuptitle(popupdetails[index].title)
      setBubblepopupdesc(popupdetails[index].description)
    }

    const popupdetails = [{
    	title:"Multilingual Program",
      	description: "Schedule a demo with our Business consultant to discover how the absence of a Multilingual platform is costing educational institutions lakhs of rupees. Learn how SOOMUCH.AI, India's first Multilingual platform, addresses this issue by boosting admissions, increasing parent satisfaction, and enhancing brand value for institutions.",
      	url:'/MultilingualProgram'
	  	},{
      	title:"Admission Campaign",
      	description: "Book a demo with our Admission Counsellor to learn how to boost admissions by up to 30% through Multilingual Language Platforms (choose your preferred language). Our integrated system connects with diverse communication channels (WhatsApp, SMS, Calls, Referral App, and Inquiries) and popular social media platforms (Facebook, Instagram, and Google). Save time and resources by eliminating manual calls, bulk SMS, brochure distribution, and house visits to prospective parents.",
      	url:'/AdmissionCampaign'
      	},{
      	title:"Automated Fee Follow-up",
      	description: "Join us for a demo with our business consultant to explore the first-of-its-kind Automated Fee Follow-up and Collection Process in India. Inspired by successful models in banking, insurance, mobile, and microfinance sectors, our system ensures efficient communication and fee collection. In any business, effective communication about fee dues is key. Schedule a demo now to streamline your fee collection process and enhance overall efficiency.",
      	url:'/AutomatedFee'
      	},{
      	title:"Parent Survey and Feedback",
      	description: "Unlock quality education and extracurricular activities through admission guarantees. Experience a seamless process with quarterly automated surveys, providing insights into satisfaction levels and areas for improvement. SOOMUCH.AI generates intelligent reports for tailored enhancements, ensuring continuous improvement.",
      	url:'/ParentSurvey'
      	},{
      	title:"Automated Greeeting Generator",
      	description: "Experience the transformative power in just 30 seconds! Schedule a live demo now to witness how cultivating personal connections, thoughtful gestures, and emotional intelligence can boost your business, generate referrals, and ensure long-term sustainability. Embrace success with a network of satisfied customers.",
      	url:'/AutomatedGreeting'
      	},
    ]

    const successElements = [
      "Multilingual Communication Platform",
      "Admission Campaign",
      "Automated Fee Follow-up", 
      "Parent Survey and Feedback",
      "Automated Greeting Generator",
      " ",
      " ",
      " ",
      " ",
    ];
    const bubbleDetails=[
      'successBubble successBubblesA bubble-',
      'successBubble successBubblesB bubble-',
      'successBubble successBubblesA bubble-',
      'successBubble successBubblesB bubble-',
      'successBubble successBubblesA bubble-',
      'successBubble disablebubble successBubblesE bubble-',
      'successBubble disablebubble successBubblesD bubble-',
      'successBubble disablebubble successBubblesF bubble-',
      'successBubble disablebubble successBubblesC bubble-',
  ]
    return (
        <div style={{margin:"1rem 0"}} className='secondary-main-cont'>
            
          <div className='circlebg-cont'>
              <div className='circle1 cblue'></div>
              <div className='circle2 cpurple'></div>
              <div className='circle1 cpink'></div>
              <div className='circle2 cviolet'></div>
          </div>
          <div ref={titleref} className='secondary-heading' style={{width:"100vw"}}>
          🚀 Business essentials upto 30% business growth
          </div>
          <div className='secondary-bottom-cont'>
              <div className='bubbles-cont'>
                  {bubbleDetails.map((items,index)=>{
                    return (
                      <>
                        <div key={index} onClick={()=>updateTogglepopup(index)} className={checkview===true?"active-view "+items+""+(index+1):items}>
                          {successElements[index]}
                        </div>
                      </>
                    )
                  })}
              </div>
              <div ref={bubbleref} className='Soomuchai'>
                  SOOMUCH<span className='Ai'>.AI</span>
              </div>
          </div>

          {togglepopup && <>
            <div className="demo-model-cont">
              <div className="demo-overlay-cont" onClick={()=>{setTogglepopup(false)}}>
                  <div className="demo-model" style={{gap:"1rem"}}>
                      <div className="demo-model-top">
                          <div className="demo-model-heading" style={{fontSize:"26px"}}>{bubblepopuptitle}</div>
                      </div>             
                      <div className="demo-model-mid" style={{padding:"0 2rem"}}>
                            <div className="demo-model-points" style={{width:"35vw", textAlign:"justify"}}>{bubblepopupdesc}</div>
                      </div>    
                      <div className="demo-model-bottom" style={{alignItems:"flex-start", padding:"1.5rem 2rem 0.5rem 2rem"}}>
                        <a href={bubblepopupurl}><div className="single-blog-demo-btn" style={{width:"10vw", padding:"0.8rem 1rem"}}>Know More</div></a>
                      </div>
                  </div>
              </div> 
            </div>
        </>}
      
        </div>
    );
};

export default BusinessEssentials;
