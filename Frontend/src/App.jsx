/* eslint-disable no-unused-vars */
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
import BPTasitmatikSikSorulanSorular from './blogPages/BPTasitmatikSikSorulanSorular.jsx'
import TasitTanimaSistemi from './blogPages/TasitTanimaSistemi.jsx'
import BpTasitmatikMusteriHizmetleri from './blogPages/BpTasitmatikMusteriHizmetleri.jsx'
import BpTasitmatikAvantajlariNelerdir from './blogPages/BpTasitmatikAvantajlariNelerdir.jsx'
import BpTasitmatikHizmetiVerenIstasyonlar from './blogPages/BpTasitmatikHizmetiVerenIstasyonlar.jsx'
import UlusalTasitTanimaSistemiNedir from './blogPages/UlusalTasitTanimaSistemiNedir.jsx'
import HemenBasvur from './Pages/HemenBasvur.jsx'
import KolayOdeme from './Pages/KolayOdeme.jsx'
import NasilCalısır from './Pages/NasilCalısır.jsx'
import Page404 from './Pages/Page404.jsx'
import BlogMusteriHizmetleri from './Pages/BlogMusteriHizmetleri.jsx'
import BlogDetay from "./Pages/BlogDetay"
import BlogDuzenle from './Pages/BlogDuzenle.jsx'
import BlogDetails from './Pages/BlogDetails.jsx'
import Users from './Pages/Users.jsx'
import SayfaEkle from './panelPages/SayfaEkle.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx';
import Odeme from './Pages/Odeme.jsx'
import Payment from './panelPages/Payment.jsx'


import Formlar from './Pages/Formlar.jsx'
import BasicFormlar from './Pages/BasicFormlar.jsx'



const App = () => {
      const { activeUser } = useSelector((state) => state.user);
      const handlePaymentSubmit = async (paymentData) => {
            try {
              const response = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentData),
              });
        
              const result = await response.json();
              if (result.success) {
                alert('Ödeme başarılı!');
              } else {
                alert('Ödeme başarısız: ' + result.message);
              }
            } catch (error) {
                  if (error.response) {
                    // Sunucu tarafı hata yanıtı
                    console.error('Ödeme İşleminde Hata:', error.response.data);
                    res.status(500).json({
                      success: false,
                      message: error.response.data.status_description || 'Ödeme işlemi başarısız.',
                    });
                  } else if (error.request) {
                    // İstek yapıldı ama yanıt alınamadı
                    console.error('Ödeme İşleminde Hata (istek yapıldı ama yanıt alınamadı):', error.request);
                    res.status(500).json({
                      success: false,
                      message: 'Ödeme işlemi sırasında yanıt alınamadı.',
                    });
                  } else {
                    // Başka bir hata
                    console.error('Ödeme İşleminde Hata:', error.message);
                    res.status(500).json({ success: false, message: 'Ödeme işlemi başarısız.' });
                  }
                }
                
          };
      
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
          <ScrollToTop /> {/* ScrollToTop burada ekleniyor */}
                <Routes>
                      <Route path="/" element={<Homepage />} />
                      <Route path="/blogs" element={<SiteBloglar />} />
                      <Route path="/toptan-akaryakit" element={<ToptanAkaryakit />} />
                      <Route path="/ihaleli-akaryakit" element={<IhaleliAkaryakit />} />
                      <Route path='/nasil-calisir' element={<NasilCalısır/>}/>
                      <Route path="/*" element={<Page404 />} />
                      {/* <Route path="/odeme" element={<Payment onSubmit={handlePaymentSubmit}/>} /> */}
                      <Route path="/hakkimizda" element={<About />} />
                      <Route path="/hemen-basvur" element={<HemenBasvur />} />
                      <Route path="/kolay-odeme" element={<KolayOdeme />} />
                      <Route path="/iletisim" element={<Contact />} />
                      <Route path="/referanslar" element={<Referances />} />
                      <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
                      <Route path="/kullanim-kosullari" element={<KullanimKosullari />} />
                      {/* <Route path='/kayit-ol' element={<Register />} /> */}
                      <Route path="/giris" element={<Login />} />
                      <Route path="/odeme" element={<Odeme />} />
                      {/* <Route path="/bp-tasitmatik-musteri-hizmetleri" element={<BlogMusteriHizmetleri/>}/> */}
                      <Route path="/bp-tasitmatik-sik-sorulan-sorular" element={<BPTasitmatikSikSorulanSorular/>} />
                      <Route path="/tasit-tanima-sistemi" element={<TasitTanimaSistemi/>} />
                      <Route path="/bp-tasitmatik-musteri-hizmetleri" element={<BpTasitmatikMusteriHizmetleri/>} />
                      <Route path="/bp-tasitmatik-avantajlari-nelerdir?" element={<BpTasitmatikAvantajlariNelerdir/>} />
                      <Route path="/bp-tasitmatik-hizmeti-veren-istasyonlar" element={<BpTasitmatikHizmetiVerenIstasyonlar/>} />
                      <Route path="/ulusal-tasit-tanima-sistemi-nedir" element={<UlusalTasitTanimaSistemiNedir/>} /> 
                      <Route path="/panel" element={<Panel />}> 
                                    <Route path="yeni-blog-ekle" element={<YeniBlogEkle />} />
                                    <Route path="bloglar/duzenle" element={<BlogDuzenlePage />} />
                                    <Route path="bloglar" element={<Bloglar />} />
                                    <Route path="users" element={<Users />} />
                                    <Route path="bloglar/blog-duzenle/:url" element={<BlogDuzenle />} />
                                    <Route path="bloglar/:url" element={<BlogDetay/>} />
                                    <Route path="yeni-sayfa-ekle" element={<SayfaEkle />} />

                                    <Route path="formlar" element={<Formlar/>}/>
                                    <Route path="basic-formlar" element={<BasicFormlar/>}/>
                                    

                      </Route>
                      {<Route path='/blog/:url' element={<BlogDetails/>}/>}
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
