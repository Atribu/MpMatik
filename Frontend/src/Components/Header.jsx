import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="" alt="Logo" />
      </Link>
      <nav>
        <Link to="/"><FaPhoneSquareAlt/></Link>
      </nav>
    </header>
  );
};

export default Header;
