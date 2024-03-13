import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import { LuMail } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MDBIcon } from 'mdb-react-ui-kit';


function Header() {
  const [showMenu , setShowMenu] = useState(false)
  
  return (
    <div className='header-main' id='head'>
      <div className="header-top">
        <div className="header-top-left">
         <img src={Logo} alt="Company logo" />
         </div>
         <div className="header-top-right">
            <a className='address' href="#">info@aktechnology.co.in <LuMail className='mail-icon' /> </a>
            <div className="links">
              <a href="#"><FaLinkedin className='linke' /></a>
              <a href="#"><FaFacebookSquare className='face' /></a>
            </div>
         </div>
      </div>
      <div className="header-botoom">
         <div className={showMenu ? 'hamberger' : "header-bottom-nav"} id='navlinks'>
         <MDBIcon fas icon="bars" className='menu-icon' onClick={() => setShowMenu(!showMenu)}/>
          <ul className={showMenu ? 'show' : ''}>
            <li><a href="">Home</a></li>
            <li><a href="">Introduction</a></li>
            <li><a href="">Our services</a></li>
            <li><a href="">Technical Capabilities</a></li>
            <li><a href="">Project Governance</a></li>
            <li><a href="">Contact</a></li>
          </ul>
         </div>
      </div>
    </div>
  )
} 

export default Header
