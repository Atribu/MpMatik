import React from 'react'
import MainBackground from '../Components/subPageComponents/MainBackground'
import BlogSection from '../Components/BlogSection'
import RoadSimulation from '../Components/RoadSimulation'
import ContactForm2 from '../Components/ContactForm2'
import Background from '../Components/Background'
import EBülten from '../Components/EBülten'

const NasilCalısır = () => {
  return (
    <div>
      <MainBackground header="NASIL ÇALIŞIR" img="images/nasil-calisir-kapak.jpg"/>
      <BlogSection/>
      <ContactForm2/>
      <Background/>
      <EBülten/>
      <RoadSimulation/>
    </div>
  )
}

export default NasilCalısır
