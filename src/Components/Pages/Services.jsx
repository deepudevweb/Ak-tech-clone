import React from 'react'
import './Pages.css';
import Serimg from '../../assets/ser.jpg'

function Services() {
  return (
    <div className='intoduction'>
      <div className="inner-top">
        <h1 className='intoduction-h1'>Our Services</h1>
        <span className='intoduction-span'>__________</span>
        <p>Our primary specialization is in</p>
      </div>
      <div className="intro-inner">
        <div className="inner-mid">
          <div className="mid-left">
            <b><p>Learning Consultancy</p></b>
            <p>Our foremost step in this field is to access as is vs to be. We check the business performance and perform Gap analysis to arrive at the best solution. We also perform the learning effectiveness evaluation to ensure that the customer gets what he wants.</p>
            <b><p>Content Development</p></b>
            <p>Every business objective requires a different training approach. So, the content has to be useful and functional besides being cost-effective. That is what we strive to achieve. We ensure that the content solution that we provide is engaging and relevant. In order to achieve this, we employ various methods such as, gamification, simulation-based learning, and performance support tools. We also deal in localization of content in various languages to make it more reachable to various sections of users.</p>
            <b><p>Mobile Learning</p></b>
            <p>In today’s times, customers need information on-the-go. To cater to this need, we also provide mobile learning. We provide help to identify the right mobile learning strategy and platforms for your needs. Our team can develop learning courses for you that are compatible with multiple devices. We also create learning videos for mobile devices to provide micro-learning.</p>
            <b><p>Managed Training Services</p></b>
            <p>With our curriculum management services, you can be assured of a customized solution designed for you keeping your needs in mind and tailored according to your context and target audience.
              We provide LMS training as well as administrative management to host your learning solutions that best suits your business needs.</p>
          </div>
          <div className="mid-right">
            <img src={Serimg} alt="intro_img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
