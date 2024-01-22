import React, { useEffect, useRef, useState } from "react";


const OtherEssentials = () => {
    const [checkview, setCheckview] = useState(false);
    const bubbleref = useRef();
    const titleref = useRef();

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

    const bubblesLink = [
        '/ExperienceERP',
        '/MobileApps',
        '/MinutesMastery',
        '/VirtualAssistants',
        '/FreeCustomization',
    ];

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
        'successBubble successBubblesA bubble-',
        'successBubble successBubblesB bubble-',
        'successBubble successBubblesA bubble-',
        'successBubble successBubblesB bubble-',
        'successBubble successBubblesA bubble-',
        'successBubble successBubblesD bubble-',
        'successBubble successBubblesE bubble-',
        'successBubble successBubblesD bubble-',
        'successBubble successBubblesC bubble-',
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
                          <div key={index} className={checkview===true?"active-view "+items+""+(index+1):items}>
                            <a className="bubblesLink" href={bubblesLink[index]}>{successElements[index]}</a>
                          </div>
                        </>
                      )
                    })}
                </div>
                <div ref={bubbleref} className='Soomuchai'>
                    SOOMUCH<span className='Ai'>.AI</span>
                </div>
            </div>
        </div>
    );
};

export default OtherEssentials;
