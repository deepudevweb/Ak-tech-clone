import React from 'react';
import './Footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
            <section className='footer-section'>
                <MDBContainer className='text-center text-md-start'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 mt-5'>
                            <h6 className='fw-bold mb-4' style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>Contact <span style={{ color: 'blue' }}>Information</span></h6>
                            <p>
                                <a href='#!' className='text-reset text-white' >
                                    <MDBIcon fas icon="phone-alt" style={{ transform: 'rotate(90deg)' }} /> 0120-4909508
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    <MDBIcon far icon="envelope" /> info@aktechnology.co.in
                                </a>
                            </p>
                            <div className="social-link">
                                <a href="#!" style={{ color: 'white', marginRight: '7px', padding: '8px 11px', border: '1px solid white' }}> <MDBIcon fab icon="facebook-f" /></a>
                                <a href="#!" style={{ color: 'white', padding: '8px 9px', border: '1px solid white' }}> <MDBIcon fab icon="linkedin" /></a>
                            </div>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 mt-5'>
                            <h6 className='text-upperc ase fw-bold mb-4' style={{ color: 'white', fontWeight: 'bold', fontSize: '23px' }}>Services</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Learning Consultancy
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Content Development
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Mobile Learning
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Managed Training Services
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Application Development
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    App Development
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 mt-5'>
                            <h6 className='fw-bold mb-4' style={{ color: 'white', fontWeight: 'bold', fontSize: '23px' }}>About us</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Company Overview
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Company Overview
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Contact Us
                                </a>
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-3' style={{ backgroundColor: 'rgb(0,102,160)', color: 'white' }}>
                © Copyright 2024 AK Technology.
                <a className='text-reset fw-bold' href='https://github.com/deepudevweb'>
                    by Deepu prajapati
                </a>
            </div>
        </MDBFooter>
    );
}