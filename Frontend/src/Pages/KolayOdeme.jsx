import React,{ useState } from 'react'
import BlogSection from '../Components/BlogSection'
import RoadSimulation from '../Components/RoadSimulation'
import ContactForm2 from '../Components/ContactForm2'
import Background from '../Components/Background'
import Payment from "../panelPages/Payment"
import "../Styles/PaymentForm.scss"

const KolayOdeme = () => {
  const [isActive, setIsActive] = useState(false); 
  const [isActive2, setIsActive2] = useState(false); 

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleClick2 = () => {
    setIsActive2((prev) => !prev);
  };

  return (
    <main className='main-div-odeme'>
      <div className='div-odeme'>
        <Payment/>
        <div className='div-odemetext'>
          <h3>Değerli Müsterilerimiz</h3>
          <p><span>www.mptasitmatik.com</span> web sitemizden ve MPMatik akıllı uygulamamız üzerinden Mevlana Petrol Ltd. Şti. adına kredi kartı ile yapacağınız tüm ödemeler %100 güvenli olup, en son güvenlik standartlarına uygun bir şekilde gerçekleştirilmektedir. Sipay ödeme aracılığı ile SSL şifreleme teknolojisi ve uluslararası ödeme güvenliği protokolleri ile bilgilerinizi koruma altına alıyor, güvenliğinizi ön planda tutuyoruz.</p>

          <button  className={`toggle-button ${isActive ? "active" : ""}`}
            onClick={handleClick}>Mevlana Petrol Ltd. Şti Hakkında</button>
            <div className={`content ${isActive ? "visible" : ""}`}>
                <p>Bu paragraf, butona tıklandığında görünür olacak.</p>
            </div>

          <button  className={`toggle-button2 ${isActive2 ? "active" : ""}`}>MPMatik Uygulaması ve Markası</button>
          <div className={`content2 ${isActive2 ? "visible" : ""}`}>
        <p>Bu paragraf, butona tıklandığında görünür olacak.</p>
      </div>


          <p>Bizlere güvenerek yaptığınız her işlem, sizin için olduğu kadar bizim için de büyük bir sorumluluk ve hassasiyet taşımaktadır. Sorularınız veya destek talepleriniz için bizimle her zaman iletişime geçebilirsiniz.</p>
          <span>Saygılarımızla</span>
          <span>Mevlana Petrol Ltd. Şti.</span>
        </div>
      </div>

       <BlogSection />
      <ContactForm2/>
      <Background/> 
      <RoadSimulation/>
    </main>
    

  )
}

export default KolayOdeme