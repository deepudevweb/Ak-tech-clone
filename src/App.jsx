import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';;
import TechnicalCapabalities from './Components/Pages/TechnicalCapabalities';
import ProjectGovernance from './Components/Pages/ProjectGovernance';
import Contact from './Components/Pages/Contact';
import Intoduction from './Components/Pages/Intoduction';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/introduction' element={<Intoduction />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/TechnicalCapabalities' element={<TechnicalCapabalities />} />
        <Route path='/ProjectGovernance' element={<ProjectGovernance />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
