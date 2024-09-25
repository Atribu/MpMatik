import React from 'react'
import MainCarousel from "../Components/MainCarousel"
import Limitation from "../Components/Limitation"
import Satis1 from '../Components/Satis1'
import Satis2 from '../Components/Satis2'
import BlogSection from '../Components/BlogSection'
import RoadSimulation from '../Components/RoadSimulation'
import ContactForm2 from '../Components/ContactForm2'
import Background from '../Components/Background'
import EBülten from '../Components/EBülten'

const textSatis2=["Yılların verdiği tecrübe, birikimli ve deneyimli kadrosu ile Mevlana Petrol, katıldığı ihaleli akaryakıt satışı ile tüm resmi kurum ve kuruluşlara, özel sektöre Taşıtmatik veya toptan akaryakıt satışı yaparak bu anlamda da pratik çözümler üretip, proje destek hizmetleri sağlamaktadır.",
  "Hem toptan hem de Taşıtmatik satışlarını beraber yaparak, ihale kapsamında çoklu hizmetler sunabilmekte. Esnek ödeme koşulları çerçevesinde optimal alış veriş imkanları ortaya koyabilmektedir.",
  "Bu sayede büyük montanlı alım yapmak isteyen özel sektör kuruluşları ile başta Antalya olmak üzere Tüm Türkiye’de ki kamu kuruluşlarının, akaryakıt ihtiyaçlarını karşılamak amaçlı akaryakıt ihalelerine katılım sağlamakta ve alınan ihaleler başarılı bir şekilde sonuçlandırılmaktadır."
];
const buttonSatis2="DAHA FAZLA BİLGİ AL";

const Homepage = () => {
  return (
    <div>
      <MainCarousel/>
      <Limitation/>
      <Satis1/>
      <Satis2 texts={textSatis2} button={buttonSatis2}/>
      <BlogSection />
      <ContactForm2/>
      <Background/>
      <EBülten/>
      <RoadSimulation/>
    </div>
  )
}

export default Homepage
