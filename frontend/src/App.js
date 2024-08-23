
import { Fragment } from 'react'
import Nav from './components/nav/Nav.jsx'
import Hero from './components/hero/Hero.jsx'
import Special from './components/Specialdish/Special.jsx'
import Chef from './components/Chef/Chef.jsx'
import Contact from './components/contact/Contact.jsx'

import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Fragment>
       <BrowserRouter>
      <Nav/>
      <Routes>
            <Route path="/" element={<Hero />} />
      </Routes>
      <Special/>
      <Chef/>
      <Contact/>
      </BrowserRouter>
    </Fragment>
    
    
  )
}

export default App