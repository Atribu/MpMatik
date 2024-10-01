import React from 'react';
import { SiWhatsapp } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import "../Styles/WhatsApp.scss"

const Whatsapp = () => {

  const phoneNumber = '+90 530 918 20 80';
  const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}`;

  const openWhatsApp = () => {
    const phoneNumber = "+90 530 918 20 80"; 
    window.location.href=`whatsapp://send?phone=${phoneNumber}`;
  };

  return (
    <div className='whatsapp-container'>
      <div className='whatsapp-button-container'>
        <button className="ecenin-butonu" onClick={openWhatsApp}>
          <SiWhatsapp size={40} className='whatsapp-icon'/>
        </button>
      </div>
      
      <div className='phone-button-container'>
        <a href="tel:+90 530 918 20 80">
          <FaPhone size={40} className='phone-icon'/>
        </a>
      </div>
    </div>
  );
}

export default Whatsapp;
