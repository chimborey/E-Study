import React from 'react'
import Hero from '../Components/Hero'
import AboutUS from '../Components/AboutUS'
import OurCourses from '../Components/OurCourses'
import OurReviews from '../Components/OurReviews'
import ContactUs from '../Components/ContactUs'

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutUS />
      <OurCourses />
      <OurReviews />
      <ContactUs />
    </main>
  )
}

export default Home