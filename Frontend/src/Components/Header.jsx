import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../Style/Header.scss"
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
        <Link to="/"><FaInstagram/></Link>
        <Link to="/"><FaFacebook/></Link>
        <Link to="/"><FaXTwitter/></Link>
        <Link to="/"><FaYoutube/></Link>
      </nav>
      <div>
      <Link className="button1">Hemen Başvur</Link>
      <Link className="button2">Kolay Ödeme</Link>
      </div>
    </header>
  );
};

export default Header;
