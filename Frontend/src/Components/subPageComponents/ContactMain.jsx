import React from 'react'
import "../../Styles/ContactMain.scss"
import image from "../../../public/images/kurumsal-basvuru.png"
import BasicContactForm from "../../Components/subPageComponents/BasicContactForm"
import { FiPhoneCall } from "react-icons/fi";
import { LiaWhatsapp } from "react-icons/lia";

const ContactMain = () => {
    const phoneNumber = '+90 530 918 20 80';
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
  
    const openWhatsApp = () => {
      const phoneNumber = "+90 530 918 20 80"; 
      window.location.href=`whatsapp://send?phone=${phoneNumber}`;
    };

  return (
    <section className='sectionContact'>
      <div className='divContact'>
        <div className='divHalfContact'>
            <h2>BP TAŞITMATİK</h2>
            <p>BP Taşıtmatik sistemini tercih eden referanslar arasında sizde yerinizi alın! Firmanıza özel komisyon oranlarıyla hemen BP Taşıtmatik’e geç, kampanyalı fiyatlardan faydalan.</p>
            <img  src={image} alt='referances' width={300} height={118} />

            <div className='callbuttons-div'>
                <button onClick={openWhatsApp} className='buttonWhatsapp'><LiaWhatsapp size={25}/> +90 530 918 20 80</button>
                <button className='buttonPhone'><a href='tel:+90 530 918 20 80'><FiPhoneCall size={21}/> +90 530 918 20 80</a></button>
            </div>
        </div>

        <div className='divHalfForm'>
          <BasicContactForm/>
        </div>
      </div>
    </section>
  )
}

export default ContactMain
