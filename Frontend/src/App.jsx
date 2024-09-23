import React from 'react'
import Header from "./Components/Header.jsx"
import Header1 from './Components/Header1.jsx'
import Limitation from './Components/Limitation.jsx'
import MainCarousel from './Components/MainCarousel.jsx'
import Footer from './Components/Footer.jsx'
import Satis1 from "./Components/Satis1.jsx"
import Satis2 from "./Components/Satis2.jsx"
import BlogSection from "./Components/BlogSection.jsx"
import TeklifForm from './Components/TeklifForm.jsx'


const App = () => {
  return (
    <div>
      <Header />
      <Header1 />
      <MainCarousel/>
      <Limitation/>
      <Satis1/>
      <Satis2/>
      <BlogSection />
      <Footer />
      <TeklifForm />
    </div>
  )
}

export default App