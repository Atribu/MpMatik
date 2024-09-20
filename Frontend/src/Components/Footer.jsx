import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import "../Style/Footer.scss"

const Footer = () => {
  return (
    <footer className='footer-main'>
        <div className='div-bir'>  
                <Link>
                        <img src='../../Logo/mpmatik-footer-logo.png' alt='' width="200" height="50" />               
                </Link>
                <p>
                        BP kalitesi ve deneyimi ile tanışmak ve Taşıtmatik sistemine geçmek için bizimle iletişime geçin. 
                        Çok yakında yayınlanacak olan mobil uygulamamız ile tüm işlemlerinize çok hızlı bir şekilde ulaşabileceksiniz.
                </p>
                <div className="social-icons">
                        <Link to="/" className="icon whatsapp">
                                <FaWhatsapp size={18} />
                        </Link>
                        <Link to="/" className="icon instagram">
                                <FaInstagram size={18} />
                        </Link>
                        <Link to="/" className="icon facebook">
                                <FaFacebook size={18} />
                        </Link>
                        <Link to="/" className="icon twitter">
                                <FaXTwitter size={18} />
                        </Link>
                        <Link to="/" className="icon youtube">
                                <FaYoutube size={18} />
                        </Link>
                </div>

                <section>
                        <Link className='button-basvuru'>Hemen Başvur</Link>
                        <Link className='button-kolay'>Kolay Ödeme</Link>
                </section>
        </div>
        <div className='div-iki'>
                <h3>BP Taşıtmatik</h3>
                <ul>
                        <li>Ana Sayfa</li>
                        <li>Kolay Başvuru</li>
                        <li>Toptan Akaryakıt</li>
                        <li>İhaleli Akaryakıt</li>
                        <li>Hakkımızda</li>
                        <li>İletişim</li>
                        <li>Referanslar</li>
                        <li>Kullanım Koşulları</li>
                        <li>Gizlilik Politikası</li>
                </ul>    
        </div>
        <div className='div-uc'>
                <h3>Faydalı Bilgiler</h3>
                <ul>
                        <li>BP Taşıtmatik Nedir?</li>
                        <li>BP Taşıtmatik Nasıl Çalışır?</li>
                        <li>BP Taşıtmatik Müşteri Hizmetleri</li>
                        <li>BP Taşıtmatik Avantajları Nelerdir?</li>
                        <li>BP Taşıtmatik Hizmeti Veren İstasyonlar</li>
                        <li>Taşıt Akaryakıt Tanıma Sistemi Nedir?</li>
                </ul>
        </div>
        <div className='div-dort'>
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
    </footer>
  )
}

export default Footer