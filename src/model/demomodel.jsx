import React from 'react'

const Demomodel = () => {
  return (<>
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
                      </div>
                      <div className="demo-model-close-btn">Close</div>
                </div>    
                <div className="demo-model-bottom">
                    <div className="demo-model-bottom-subheading">Call will start in 15 seconds...</div>
                    <hr className="demo-model-bottom-divider"></hr>
                    <div className="demo-model-bottom-last-points">
                      <div className="demo-model-bottom-last-point">Examination Dates</div>
                      <div className="demo-model-bottom-last-point">Results</div>
                      <div className="demo-model-bottom-last-point">Fee Follow-ups</div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    </>
  )
}

export default Demomodel