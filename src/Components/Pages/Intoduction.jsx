import React from 'react'
import './Pages.css';
import Introimg from '../../assets/intro.jpg'

function Intoduction() {
    return (
        <div className='intoduction'>
            <div className="inner-top">
                <h1 className='intoduction-h1'>Introduction</h1>
                <span className='intoduction-span'>__________</span>
                <p style={{ textAlign: 'center', padding: '0 15px' }}>“A journey of a thousand miles begins with a single step.” —Lao Tzu</p>
            </div>
            <div className="intro-inner">
                <div className="inner-mid">
                    <div className="mid-left">
                        <h2>WELCOME TO AK TECHNOLOGY</h2>
                        <p>Keeping this saying in mind, we have begun!</p>
                        <p>We are a fresh, we are driven and we have our goals set.</p>
                        <b><p>Our Vision</p></b>
                        <ul>
                            <li style={{ listStyleType: 'disc' }}>To be recognized as one of the leading performers through</li>
                        </ul>
                        <ul>
                            <li style={{ listStyleType: 'circle' }} >Consistently achieving operational excellence</li>
                            <li style={{ listStyleType: 'circle' }}>Best-in-class customer satisfaction</li>
                            <li style={{ listStyleType: 'circle' }}>Superlative financial performance</li>
                        </ul>
                        <b><p>Our Mission</p></b>
                        <p>To unleash the potential of an agile and focused business solution that transforms the way businesses goals are achieved. We provide tailored solutions that meet the ever-changing market dynamics and suit our customers.</p>
                    </div>
                    <div className="mid-right">
                        <img src={Introimg} alt="intro_img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intoduction
