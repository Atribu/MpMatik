import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import DgtlLogo from "../../public/Logo/DgtlLogo.jsx"

import "../Styles/Footer.scss"

const Footer = () => {
  return (
    <footer className='footer-main'>
       <section className='sectionFooter'>
       <div className='div-bir'>  
                <Link>
                        <img src='../../Logo/mpmatik-footer-logo.png' alt='' width={200} height={50} />               
                </Link>
                <p>
                        BP kalitesi ve deneyimi ile tanışmak ve Taşıtmatik sistemine geçmek için bizimle iletişime geçin. 
                        Çok yakında yayınlanacak olan mobil uygulamamız ile tüm işlemlerinize çok hızlı bir şekilde ulaşabileceksiniz.
                </p>
                <div className="social-icons">
                        <a
                                href="https://www.instagram.com/mptasitmatik/" className="icon instagram" target="_blank" rel="noopener noreferrer"><FaInstagram size={100} />
                        </a>
                        <a 
                                href="https://www.facebook.com/mptasitmatik/" className='icon facebook' target='_blank' rel='nooper noreferrer'><FaFacebook size={100}/>
                        </a>
                        <a 
                                href="https://www.twitter.com/mptasitmatik/" className='icon twitter' target='_blank' rel='nooper noreferrer'><FaXTwitter size={100}/>
                        </a>
                        <a 
                                href="https://www.youtube.com/@MPtasitmatik" className='icon youtube' target='_blank' rel='nooper noreferrer'><FaYoutube size={100}/>
                        </a>
                        <a 
                                href="https://www.linkedin.com/company/mpmatik/posts/?feedView=all" className='icon linkedln' target='_blank' rel='nooper noreferrer'><FaLinkedin size={100}/>
                        </a>

                </div>

                <section className='sec-footer-button'>
                        <Link className='button-basvuru'>Hemen Başvur</Link>
                        <Link className='button-kolay'>Kolay Ödeme</Link>
                </section>
        </div>
        <div className='divikiuc'>
        <div className='div-iki'>
                <h3>BP Taşıtmatik</h3>
                <ul>
                        <li><Link to="/">Ana Sayfa</Link></li>
                        <li><Link to="/#basvuru">Kolay Başvuru</Link></li>
                        <li><Link to="/toptan-akaryakit">Toptan Akaryakıt</Link></li>
                        <li><Link to="/ihaleli-akaryakit">İhaleli Akaryakıt</Link></li>
                        <li><Link to="/hakkimizda">Hakkımızda</Link></li>
                        <li><Link to="/iletisim">İletişim</Link></li>
                        <li><Link to="/referanslar">Referanslar</Link></li>
                        <li><Link to="/kullanim-kosullari">Kullanım Koşulları</Link></li>
                        <li><Link to="/gizlilik-politikasi">Gizlilik Politikası</Link></li>
                </ul>    
        </div>
        <div className='div-iki'>
                <h3>Faydalı Bilgiler</h3>
                <ul>
                        <li><Link to="/">BP Taşıtmatik Nedir?</Link></li>
                        <li><Link to="/">BP Taşıtmatik Nasıl Çalışır?</Link></li>
                        <li><Link to="/">BP Taşıtmatik Müşteri Hizmetleri</Link></li>
                        <li><Link to="/">BP Taşıtmatik Avantajları Nelerdir?</Link></li>
                        <li><Link to="/">BP Taşıtmatik Hizmeti Veren İstasyonlar</Link></li>
                        <li><Link to="/">Taşıt Akaryakıt Tanıma Sistemi Nedir?</Link></li>
                </ul>
        </div>

        </div>
        <div className='div-dort'>
           <div className='divdort-iki'>
           <Link>
                        <img src='/images/ana-sayfa-banner.jpg' alt='Görsel' width="200" height="100" />            
            </Link>
            <h2>
                        Taşıt Tanıma Sistemi
            </h2>
            <p>
                        Taşıt Tanıma Sistemi, motorlu araçların yakıt tüketimini ve kullanımını otomatik olarak kaydeden bir teknoloji sistemidir. 
                        Bu sistem, araçların hangi yakıtı (benzin, mazot) kullandığını ve bu...
            </p>
            <Link className='button-oku'>
                        Daha Fazla Oku
            </Link>
           </div>
        </div>
       </section>
       <div className='dgtlface'>
                Powered by - <Link to="https://www.dgtlface.com/">< DgtlLogo width="100" height="100">""</DgtlLogo></Link> 
       </div>
    </footer>
  )
}

export default Footer