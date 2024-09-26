import React from 'react'
import BlogSection from '../Components/BlogSection'
import RoadSimulation from '../Components/RoadSimulation'
import ContactForm2 from '../Components/ContactForm2'
import Background from '../Components/Background'
import ContactMain from '../Components/subPageComponents/ContactMain'
import ContactGreen from '../Components/subPageComponents/ContactGreen'

const Contact = () => {
  return (
    <div>
      <ContactMain/>
      <ContactGreen/>
       <BlogSection/>
      <ContactForm2/>
      <Background/>
      <RoadSimulation/>
    </div>
  )
}

export default Contact
