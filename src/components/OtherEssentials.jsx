import React, { useEffect, useRef, useState } from "react";


const OtherEssentials = () => {
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
        
        <div ref={titleref} className='secondary-heading' style={{borderRadius:"0 20px 20px 0", alignSelf:"self-start"}}>
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
        
        {togglepopup===true?
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
        :''}
      

        </div>
    );
};

export default OtherEssentials;
