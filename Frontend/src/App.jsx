import React from 'react'
import "./Styles/Main.scss"
import Header from "./Components/Header.jsx"
import Header1 from './Components/Header1.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage.jsx'
import Panel from './Pages/Panel.jsx'
import BlogDuzenlePage from './Pages/BlogDuzenlePage.jsx'
import Bloglar from './Pages/Bloglar.jsx'
import YeniBlogEkle from './Pages/YeniBlogEkle.jsx'
import Footer from './Components/Footer.jsx'
import Login from './Pages/Login.jsx'
import { useSelector } from 'react-redux'
import Register from './Pages/Register.jsx'
import ToptanAkaryakit from './Pages/ToptanAkaryakit.jsx'
import IhaleliAkaryakit from './Pages/IhaleliAkaryakit.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Referances from './Pages/Referances.jsx'
import KullanimKosullari from './Pages/KullanimKosullari.jsx'
import GizlilikPolitikasi from './Pages/GizlilikPolitikasi.jsx'
import BpTasitmatikNedir from './blogPages/BpTasitmatikNedir.jsx'
import BpTasitmatikNasilCalisir from './blogPages/BpTasitmatikNasilCalisir.jsx'
import BpTasitmatikMusteriHizmetleri from './blogPages/BpTasitmatikMusteriHizmetleri.jsx'
import BpTasitmatikAvantajlariNelerdir from './blogPages/BpTasitmatikAvantajlariNelerdir.jsx'
import BpTasitmatikHizmetiVerenIstasyonlar from './blogPages/BpTasitmatikHizmetiVerenIstasyonlar.jsx'
import TasitAkaryakitTanimaSistemiNedir from './blogPages/TasitAkaryakitTanimaSistemiNedir.jsx'
import HemenBasvur from './Pages/HemenBasvur.jsx'
import KolayOdeme from './Pages/KolayOdeme.jsx'
import NasilCalısır from './Pages/NasilCalısır.jsx'
import Page404 from './Pages/Page404.jsx'
import WhatsApp from './Components/WhatsApp.jsx'
import { FaZ } from 'react-icons/fa6'
import BlogMusteriHizmetleri from './Pages/BlogMusteriHizmetleri.jsx'
import BlogDetay from "./Pages/BlogDetay"
import BlogDuzenle from './Pages/BlogDuzenle.jsx'
import BlogDetails from './Pages/BlogDetails.jsx'
import Users from './Pages/Users.jsx'

const App = () => {
      const { activeUser } = useSelector((state) => state.user);
  return (
   <>
      <BrowserRouter>
            {
                  activeUser ? (
                        <Header1 />
                  ) : (
                        <>
                         <Header />
                         <Header1 />
                        </>
                  )
            }
          <main>
                <Routes>
                      <Route path="/" element={<Homepage />} />
                      <Route path="/toptan-akaryakit" element={<ToptanAkaryakit />} />
                      <Route path="/ihaleli-akaryakit" element={<IhaleliAkaryakit />} />
                      <Route path='/nasil-calisir' element={<NasilCalısır/>}/>
                      <Route path="/*" element={<Page404 />} />
                      <Route path="/hakkimizda" element={<About />} />
                      <Route path="/hemen-basvur" element={<HemenBasvur />} />
                      <Route path="/kolay-odeme" element={<KolayOdeme />} />
                      <Route path="/iletisim" element={<Contact />} />
                      <Route path="/referanslar" element={<Referances />} />
                      <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
                      <Route path="/kullanim-kosullari" element={<KullanimKosullari />} />
                      <Route path='/kayit-ol' element={<Register />} />
                      <Route path="/giris" element={<Login />} />
                      {/* <Route path="/bp-tasitmatik-musteri-hizmetleri" element={<BlogMusteriHizmetleri/>}/>
                                    <Route path="/bp-tasitmatik-nedir?" element={<BpTasitmatikNedir/>} />
                                    <Route path="/bp-tasitmatik-nasıl-calisir?" element={<BpTasitmatikNasilCalisir/>} />
                                    <Route path="/bp-tasitmatik-musteri-hizmetleri" element={<BpTasitmatikMusteriHizmetleri/>} />
                                    <Route path="/bp-tasitmatik-avantajlari-nelerdir?" element={<BpTasitmatikAvantajlariNelerdir/>} />
                                    <Route path="/bp-tasitmatik-hizmeti-veren-istasyonlar" element={<BpTasitmatikHizmetiVerenIstasyonlar/>} />
                                    <Route path="/tasit-akaryakit-tanima-sistemi-nedir?" element={<TasitAkaryakitTanimaSistemiNedir/>} />  */}
                      <Route path="/panel" element={<Panel />}> 
                                    <Route path="yeni-blog-ekle" element={<YeniBlogEkle />} />
                                    <Route path="bloglar/duzenle" element={<BlogDuzenlePage />} />
                                    <Route path="bloglar" element={<Bloglar />} />
                                    <Route path="users" element={<Users />} />
                                    <Route path="bloglar/blog-duzenle/:url" element={<BlogDuzenle />} />
                                    <Route path="bloglar/:url" element={<BlogDetay/>} />

                      </Route>
                      <Route path='/:url' element={<BlogDetails/>}/>
                </Routes>
          </main>
          {
            activeUser ? (
                  ""
            ) : (
                  <>
                  
                  <Footer />
                  </>
                  
            )
            
          }
          
          
      </BrowserRouter>
   </>

  )
}

export default App