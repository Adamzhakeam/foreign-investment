import React from 'react'
import "./Logo.css"
import logo from "../../assets/images/img1.jpg"
function Logo() {
  return (
    
    <div className='flex justify-center'>
        <img className ='logo1' src={logo} alt="logo for muvule"/>
    </div>
  )
}

export default Logo