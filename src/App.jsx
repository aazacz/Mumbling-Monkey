import react, { useState } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Homepage from './Pages/Homepage';
import ErrorPage from './Pages/ErrorPage';
import AboutUs from './Pages/AboutUs';
import Navbar from './components/Navbar';
import Animation from './Pages/Animation';
import OurExpertise from './Pages/OurExpertise';
import OurTeam from './Pages/OurTeam';
import ContactUsPage from './Pages/ContactUsPage';
import Services from './Pages/Services';
import Testimonials from './components/Testimonials';
import InnerServices from './components/InnerServices';
function App() {
  

  return (

<>
<div className='w-full  overflow-x-hidden'>

<Navbar/>

        <Routes>
          <Route path='/' element={<Homepage  />} />
          <Route path='/aboutus' element={<AboutUs Data={"about"} />} />
          <Route path='/services' element={<Services Data={"about"} />} />
          <Route path='/ourexpertise' element={<OurExpertise Data={"about"} />} />
          <Route path='/ourteam' element={<OurTeam Data={"about"} />} />
          <Route path='/contactus' element={<ContactUsPage Data={"about"} />} />
          <Route path='/a' element={<Testimonials/>} />
          <Route path='/b' element={<InnerServices/>} />
          <Route path='*' element={<ErrorPage />} />
          
        </Routes>


</div>
</>
  )
}

export default App
