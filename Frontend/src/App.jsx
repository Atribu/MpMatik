import React from 'react'
import Header from "./Components/Header.jsx"
import MainCarousel from "./Components/MainCarousel.jsx"
import ContactForm from './Components/ContactForm.jsx'
import Limitation from './Components/Limitation.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <MainCarousel/>
      <Limitation/>
    </div>
  )
}

export default App