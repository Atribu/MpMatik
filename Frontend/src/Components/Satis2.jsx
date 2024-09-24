import React, { useState,useEffect }  from 'react'
import "../Styles/Satis2.scss"

const images = [
    "https://www.mptasitmatik.com/wp-content/uploads/afyon-emniyet.png",
    "https://www.mptasitmatik.com/wp-content/uploads/akdeniz-universitesi.png",
    "https://www.mptasitmatik.com/wp-content/uploads/kepez-belediyesi.png",
    "https://www.mptasitmatik.com/wp-content/uploads/strateji-butce.png",
    "https://www.mptasitmatik.com/wp-content/uploads/bolu-valiligi.png",
    "https://www.mptasitmatik.com/wp-content/uploads/devlet-meydan.png",
    "https://www.mptasitmatik.com/wp-content/uploads/gaziantep-buyuksehir.png",
    "https://www.mptasitmatik.com/wp-content/uploads/elazig-il-ozel-idare.png",
    "https://www.mptasitmatik.com/wp-content/uploads/adana-buyuk-bel.png",
    "https://www.mptasitmatik.com/wp-content/uploads/ilbank-bank.png",
    "https://www.mptasitmatik.com/wp-content/uploads/isparta-bel.png",
    "https://www.mptasitmatik.com/wp-content/uploads/isparta-il-ozel.png",
    "https://www.mptasitmatik.com/wp-content/uploads/turk-cdd.png",
    "https://www.mptasitmatik.com/wp-content/uploads/kemer-belediye.png",
    "https://www.mptasitmatik.com/wp-content/uploads/tarim-orman-bakanligi.png",
    "https://www.mptasitmatik.com/wp-content/uploads/konyaalti-bel.png",
    "https://www.mptasitmatik.com/wp-content/uploads/malatya-belediyesi.png",
    "https://www.mptasitmatik.com/wp-content/uploads/manavgat-bel.png",
    "https://www.mptasitmatik.com/wp-content/uploads/muratpasa-bel.png",
    "https://www.mptasitmatik.com/wp-content/uploads/cesme-belediyesi.png",
    "https://www.mptasitmatik.com/wp-content/uploads/canakkale-ozel-il.png",
    "https://www.mptasitmatik.com/wp-content/uploads/sosyal-guvenlik-kurumu.png",
    "https://www.mptasitmatik.com/wp-content/uploads/aksu-bel.png",
    "https://www.mptasitmatik.com/wp-content/uploads/usak-ozel-il.png",
    
  ];

  const innerImages = [

    "https://www.mptasitmatik.com/wp-content/uploads/muratpasa-bel.png",
    "https://www.mptasitmatik.com/wp-content/uploads/cesme-belediyesi.png",
    "https://www.mptasitmatik.com/wp-content/uploads/canakkale-ozel-il.png",
    "https://www.mptasitmatik.com/wp-content/uploads/sosyal-guvenlik-kurumu.png",
    "https://www.mptasitmatik.com/wp-content/uploads/aksu-bel.png",
    "https://www.mptasitmatik.com/wp-content/uploads/usak-ozel-il.png",
    
  ];

const Satis2 = () => {
    const innerImages = images.slice(6);

    useEffect(() => {
        // kayarak gelme
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        });
    
        // Gözlemlemek istediğiniz elemanları seçin
        const hiddenElements = document.querySelectorAll('.slide-upSatis2');
        hiddenElements.forEach((el) => observer.observe(el));
    
        // Cleanup işlemi: Bileşen kaldırıldığında gözlemlemeyi bırakır
        return () => {
          hiddenElements.forEach((el) => observer.unobserve(el));
        };
      }, []); 

  return (
    <section className='bg-container ' >
    <div className='overlay2'></div>
  <div className='container2 '>
    <div className='subContainerText slide-upSatis2'>
        <h2>İhaleli Akaryakıt Satışı</h2>
        <p >Yılların verdiği tecrübe, birikimli ve deneyimli kadrosu ile Mevlana Petrol, katıldığı ihaleli akaryakıt satışı ile tüm resmi kurum ve kuruluşlara, özel sektöre Taşıtmatik veya toptan akaryakıt satışı yaparak bu anlamda da pratik çözümler üretip, proje destek hizmetleri sağlamaktadır.

Hem toptan hem de Taşıtmatik satışlarını beraber yaparak, ihale kapsamında çoklu hizmetler sunabilmekte. Esnek ödeme koşulları çerçevesinde optimal alış veriş imkanları ortaya koyabilmektedir.

Bu sayede büyük montanlı alım yapmak isteyen özel sektör kuruluşları ile başta Antalya olmak üzere Tüm Türkiye’de ki kamu kuruluşlarının, akaryakıt ihtiyaçlarını karşılamak amaçlı akaryakıt ihalelerine katılım sağlamakta ve alınan ihaleler başarılı bir şekilde sonuçlandırılmaktadır.</p>
        <button className='buttonMore2'><p>DAHA FAZLA BİLGİ AL</p></button>
    </div>

    <div className="big-circle">
      {/* Büyük dairedeki 18 küçük daire */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`ic ic-${index + 1}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}


    </div>

  </div>
</section>
  )
}

export default Satis2
