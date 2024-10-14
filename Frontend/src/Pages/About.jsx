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
        <title>Mevlana Petrol | Hakkımızda</title>
        <meta name="description" content="Mptaşıtmatik olarak, Araç taşıt tanıma sistemlerinnde öncü bir kuruluşuz. Misyonumuz, müşterilerimize en kaliteli hizmetleri sunarak beklentilerini aşmaktır. Detaylar için web sitemizi ziyaret edin." />
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
