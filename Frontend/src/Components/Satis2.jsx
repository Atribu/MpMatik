import React, { useState,useEffect }  from 'react'
import "../Styles/Satis2.scss"

const Satis2 = () => {
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
        <button className='buttonMore2'><text>DAHA FAZLA BİLGİ AL</text></button>
    </div>

    <div className='subContainer2'>
 
</div>

  </div>
</section>
  )
}

export default Satis2
