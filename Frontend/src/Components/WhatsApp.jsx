import React from 'react';
import { SiWhatsapp } from "react-icons/si";
import { HiMiniCreditCard } from "react-icons/hi2";
import "../Styles/WhatsApp.scss";
import { Link } from 'react-router-dom';

const Whatsapp = () => {
  const phoneNumber = '+90 530 918 20 80';
  const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}`;

  const openWhatsApp = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 778) {
      window.location.href = `whatsapp://send?phone=${phoneNumber}`;
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className='whatsapp-container'>
      <div className='whatsapp-button-container'>
        <button className="ecenin-butonu" onClick={openWhatsApp}>
          <SiWhatsapp size={30} className='whatsapp-icon' />
        </button>
      </div>

      <div className='card-button-container'>
        <Link className="ecenin-butonu" to="/kolay-odeme">
          <HiMiniCreditCard size={30} className='whatsapp-icon' />
        </Link>
      </div>

      <div className='basvur-button-container'>
        <Link className="ecenin-butonu" to="/">
          <span>Hemen <br /> Başvur</span>
        </Link>
      </div>
    </div>
  );
}

export default Whatsapp;
