import React from 'react'
import './Pages.css'
import Phoneimg from '../../assets/2.jpg'
import Phoneimg2 from '../../assets/5.jpg'
import Phoneimg3 from '../../assets/4.jpg'
import Phoneimg4 from '../../assets/homebox.jpg'

function Home() {
    return (
        <div className='home'>
            <div className="inner-home">
                <div className="home-upper">
                    <h1>Our <span className='home-span'>Services</span></h1>
                </div>
                <div className="home-grid">
                    <div className="box-continer">
                        <div className="box">
                            <img src={Phoneimg} alt="" className='box-img' />
                        </div>
                        <div className="box" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', padding: '10px 25px', backgroundColor: 'rgb(56,147,199)' }} >
                            <h6>Mobile Learning</h6>
                            <p>In today’s times, customers need information on-the-go. To cater to this need, we also provide mobile learning. We provide help to identify the right mobile learning strategy and platforms for your needs.</p>
                        </div>
                        <div className="box">
                            <img src={Phoneimg3} alt="" className='box-img' />
                        </div>
                        <div className="box" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', padding: '10px 25px', backgroundColor: 'rgb(0,102,160)' }}>
                            <h6>Learning Consultancy</h6>
                            <p>Our foremost step in this field is to access as is vs to be. We check the business performance and perform Gap analysis to arrive at the best solution. We also perform the learning effectiveness evaluation to ensure that the customer gets what he wants.</p>
                        </div>
                    </div>
                    <div className="box-continer">
                        <div className="box" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', padding: '10px 25px', backgroundColor: 'rgb(129 129 129 / 80%)' }}>
                            <h6>Content Development</h6>
                            <p>Every business objective requires a different training approach. So, the content has to be useful and functional besides being cost-effective. That is what we strive to achieve.</p>
                        </div>
                        <div className="box">
                            <img src={Phoneimg4} alt="" className='box-img' />
                        </div>
                        <div className="box" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', padding: '10px 25px', backgroundColor: 'rgb(63 60 59 / 82%)' }}>
                            <h6>Managed Training Services</h6>
                            <p>With our curriculum management services, you can be assured of a customized solution designed for you keeping your needs in mind and tailored according to your context and target audience.</p>
                        </div>
                        <div className="box">
                            <img src={Phoneimg2} alt="" className='box-img' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
