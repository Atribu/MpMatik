import React from 'react'
import Header from "./Components/Header.jsx"
import Satis1 from './Components/Satis1.jsx'
import Satis2 from './Components/Satis2.jsx'
import Header1 from './Components/Header1.jsx'
import BlogSection from './Components/BlogSection.jsx'
import Limitation from './Components/Limitation.jsx'
import MainCarousel from './Components/MainCarousel.jsx'
import RoadSimulation from './Components/RoadSimulation.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import Panel from './Pages/Panel.jsx'
import BlogDuzenle from './Pages/BlogDuzenle.jsx'
import Bloglar from './Pages/Bloglar.jsx'
import YeniBlogEkle from './Pages/YeniBlogEkle.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
   <>
      <BrowserRouter>
          <Header />
          <Header1 />
          <main>
                <Routes>
                      <Route path="/" element={<Homepage />} />
                      <Route path="/panel" element={<Panel />}>
                            <Route path="bloglar" element={<Bloglar />} />
                            <Route path="yeni-blog-ekle" element={<YeniBlogEkle />} />
                            <Route path="blog-duzenle/:url" element={<BlogDuzenle />} />
                      </Route>
                </Routes>
          </main>
          <Footer />
      </BrowserRouter>
   </>
  )
}

export default App