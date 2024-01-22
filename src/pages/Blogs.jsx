import React from 'react'
import Navbar from '../components/Navbar';
import Blog from '../components/Blog';


const Blogs = () => {
  return (
    <>
      <div className="main-cont" >
        <Navbar/>
        <div className="main-sub-cont">
          <Blog/>
        </div>
      </div>
    </>
  )
}

export default Blogs