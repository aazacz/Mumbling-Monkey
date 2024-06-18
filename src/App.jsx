import react, { useState } from 'react'
import './App.css'

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Homepage from './Pages/Homepage';
import ErrorPage from './Pages/ErrorPage';
import AboutUs from './Pages/AboutUs';
import Navbar from './components/Navbar';
import Animation from './Pages/Animation';

function App() {
  

  return (

<>
<div className='w-full overflow-x-hidden'>

<Navbar/>
<Router> 
        <Routes>
          <Route path='/' element={<Homepage  />} />
          <Route path='/aboutus' element={<AboutUs Data={"about"} />} />
          <Route path='/a' element={<Animation Data={"about"} />} />
          <Route path='*' element={<ErrorPage />} />
          
        </Routes>

</Router>
</div>
</>
  )
}

export default App
