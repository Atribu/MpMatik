import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Header1.scss";

const Header1 = () => {
  const [isSticky, setIsSticky] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);  
      } else {
        setIsSticky(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky-header ${isSticky ? 'is-sticky' : ''}`}>
      <Link>
        <img 
          src={isSticky ? '/Logo/bp-logo-beyazimsi.png' : '/Logo/bp-logo-kendi.png'} 
          alt='Logo' 
        />        
      </Link>
      <nav>
        <Link to='/'>TOPTAN AKARYAKIT</Link>
        <Link to='/'>İHALELİ AKARYAKIT</Link>
        <Link to='/'>NASIL ÇALIŞIR</Link>
        <Link to='/'>REFERANSLAR</Link>
        <Link to='/'>HAKKIMIZDA</Link>
        <Link to='/'>İLETİŞİM</Link>
      </nav>
    </header>
  );
}

export default Header1;
