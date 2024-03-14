import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import { LuMail } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MDBIcon } from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';


function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='header-main' id='head'>
      <div className="header-top">
        <div className="header-top-left">
          <img src={Logo} alt="Company logo" className='ak-logo' />
        </div>
        <div className="header-top-right">
          <a className='address' href="#">info@aktechnology.co.in <LuMail className='mail-icon' /> </a>
          <div className="links">
            <a href="https://www.linkedin.com/in/deepu-prajapati-49683a23b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className='linke' /></a>
            <a href="#"><FaFacebookSquare className='face' /></a>
          </div>
        </div>
      </div>
      <div className="header-botoom">
        <div className={showMenu ? 'hamberger' : "header-bottom-nav"} id='navlinks'>
          <MDBIcon fas icon="bars" className='menu-icon' onClick={() => setShowMenu(!showMenu)} />
          <ul className={showMenu ? 'show' : ''}>
            <NavLink to={'/'}><li><a href="">Home</a></li></NavLink>
            <NavLink to={'/introduction'}><li><a href="">Introduction</a></li></NavLink>
            <NavLink to={'/Services'}> <li><a href="">Our services</a></li></NavLink>
            <NavLink to={'/TechnicalCapabalities'}> <li><a href="">Technical Capabilities</a></li></NavLink>
            <NavLink to={'/ProjectGovernance'}> <li><a href="">Project Governance</a></li></NavLink>
            <NavLink to={'/Contact'}> <li><a href="">Contact</a></li></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
