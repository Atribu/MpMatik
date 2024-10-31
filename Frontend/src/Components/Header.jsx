import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.scss"
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import logo from "../../public/Logo/mpmatik-siyah.png";


const Header = () => {
  return (
    <header className="hidden-header">
      <Link to="/">
        <img src={logo} alt="Logo" width="80" height="40" />
      </Link>
      <nav>
        <Link to="/"><FaPhoneSquareAlt size={22}/></Link>
        <Link to="/"><FaWhatsapp size={22}/></Link>
        <a
          href="https://www.instagram.com/mptasitmatik/" target="_blank" rel="noopener noreferrer"> <FaInstagram size={22}/>
        </a>
        <a
          href="https://www.facebook.com/mptasitmatik/" target="_blank" rel="noopener noreferrer"> <FaFacebook size={22}/>
        </a>
        <a
          href="https://www.twitter.com/mptasitmatik/" target="_blank" rel="noopener noreferrer"> <FaXTwitter size={22}/>
        </a>
        <a
          href="https://www.youtube.com/@MPtasitmatik" target="_blank" rel="noopener noreferrer"> <FaYoutube size={22}/>
        </a>
      </nav>
      <div className="">
      <Link to="/hemen-basvur" className="button1">Hemen Başvur</Link>
      <Link to="/kolay-odeme" className="button2">Kolay Ödeme</Link>
      </div>
    </header>
  );
};

export default Header;
