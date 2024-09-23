import React from 'react'
import MainCarousel from "../Components/MainCarousel"
import Limitation from "../Components/Limitation"
import Satis1 from '../Components/Satis1'
import Satis2 from '../Components/Satis2'
import BlogSection from '../Components/BlogSection'
import RoadSimulation from '../Components/RoadSimulation'
import ContactForm2 from '../Components/ContactForm2'
import Background from '../Components/Background'


const Homepage = () => {
  return (
    <div>
      <MainCarousel/>
      <Limitation/>
      <Satis1/>
      <Satis2/>
      <BlogSection/>
      <ContactForm2/>
      <Background/>
      <RoadSimulation/>
    </div>
  )
}

export default Homepage
