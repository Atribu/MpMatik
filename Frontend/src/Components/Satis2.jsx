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

const Satis2 = ({texts, button}) => {
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
        <span>İhaleli Akaryakıt Satışı</span>
        {texts.map((text, index) => (
        <p key={index}>{text}</p>  
      ))}
        <button className='buttonMore2'><a href='/ihaleli-akaryakit'>{button}</a></button>
    </div>

   <div className='mainDivNew slide-upSatis2'>
   {/* <div className='circleDiv  '> */}
        <div className='ic'></div>
        <div className='ic2'></div>
        <div className='ic3'></div>
        <div className='ic4'></div>
        <div className='ic5'></div>
        <div className='ic6'></div>
        <div className='dis'></div>
        <div className='dis1'></div>
        <div className='dis2'></div>
        <div className='dis3'></div>
        <div className='dis4'></div>
        <div className='dis5'></div>
        <div className='dis6'></div>
        <div className='dis7'></div>
        <div className='dis8'></div>
        <div className='dis9'></div>
        <div className='dis10'></div>
        <div className='dis11'></div>
        <div className='dis12'></div>
        <div className='dis13'></div>
        <div className='dis14'></div>
        <div className='dis15'></div>
        <div className='dis16'></div>
        <div className='dis17'></div>

      {/* </div> */}
   </div>

  </div>
</section>
  )
}

export default Satis2
