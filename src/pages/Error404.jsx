import React from 'react'
import Navbar from '../components/Navbar';

const Error404 = () => {
  return (
    <>
      <div className="main-cont">
        <Navbar/>
        <div className="main-sub-cont" style={{height:"calc(100vh - 110px)"}}>
          <div style={{fontSize:"3vw"}}>Error404: Not Found</div>
        </div>
      </div>
    </>
  )
}

export default Error404