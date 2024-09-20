import React from 'react'
import Header from "./Components/Header.jsx"

import Header1 from './Components/Header1.jsx'
import Limitation from './Components/Limitation.jsx'
import MainCarousel from './Components/MainCarousel.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <Header1 />
      <MainCarousel/>
      <Limitation/>
      <Footer />

    </div>
  )
}

export default App