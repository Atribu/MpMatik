/* eslint-disable no-unused-vars */
import React from "react";
import "./Styles/Main.scss";
import Header from "./Components/Header.jsx";
import Header1 from "./Components/Header1.jsx";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Homepage from "./Pages/Homepage.jsx";
import Panel from "./Pages/Panel.jsx";
import BlogDuzenlePage from "./Pages/BlogDuzenlePage.jsx";
import BlogListele from "./Pages/BlogListele.jsx";
import YeniBlogEkle from "./Pages/YeniBlogEkle.jsx";
import Footer from "./Components/Footer.jsx";
import Login from "./Pages/Login.jsx";
import { useSelector } from "react-redux";
import Register from "./Pages/Register.jsx";
import ToptanAkaryakit from "./Pages/ToptanAkaryakit.jsx";
import IhaleliAkaryakit from "./Pages/IhaleliAkaryakit.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Referances from "./Pages/Referances.jsx";
import KullanimKosullari from "./Pages/KullanimKosullari.jsx";
import GizlilikPolitikasi from "./Pages/GizlilikPolitikasi.jsx";
import BPTasitmatikSikSorulanSorular from "./blogPages/BPTasitmatikSikSorulanSorular.jsx";
import TasitTanimaSistemi from "./blogPages/TasitTanimaSistemi.jsx";
import BpTasitmatikMusteriHizmetleri from "./blogPages/BpTasitmatikMusteriHizmetleri.jsx";
import BpTasitmatikAvantajlariNelerdir from "./blogPages/BpTasitmatikAvantajlariNelerdir.jsx";
import BpTasitmatikHizmetiVerenIstasyonlar from "./blogPages/BpTasitmatikHizmetiVerenIstasyonlar.jsx";
import UlusalTasitTanimaSistemiNedir from "./blogPages/UlusalTasitTanimaSistemiNedir.jsx";
import HemenBasvur from "./Pages/HemenBasvur.jsx";
import KolayOdeme from "./Pages/KolayOdeme.jsx";
import NasilCalısır from "./Pages/NasilCalısır.jsx";
import Page404 from "./Pages/Page404.jsx";
import BlogMusteriHizmetleri from "./Pages/BlogMusteriHizmetleri.jsx";
import BlogDetay from "./Pages/BlogDetay";
import BlogDuzenle from "./Pages/BlogDuzenle.jsx";
import BlogDetails from "./Pages/BlogDetails.jsx";
import Users from "./Pages/Users.jsx";
import SayfaEkle from "./panelPages/SayfaEkle.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Odeme from "./Pages/Odeme.jsx";
import Payment from "./panelPages/Payment.jsx";
import Formlar from "./Pages/Formlar.jsx";
import BasicFormlar from "./Pages/BasicFormlar.jsx";
import SiteBloglar from "./Pages/SiteBloglar.jsx";
import FormDetay from "./Pages/FormDetay.jsx";
import BasicFormDetay from "./Pages/BasicFormDetay.jsx";
import NewPage from "./panelPages/NewPage.jsx";
import ProfilEditor from "./Pages/ProfilEditor.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import Whatsapp from "./Components/WhatsApp.jsx";
import CookiePopup from "./Components/CookiePopup.jsx";

const App = () => {
  const { activeUser } = useSelector((state) => state.user);

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
          {activeUser ? (
            <Header1 />
          ) : (
            <>
              <Header />
              <Header1 />
            </>
          )}
          <main>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/blog" element={<SiteBloglar />} />
              <Route path="/toptan-akaryakit" element={<ToptanAkaryakit />} />
              <Route path="/ihaleli-akaryakit" element={<IhaleliAkaryakit />} />
              <Route path="/nasil-calisir" element={<NasilCalısır />} />
              <Route path="/*" element={<Page404 />} />
              <Route path="/odeme" element={<Payment />} />
              <Route path="/hakkimizda" element={<About />} />
              <Route path="/hemen-basvur" element={<HemenBasvur />} />
              {/* <Route path="/kolay-odeme" element={<Payment />} /> */}
              <Route path="/kolay-odeme" element={<KolayOdeme />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="/referanslar" element={<Referances />} />
              <Route
                path="/gizlilik-politikasi"
                element={<GizlilikPolitikasi />}
              />
              <Route
                path="/kullanim-kosullari"
                element={<KullanimKosullari />}
              />
              {/* <Route path='/kayit-ol' element={<Register />} /> */}
              <Route path="/giris" element={<Login />} />

              {/* <Route path="/bp-tasitmatik-musteri-hizmetleri" element={<BlogMusteriHizmetleri/>}/> */}
              <Route
                path="/bp-tasitmatik-sik-sorulan-sorular"
                element={<BPTasitmatikSikSorulanSorular />}
              />
              <Route
                path="/tasit-tanima-sistemi"
                element={<TasitTanimaSistemi />}
              />
              <Route
                path="/bp-tasitmatik-musteri-hizmetleri"
                element={<BpTasitmatikMusteriHizmetleri />}
              />
              <Route
                path="/bp-tasitmatik-avantajlari-nelerdir?"
                element={<BpTasitmatikAvantajlariNelerdir />}
              />
              <Route
                path="/bp-tasitmatik-hizmeti-veren-istasyonlar"
                element={<BpTasitmatikHizmetiVerenIstasyonlar />}
              />
              <Route
                path="/ulusal-tasit-tanima-sistemi-nedir"
                element={<UlusalTasitTanimaSistemiNedir />}
              />
              <Route path="/panel" element={<Panel />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="yeni-blog-ekle" element={<YeniBlogEkle />} />
                <Route path="bloglar/duzenle" element={<BlogDuzenlePage />} />
                <Route path="BlogListele" element={<BlogListele />} />
                <Route path="users" element={<Users />} />
                <Route
                  path="bloglar/blog-duzenle/:url"
                  element={<BlogDuzenle />}
                />
                <Route path="bloglar/:url" element={<BlogDetay />} />
                <Route path="yeni-sayfa-ekle" element={<SayfaEkle />} />
                <Route path="formlar" element={<Formlar />} />
                <Route path="formlar/:id" element={<FormDetay />} />
                <Route path="basic-formlar" element={<BasicFormlar />} />
                <Route path="basic-formlar/:id" element={<BasicFormDetay />} />
                <Route path="profil-duzenle/:id" element={<ProfilEditor />} />
                <Route path="users/:id" element={<ProfilEditor />} />
              </Route>

              {<Route path="/blog/:url" element={<BlogDetails />} />}
              <Route path="/page/:url" element={<NewPage />} />
            </Routes>
          </main>
          {activeUser ? (
            ""
          ) : (
            <>
              <CookiePopup />
              <Whatsapp />
              <Footer />
            </>
          )}
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
};

export default App;
