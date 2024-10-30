import React,{ useState } from 'react'
import BlogSection from '../Components/BlogSection'
import RoadSimulation from '../Components/RoadSimulation'
import ContactForm2 from '../Components/ContactForm2'
import Background from '../Components/Background'
import Payment from "../panelPages/Payment"
import "../Styles/PaymentForm.scss"
import { Helmet } from 'react-helmet'

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
    <>
    <Helmet>
    <title>Kolay Ödeme #3 - BP Taşıtmatik</title>
    <meta name="description" content="www.mptasitmatik.com web sitemizden ve MPMatik akıllı uygulamamız üzerinden Mevlana Petrol Ltd. Şti. adına kredi kartı ile yapacağınız tüm ödemeler %100" />
    </Helmet>

    <main className='main-div-odeme'>
      <div className='div-odeme'>
        <Payment/>
        <div className='div-odemetext'>
          <h3>Değerli Müsterilerimiz</h3>
          <p><span>www.mptasitmatik.com</span> web sitemizden ve MPMatik akıllı uygulamamız üzerinden Mevlana Petrol Ltd. Şti. adına kredi kartı ile yapacağınız tüm ödemeler %100 güvenli olup, en son güvenlik standartlarına uygun bir şekilde gerçekleştirilmektedir. Sipay ödeme aracılığı ile SSL şifreleme teknolojisi ve uluslararası ödeme güvenliği protokolleri ile bilgilerinizi koruma altına alıyor, güvenliğinizi ön planda tutuyoruz.</p>

          <button  className={`toggle-button ${isActive ? "active" : ""}`}
            onClick={handleClick}>Mevlana Petrol Ltd. Şti Hakkında</button>
            <div className={`contentOdeme ${isActive ? "visible" : ""}`}>
                <p>1975 yılından bu yana akaryakıt sektöründe faaliyet gösteren Mevlana Petrol Ltd. Şti., müşteri memnuniyetini ve güvenliği ilke edinmiş köklü bir şirkettir. Sektördeki 40 yılı aşkın tecrübemizle, müşterilerimize her zaman en iyi hizmeti sunmaya devam ediyoruz. Güvenilir altyapımız ve güçlü ticari geçmişimiz ile daima yanınızdayız.</p>
            </div>

          <button  className={`toggle-button2 ${isActive2 ? "active" : ""}`} onClick={handleClick2}>MPMatik Uygulaması ve Markası</button>
          <div className={`contentOdeme2 ${isActive2 ? "visible" : ""}`}>
        <p>MPMatik, Mevlana Petrol Ltd. Şti.’nin tescilli markası olup, Türkiye genelinde birçok müşterimize sorunsuz ve kaliteli akaryakıt hizmeti sunmaktadır. Gelişmiş teknolojik altyapımız sayesinde, MPMatik uygulamamız üzerinden yapacağınız tüm işlemler hızlı, kolay ve güvenli bir şekilde gerçekleştirilir.</p>
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
    </main></>
    

  )
}

export default KolayOdeme