import React from 'react'
import "../../Styles/GrayMatik.scss"
import image from "../../../public/images/bp-tasitmatik-referanslar.png"
import BasicContactForm from "../../Components/subPageComponents/BasicContactForm"

const GrayMatik = () => {
  return (
    <section className='sectionGray'>
      <div className='divcontainer'>
        <div className='divGrayHalf'>
            <h2>BP TAŞITMATİK</h2>
            <p>BP Taşıtmatik sistemini tercih eden referanslar arasında sizde yerinizi alın! Firmanıza özel komisyon oranlarıyla hemen BP Taşıtmatik’e geç, kampanyalı fiyatlardan faydalan.</p>
            <img className="imageRes" src={image} alt='referances' width={image.width} height={image.height} />
        </div>
        <div className='divHalfForm'>
          <BasicContactForm/>
        </div>
      </div>
    </section>
  )
}

export default GrayMatik
