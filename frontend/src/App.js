
import { Fragment, useEffect, useState } from 'react'
import Nav from './components/nav/Nav.jsx'
import Hero from './components/hero/Hero.jsx'
import Special from './components/Specialdish/Special.jsx'
import Chef from './components/Chef/Chef.jsx'
import Contact from './components/contact/Contact.jsx'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Dishes from './components/Dishes/Dishes.jsx'
import Login from './components/Login/login.jsx'
import { auth } from './components/firebase.js'

const App = () => {
  const [user ,setUser] = useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
   <Fragment>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={user ? <Navigate to={"/hero"}/> : <Login />} />
            <Route path="/hero" element={
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