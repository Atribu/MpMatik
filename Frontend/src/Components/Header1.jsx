import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Header1.scss";
import { useSelector } from 'react-redux';
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import DgtlLogo from "../../public/Logo/DgtlLogo";

const Header1 = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { activeUser } = useSelector((state) => state.user);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarRef = useRef(null);

  const yetkiFunc = (number) => {
    if (number === 1) {
      return "Admin";
    }
    if (number === 2) {
      return "Editor";
    }
    if (number === 3) {
      return "Kullanıcı";
    }
    return "Bilinmiyor"; 
  };

  // activeUser var mı kontrolü
  const yetki = activeUser ? yetkiFunc(activeUser.accessLevel) : null;

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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className={`${activeUser ? 'sticky-header-activeuser' : isSticky ? 'is-sticky' : "sticky-header"}`}>
        <section className='sectionHeader'>
          <div className='mobile-icons'>
            {isSticky ? <FaBars size={25} color='#fff' onClick={toggleSidebar}/> : <FaBars size={20} color='#4e534c' onClick={toggleSidebar}/>}
          </div>

          <Link to="/">
            {activeUser ? <DgtlLogo className="flex items-center justify-center" width={200} height={50}/> : isSticky ?
              <img 
                src='/Logo/bp-logo-beyazimsi.png' 
                alt='Logo' 
                width={45}
                height={60}
              /> :
              <img 
                src='/Logo/bp-logo-kendi.png'
                alt='Logo' 
                width={45}
                height={60}
              />
            }
          </Link>
          <div className='mobile-icons'>
            {isSticky ? <FaMagnifyingGlass size={25} color='#fff'/> : <FaMagnifyingGlass size={20} color='#4e534c'/>}
          </div>

          <nav>
            {
              activeUser ? (
                <>
                  <Link to='/'>Ana Sayfa</Link>
                  <Link to="/panel">Panel</Link>
                  <Link to="/panel/profil">{activeUser.name}</Link>
                  <Link to="/panel/profil">Yetki: {yetki ? yetki  : "Bilinmiyor"}</Link>
                  <Link to="/panel/">Yetki: {yetki ? activeUser.accessLevel   : "Bilinmiyor"}</Link>
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
        </section>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <button className="close-btn" onClick={toggleSidebar}>X</button>
          <nav>
            <Link to='/toptan-akaryakit' onClick={toggleSidebar}>TOPTAN AKARYAKIT</Link>
            <div className='line'></div>
            <Link to='/ihaleli-akaryakit' onClick={toggleSidebar}>İHALELİ AKARYAKIT</Link>
            <div className='line'></div>
            <Link to='/nasil-calisir' onClick={toggleSidebar}>NASIL ÇALIŞIR</Link>
            <div className='line'></div>
            <Link to='/referanslar' onClick={toggleSidebar}>REFERANSLAR</Link>
            <div className='line'></div>
            <Link to='/hakkimizda' onClick={toggleSidebar}>HAKKIMIZDA</Link>
            <div className='line'></div>
            <Link to='/iletisim' onClick={toggleSidebar}>İLETİŞİM</Link>
            <div className='line'></div>
            <Link to="/hemen-basvur" className="button1side">Hemen Başvur</Link>
            <Link to="/kolay-odeme" className="button2side">Kolay Ödeme</Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header1;
