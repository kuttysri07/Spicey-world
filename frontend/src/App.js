
import { Fragment } from 'react'
import Nav from './components/nav/Nav.jsx'
import Hero from './components/hero/Hero.jsx'
import Special from './components/Specialdish/Special.jsx'
import Chef from './components/Chef/Chef.jsx'
import Contact from './components/contact/Contact.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dishes from './components/Dishes/Dishes.jsx'

const App = () => {
  return (
   <Fragment>
      <BrowserRouter>
      <Nav/>
      <Routes>
            <Route path="/" element={
               <Fragment>
                    <Hero />  
                    <Special/>
                    <Chef/>
                    <Contact/>
              </Fragment>} />
              
            <Route path="/dishes/:category" element={<Dishes />} />
      </Routes>
    
      </BrowserRouter>
   
      </Fragment>
    
    
  )
}

export default App