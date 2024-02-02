import React, { useEffect, useRef, useState } from "react";


const OtherEssentials = () => {
  const bubbleref = useRef();
  const titleref = useRef();
    const [checkview, setCheckview] = useState(false);
    const [togglepopup, setTogglepopup] = useState(false);
    const [bubblepopupurl, setBubblepopupurl] = useState("");
    const [bubblepopupdesc, setBubblepopupdesc] = useState("");
    const [bubblepopuptitle, setBubblepopuptitle] = useState("");
    const [modelactive, setModelactive] = useState(false);


    useEffect(()=>{
      const bubbleObserver = new IntersectionObserver((entries)=>{
        const entry=entries[0];
        setCheckview(entry.isIntersecting);
      })
      bubbleObserver.observe(bubbleref.current);

      const titleObserver = new IntersectionObserver((entries)=>{
        const entry1=entries[0];
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

    const togglemodel=(e)=>{
      // e.preventDefault();
      // Send Data to backend and schedule a call
      setModelactive(true);
    }

    const popupdetails = [{
    	title:"AI Powered ERP",
      	description: "Experience the convenience of an intuitive dashboard—get a quick overview of your educational institution in one glance. Plus, save up to 80% on website spending with the cost-effective features of our ERP.",
      	url:'/ExperienceERP'
	  	},{
      	title:"Admission Campaign",
      	description: "Efficiently distribute tasks among parents, faculties, and Super Admin, saving significant time for everyone involved. Ready to explore the simplicity? Schedule a demo now! 🌐💡",
      	url:'/MobileApps'
      	},{
      	title:"Automated Fee Follow-up",
      	description: "Explore the vast possibilities SOOMUCH.AI offers with swift mastery and efficient operation. Ready to experience it yourself? Begin the 5-minute journey now! 🌐🔍",
      	url:'/MinutesMastery'
      	},{
      	title:"Parent Survey and Feedback",
      	description: "Enhance Your Experience:-Experience the enhanced features and functionality of SOOMUCH.AI tailored specifically for your educational institution. 🎓✨ ",
      	url:'/VirtualAssistants'
      	},{
      	title:"Automated Greeeting Generator",
      	description: "Impressed by the promise of unparalleled support? Experience the transformative potential of SOOMUCH.AI firsthand! Schedule a demo today and witness how our INBUILT Virtual Assistants can revolutionize support in educational institutions. 🎓✨",
      	url:'/FreeCustomization'
      	},
    ]

    const successElements = [
        "AI-powered ERP",
        "3 Mobile Apps (iOS and Android)",
        "5 Minutes Mastery", 
        "Virtual Support Executive",
        "Free Customization",
        " ",
        " ",
        " ",
        " ",
    ];
    const bubbleDetails=[
        'successBubble successBubblesB bubble-',
        'successBubble successBubblesB bubble-',
        'successBubble successBubblesA bubble-',
        'successBubble successBubblesB bubble-',
        'successBubble successBubblesA bubble-',
        'successBubble disablebubble successBubblesD bubble-',
        'successBubble disablebubble successBubblesE bubble-',
        'successBubble disablebubble successBubblesD bubble-',
        'successBubble disablebubble successBubblesC bubble-',
    ]
    return (
      <div className='secondary-main-cont'>
          
        <div className='circlebg-cont'>
            <div className='circle1 cblue'></div>
            <div className='circle2 cpurple'></div>
            <div className='circle1 cpink'></div>
            <div className='circle2 cviolet'></div>
        </div>
        
        <div ref={titleref} className='secondary-heading'>
        Operational essentials (Saves upto 80% of time)
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

        {/* Book a Demo */}
        {modelactive===true?<>
            <div className="demo-model-cont">
                <div className="demo-overlay-cont">
                    <div className="demo-model">
                        <div className="demo-model-top">
                            <div className="demo-model-heading">Note: You will get calls assuming you are a parent</div>
                        </div>             
                        <div className="demo-model-mid">
                              <div className="demo-model-points">
                                1. 100% Delivery of your child Information <br /> 
                                2. Multiple retry attempts in-case call is not picked. <br /> 
                                3. Demo Duration: Minimum of 30 Seconds to maximum of 45 sec <br /> 
                                4. Please pick up next 3 calls <br />
                                5. You will receive calls from this number: 8885035035 <br />
                                6. Demo School Name: SOOMUCH Educational institution <br />
                                7. Call will start in 15 seconds. <br />
                              </div>
                              <div onClick={()=>setModelactive()} className="demo-model-close-btn">Close</div>
                        </div>    
                        <div className="demo-model-bottom">
                            <div className="demo-model-bottom-last-points">
                              <div className="demo-model-bottom-last-point">Examination Dates</div>
                              <div className="demo-model-bottom-last-point">Results</div>
                              <div className="demo-model-bottom-last-point">Fee Follow-ups</div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            </>:''}
        
            {togglepopup && <>
            <div className="demo-model-cont">
              <div className="demo-overlay-cont" onClick={()=>{setTogglepopup(false)}}>
                  <div className="demo-model" style={{gap:"1rem"}}>
                      <div className="demo-model-top">
                          <div className="demo-model-heading" style={{fontSize:"26px"}}>{bubblepopuptitle}</div>
                      </div>             
                      <div className="demo-model-mid" style={{padding:"0 2rem"}}>
                            <div className="demo-model-points" style={{width:"35vw", textAlign:"justify"}}>{bubblepopupdesc} <a href={bubblepopupurl} className="knowmore-popup">Know more...</a></div>
                      </div>    
                      <div className="demo-model-bottom" style={{alignItems:"flex-start", padding:"1.5rem 2rem 0.5rem 2rem"}}>
                        <a href='#'><div onClick={togglemodel} className="single-blog-demo-btn">Schedule a demo</div></a>
                      </div>
                  </div>
              </div> 
            </div>
        </>}
      

        </div>
    );
};

export default OtherEssentials;
