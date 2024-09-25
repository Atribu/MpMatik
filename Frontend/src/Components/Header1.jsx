import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Header1.scss";
import { useSelector } from 'react-redux';

const Header1 = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { activeUser } = useSelector((state) => state.user);

  
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
    <header className={`${activeUser ? 'sticky-header-activeuser' : isSticky ? 'is-sticky' : "sticky-header"}`}>
      <Link to="/">
        <img 
          src={activeUser ? "/Logo/dgtlface.jpeg" : isSticky ? '/Logo/bp-logo-beyazimsi.png' : '/Logo/bp-logo-kendi.png'} 
          alt='Logo' 
        />        
      </Link>
      <nav>
        {
          activeUser ? (
             <>
                <Link to='/'>Ana Sayfa</Link>
                <Link to="/panel">Panel</Link>
                <Link to="/panel/profil">{activeUser.name}</Link>
             </>   
          ) : (
              <>
                <Link to='/toptan-akaryakit'>TOPTAN AKARYAKIT</Link>
                <Link to='/ihaleli-akaryakit'>İHALELİ AKARYAKIT</Link>
                <Link to='/nasil-calisir'>NASIL ÇALIŞIR</Link>
                <Link to='/referanslar'>REFERANSLAR</Link>
                <Link to='/hakkimizda'>HAKKIMIZDA</Link>
                <Link to='/iletisim'>İLETİŞİM</Link>
              </>
          )
        }
        
      </nav>
    </header>
  );
}

export default Header1;
