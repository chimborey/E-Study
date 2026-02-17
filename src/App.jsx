import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import Header from './Page/Header'
import Footer from './Page/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './Page/About'
import Courses from './Page/Courses'
import Reviews from './Page/Reviews'
import Contact from './Page/Contact'
const App = () => {

  // AOS
  useEffect (()=>{
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false
    })
  }, [])
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element = {<About />}></Route>
      <Route path='/courses' element = {<Courses />}></Route>
      <Route path='/reviews' element = {<Reviews />}></Route>
      <Route path='/contact' element = {<Contact />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App