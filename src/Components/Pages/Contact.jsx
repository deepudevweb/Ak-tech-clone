import React, { useState } from 'react'
import { MDBIcon } from 'mdb-react-ui-kit';
import './Pages.css';

function Contact() {

  return (
    <div className='intoduction'>
    <div className="inner-top">
           <h1 className='contact-h1' style={{ textAlign: 'center', fontSize: '35px' }}>Contact <span style={{ color: '#007cc3' }}>Us</span></h1>
           <span className='intoduction-span'>__________</span>
           <p style={{ textAlign: 'center', marginTop: '10px' , fontWeight: 'bold', fontSize: '18px', padding: '0 15px' }} >Please fill out the quick form and we will be in touch with lightning speed.</p>
       </div>
   <div className="intro-inner">
   <div className="contain">

<div className="wrapper">

  <div className="form">
    <h4>GET IN TOUCH</h4>
    <h2 className="form-headline">Send us a message</h2>
    <form id="submit-form" action="">
      <p>
        <input id="name" className="form-input" type="text" placeholder="Your Name*" />
        <small className="name-error"></small>
      </p>
      <p>
        <input id="email" className="form-input" type="email" placeholder="Your Email*" />
        <small className="name-error"></small>
      </p>
      <p className="full-width">
        <input id="company-name" className="form-input" type="text" placeholder="Company Name*" required />
        <small></small>
      </p>
      <p className="full-width">
        <textarea  minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
        <small></small>
      </p>
      <p className="full-width">
        <input type="checkbox" id="checkbox" name="checkbox" checked /> Yes, I would like to receive communications by call / email about Company's services.
      </p>
      <p className="full-width">
        <input type="submit" className="submit-btn" value="Submit" />
        <button className="reset-btn">Reset</button>
      </p>
    </form>
  </div>

  <div className="contacts contact-wrapper">

    <ul>
      <li><MDBIcon fas icon="map-marker-alt" style={{ marginRight: '5px' }} /><b>India Address:</b></li>
      <p>H-182, IInd Floor, Sector 63, Noida, UP 201301</p>
      <li><MDBIcon fas icon="map-marker-alt" style={{ marginRight: '5px' }} /><b>USA Address:</b></li>
      <p>27 Potomac Road, Monmouth Junction, NJ 08852</p>
      <span className="hightlight-contact-info">
        <li className="email-info"><i className="fa fa-envelope" aria-hidden="true"></i> info@aktechnology.co.in</li>
        <li><i className="fa fa-phone" aria-hidden="true"></i> <span className="highlight-text"> 0120-4909508</span></li>
      </span>
    </ul>
  </div>
</div>
</div>
   </div>
</div>
  )
}

export default Contact
