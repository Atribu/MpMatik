import React from 'react'
import MainBackground from '../Components/subPageComponents/MainBackground'
import BlogSection from '../Components/BlogSection'
import RoadSimulation from '../Components/RoadSimulation'
import ContactForm2 from '../Components/ContactForm2'
import Background from '../Components/Background'
import EBülten from '../Components/EBülten'
import FlipFlop from '../Components/FlipFlop'
import TasitTanimaSection from '../Components/subPageComponents/TasitTanimaSection'
import { Helmet } from 'react-helmet'

const NasilCalısır = () => {
  return (
   <>
   <Helmet>
   <title>BP Taşıtmatik Nasıl Çalışır? - BP Taşıtmatik</title>
   <meta name="description" content="Taşıtmatik, araçların yakıt alımını otomatik olarak yöneten bir teknolojidir. Araçların plakalarını otomatik tanıyarak ve pompa tanıma özellikleri sayesinde" />
   </Helmet>
   <div>
      <MainBackground header="NASIL ÇALIŞIR" img="images/nasil-calisir-kapak.jpg"/>
      <TasitTanimaSection/>
      <FlipFlop/>
      <BlogSection/>
      <ContactForm2/>
      <Background/>
      <EBülten/>
      <RoadSimulation/>
    </div>
   </>
  )
}

export default NasilCalısır
