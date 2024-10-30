import React from 'react'
import BlogSection from '../Components/BlogSection'
import RoadSimulation from '../Components/RoadSimulation'
import ContactForm2 from '../Components/ContactForm2'
import Background from '../Components/Background'
import AboutMain from "../Components/subPageComponents/AboutMain"
import AboutGreenSection from '../Components/subPageComponents/AboutGreenSection'
import Questions from '../Components/subPageComponents/Questions'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <>
      <Helmet>
        <title>BP Taşıtmatik Hakkımızda - BP Taşıtmatik</title>
        <meta name="description" content="Türkiye'nin önde gelen akaryakıt ve petrol ürünleri tedarikçilerinden biri olarak sizlere hizmet vermekten gurur duyuyoruz. BP Taşıtmatik ürünleri konusundaki" />
        <meta name='keywords' content='Mptaşıtmatik, Hakkımızda, Akaryakıt, Hizmet, Güvenli' />
        <meta name="author" content="Mptaşıtmatik" />
      </Helmet>
      <div>
        <AboutMain/>
        <AboutGreenSection/>
        <Questions/>
        <BlogSection/>
        <ContactForm2/>
        <Background/>
        <RoadSimulation/>
      </div>
    </>
  )
}

export default About
