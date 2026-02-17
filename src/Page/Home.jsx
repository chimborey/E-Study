import React from 'react'
import Hero from '../Components/Hero'
import AboutUS from '../Components/AboutUS'
import ContactUs from '../Components/ContactUs'
import OC from '../Components/OC'

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUS />
      <OurCourses />
      <OC />
      <ContactUs />
    </main>
  )
}

export default Home