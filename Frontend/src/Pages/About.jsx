import React from 'react'
import BlogSection from '../Components/BlogSection'
import RoadSimulation from '../Components/RoadSimulation'
import ContactForm2 from '../Components/ContactForm2'
import Background from '../Components/Background'
import AboutMain from "../Components/subPageComponents/AboutMain"
import AboutGreenSection from '../Components/subPageComponents/AboutGreenSection'
import Questions from '../Components/subPageComponents/Questions'

const About = () => {
  return (
    <div>
      <AboutMain/>
      <AboutGreenSection/>
      <Questions/>
      <BlogSection/>
      <ContactForm2/>
      <Background/>
      <RoadSimulation/>
    </div>
  )
}

export default About
