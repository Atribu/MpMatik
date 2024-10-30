import React from 'react'
import BlogSection from '../Components/BlogSection'
import RoadSimulation from '../Components/RoadSimulation'
import ContactForm2 from '../Components/ContactForm2'
import Background from '../Components/Background'
import ContactMain from '../Components/subPageComponents/ContactMain'
import ContactGreen from '../Components/subPageComponents/ContactGreen'
import SSS from '../Components/subPageComponents/SSS'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <>
    <Helmet>
    <title>BP Taşıtmatik İletişim - BP Taşıtmatik</title>
    <meta name="description" content="BP Taşıtmatik sistemiyle; araçlarınızın yakıt giderlerinden tasarruf etmek BP kalitesi ile tanışmak ve size özel oranlardan faydalanmak için formu doldurmanız" />
    </Helmet>
    <div>
      <ContactMain/>
      <ContactGreen/>
      <SSS/>
       <BlogSection/>
      <ContactForm2/>
      <Background/>
      <RoadSimulation/>
    </div>
    </>
  )
}

export default Contact
