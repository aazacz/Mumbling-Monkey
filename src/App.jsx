import './App.css'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Homepage from './Pages/Homepage';
import ErrorPage from './Pages/ErrorPage';
import AboutUs from './Pages/AboutUs';
import Navbar from './components/Navbar';
import OurExpertise from './Pages/OurExpertise';
import OurTeam from './Pages/OurTeam';
import ContactUsPage from './Pages/ContactUsPage';
import Services from './Pages/Services';
import Testimonials from './components/Testimonials';
import ScrollToTop from './components/ScrollToTop';
import TermsOfUsePage from './Pages/TermsOfUsePage';
import PrivacyPoliciesPage from './Pages/PrivacyPoliciesPage';


function App() {

  return (

    <>
      <div className='w-full  overflow-x-hidden'>

        <Navbar />
        
        <ScrollToTop />

        <Routes>
          <Route path='/'              element={<Homepage />}      />
          <Route path='/aboutus'       element={<AboutUs  />}      />
          <Route path='/services'      element={<Services  />}     />
          <Route path='/ourexpertise'  element={<OurExpertise />}  />
          <Route path='/ourteam'       element={<OurTeam  />}      />
          <Route path='/contactus'     element={<ContactUsPage />} />
          <Route path='/TermsOfUse'    element={<TermsOfUsePage />} />
          <Route path='/privacypolicy' element={<PrivacyPoliciesPage />} />
          <Route path='*'              element={<ErrorPage />} />

        </Routes>


      </div>
    </>
  )
}

export default App
