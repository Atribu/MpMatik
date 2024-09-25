import React from 'react'
import "../../Styles/AboutMain.scss"
import BasicContactForm from "../../Components/subPageComponents/BasicContactForm"

const GrayMatik = () => {
  return (
    <section className='sectionWhite'>
      <div className='divcontainerWhite'>
        <div className='divWhiteHalf'>
            <h2>HAKKIMIZDA</h2>
            <p>Türkiye’nin önde gelen akaryakıt ve petrol ürünleri tedarikçilerinden biri olarak sizlere hizmet vermekten gurur duyuyoruz. BP Taşıtmatik ürünleri konusundaki uzmanlığımız ve taahhüdümüz, sürücülerin akaryakıt deneyimlerini daha güvenli, verimli ve etkili hale getirmelerine yardımcı olmak için tasarlanmıştır.</p>
           <div className='social media'>

           </div>
        </div>
        <div className='divHalfForm'>
          <BasicContactForm/>
        </div>
      </div>
    </section>
  )
}

export default GrayMatik
