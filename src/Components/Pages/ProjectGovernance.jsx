import React from 'react'
import './Pages.css';
import Govimg from '../../assets/gov.png'

function ProjectGovernance() {
  return (
    <div className='intoduction'>
      <div className="inner-top">
        <h1 className='project-h1'>Project <span style={{ color: '#007cc3' }}>Governance</span></h1>
        <span className='intoduction-span'>__________</span>
      </div>
      <div className="intro-inner">
        <div className="inner-mid">
          <div className="mid-left">
            <p>Our organization’s project governance provides a robust and logical decision making framework to manage our organization's capital investments.</p>
            <b><p>Our Vision</p></b>
            <ul>
              <li style={{ listStyleType: 'disc' }}>Our commitment to excellence is driven by:</li>
            </ul>
            <ul>
              <li style={{ listStyleType: 'circle' }} >Agility</li>
              <li style={{ listStyleType: 'circle' }}>Adaptability</li>
              <li style={{ listStyleType: 'circle' }}>Integrity</li>
              <li style={{ listStyleType: 'circle' }}>Team spirit</li>
              <li style={{ listStyleType: 'circle' }}>Continuous learning</li>
            </ul>
          </div>
          <div className="mid-right">
            <img src={Govimg} alt="intro_img" className='govimg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectGovernance
