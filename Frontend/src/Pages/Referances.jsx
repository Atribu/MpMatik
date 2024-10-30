import React from 'react'
import BlogSection from '../Components/BlogSection'
import RoadSimulation from '../Components/RoadSimulation'
import ContactForm2 from '../Components/ContactForm2'
import Background from '../Components/Background'
import GrayMatik from '../Components/subPageComponents/GrayMatik'
import ReferancesTextSection from '../Components/subPageComponents/ReferancesTextSection'
import { Helmet } from 'react-helmet'

const Referances = () => {
  return (
   <>
   <Helmet>
   <title>BP Taşıtmatik Referanslar - BP Taşıtmatik</title>
   <meta name="description" content="BP Taşıtmatik sistemini tercih eden referanslar arasında sizde yerinizi alın! Firmanıza özel komisyon oranlarıyla hemen BP Taşıtmatik'e geç, kampanyalı" />
   </Helmet>

    <div>
      <GrayMatik/>
      <ReferancesTextSection/>
      <BlogSection/>
      <ContactForm2/>
      <Background/>
      <RoadSimulation/>

    </div></>
  )
}

export default Referances
