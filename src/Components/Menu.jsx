import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import WorkExperience from './WorkExperience';


const Menu = () => {
  return (
    <div>
        <div className='route'>
       
        <NavLink to='/about'>About</NavLink><br/>
        <NavLink to='/contact'>Contact</NavLink><br/>
        <NavLink to='/workexamples'>PortfolioPage</NavLink><br/>
       </div>
        <br/>
        <br/>
        

        <Routes>
         
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/workexamples' element={<WorkExperience />} />
      
        </Routes>
    </div>
  )
}

export default Menu