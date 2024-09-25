import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../Styles/Header.scss"
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


const Header = () => {
  return (
    <header className="hidden-header">
      <Link to="/">
        <img src="../../Logo/mpmatik-siyah.png" alt="Logo" width="100" height="50" />
      </Link>
      <nav>
        <Link to="/"><FaPhoneSquareAlt/></Link>
        <Link to="/"><FaWhatsapp/></Link>
        <a
          href="https://www.instagram.com/mptasitmatik/" target="_blank" rel="noopener noreferrer"> <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/mptasitmatik/" target="_blank" rel="noopener noreferrer"> <FaFacebook />
        </a>
        <a
          href="https://www.twitter.com/mptasitmatik/" target="_blank" rel="noopener noreferrer"> <FaXTwitter />
        </a>
        <a
          href="https://www.youtube.com/@MPtasitmatik" target="_blank" rel="noopener noreferrer"> <FaYoutube />
        </a>
      </nav>
      <div>
      <Link to="/hemen-basvur" className="button1">Hemen Başvur</Link>
      <Link to="/kolay-odeme" className="button2">Kolay Ödeme</Link>
      </div>
    </header>
  );
};

export default Header;
