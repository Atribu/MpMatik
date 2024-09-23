import React from 'react'
import Header from "./Components/Header.jsx"
import Satis1 from './Components/Satis1.jsx'
import Satis2 from './Components/Satis2.jsx'
import Header1 from './Components/Header1.jsx'
import BlogSection from './Components/BlogSection.jsx'
import Limitation from './Components/Limitation.jsx'
import MainCarousel from './Components/MainCarousel.jsx'
import Footer from './Components/Footer.jsx'
import RoadSimulation from './Components/RoadSimulation.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import IhaleliAkaryakit from './Pages/IhaleliAkaryakit.jsx'
import NasilCalısır from './Pages/NasilCalısır.jsx'
import ToptanAkaryakit from './Pages/ToptanAkaryakit.jsx'
import Referances from './Pages/Referances.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'

const App = () => {
  return (
    <>
     <BrowserRouter>
         {/* <Header /> */}
         {/* <Header1/> */}
         <main>
           <Routes>
           <Route path="/" element={<Homepage />} />
               <Route path="/toptan-akaryakit" element={<ToptanAkaryakit />} />
               <Route path="/ihaleli-akaryakit" element={<IhaleliAkaryakit />} />
               <Route path="/nasil-calisir" element={<NasilCalısır />} />
               <Route path="/referanslar" element={<Referances />} />
               <Route path="/hakkimizda" element={<About />} />
               <Route path="/iletisim" element={<Contact />} />
           </Routes>
         </main>
         <Footer />
     </BrowserRouter>
    </>
  )
}

export default App