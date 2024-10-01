import React from 'react';
import { SiWhatsapp } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import "../Styles/WhatsApp.scss"
import { HiMiniCreditCard } from "react-icons/hi2";

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
          <SiWhatsapp size={30} className='whatsapp-icon'/>
        </button>
      </div>

      <div className='card-button-container'>
        <button className="ecenin-butonu" onClick={openWhatsApp}>
          <HiMiniCreditCard size={30} className='whatsapp-icon'/>
        </button>
      </div>

      <div className='basvur-button-container'>
        <button className="ecenin-butonu" onClick={openWhatsApp}>
          <span>Hemen <br></br> Başvur</span>
        </button>
      </div>
      
    </div>
  );
}

export default Whatsapp;
