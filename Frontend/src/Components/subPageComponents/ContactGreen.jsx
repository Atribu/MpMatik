import React from 'react'
import image from "../../../public/images/iletisim-mpmatik.png"
import logo from "../../../public/Logo/mpmatik-siyah.png"
import "../../Styles/ContactGreen.scss"
import { FaInstagram,FaLinkedin,FaPinterestP,FaVimeoV } from "react-icons/fa";
import { FaFacebook,FaXTwitter,FaYoutube } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { TiSocialTumbler } from "react-icons/ti";

const ContactGreen = () => {
  return (
    <section className='sectionTercih'>
      <div className='divTercih'>
        <div className='divHalfTercih'>
            <img src={logo} alt='referances' width={300} height={75} />
            <h2 className='h2'>NEDEN MP TAŞITMATİK'İ TERCİH ETMELİSİNİZ?</h2>
            <p>Taşıt akaryakıt tanıma sistemi, araçların yakıt alımını otomatik olarak yöneten bir teknolojidir. Araçların plakalarını ve yakıt pompalarını tanıyarak, sürücülerin yakıt alım sürecini hızlandırır ve kolaylaştırır. Bu sistem sayesinde sürücüler kart veya etiket kullanarak işlemi hızla gerçekleştirebilir, nakit veya kredi kartıyla uğraşmak zorunda kalmaz. Aynı zamanda işletmeler için de yakıt giderlerini izlemek ve yönetmek daha kolay hale gelir. Akaryakıt tanıma sistemi, verimliliği artırırken hatalı işlemleri minimize ederek zamandan ve paradan tasarruf sağlar.</p>
            <p>Firmamızın taşıt akaryakıt tanıma sistemi, modern teknolojiyle donatılmış etkili bir çözümdür. Araç sahiplerine ve işletmelere yakıt alımlarını kolaylaştırarak zaman ve çaba tasarrufu sağlar. Otomatik plaka ve pompa tanıma özellikleri sayesinde kullanıcılar anında işlem yapabilir. Bu sistem, verimliliği artırırken hatalı işlemleri minimize eder ve yakıt giderlerini izlemeyi basit hale getirir. Gerçek zamanlı veri analizi ile yakıt tüketimini daha iyi anlamak ve yönetmek mümkündür. Müşteri memnuniyetini ve işletme verimliliğini yükseltmek için tasarlanmış yenilikçi bir çözümdür.</p>
            <button className='buttonApplyy'>HEMEN BAŞVUR</button>
        </div>


        <div className='half2'>
            <img src={image} alt='referances' width={315} height={525.56} />
            <h2 className='h2'>sosyal medya'da BİZ!</h2>

            <div className="social-icons">
                        <a
                                href="https://www.instagram.com/mptasitmatik/" className="icon instagram" target="_blank" rel="noopener noreferrer"><FaInstagram size={19} />
                        </a>
                        <a 
                                href="https://www.facebook.com/mptasitmatik/" className='icon facebook' target='_blank' rel='nooper noreferrer'><FaFacebook size={19}/>
                        </a>
                        <a 
                                href="https://www.twitter.com/mptasitmatik/" className='icon twitter' target='_blank' rel='nooper noreferrer'><FaXTwitter size={19}/>
                        </a>
                        <a 
                                href="https://www.youtube.com/@MPtasitmatik" className='icon youtube' target='_blank' rel='nooper noreferrer'><FaYoutube size={19}/>
                        </a>
                        <a 
                                href="https://www.linkedin.com/company/mpmatik/posts/?feedView=all" className='icon linkedln' target='_blank' rel='nooper noreferrer'><FaLinkedin size={19}/>
                        </a>
                        <a 
                                href="https://www.linkedin.com/company/mpmatik/posts/?feedView=all" className='icon tiktok' target='_blank' rel='nooper noreferrer'><SiTiktok size={19}/>
                        </a>
                        <a 
                                href="https://www.linkedin.com/company/mpmatik/posts/?feedView=all" className='icon tumbler' target='_blank' rel='nooper noreferrer'><TiSocialTumbler size={29}/>
                        </a>
                        <a 
                                href="https://www.linkedin.com/company/mpmatik/posts/?feedView=all" className='icon pinterest' target='_blank' rel='nooper noreferrer'><FaPinterestP size={19}/>
                        </a>
                        <a 
                                href="https://www.linkedin.com/company/mpmatik/posts/?feedView=all" className='icon vimeo' target='_blank' rel='nooper noreferrer'><FaVimeoV size={19}/>
                        </a>

                </div>
        </div>

      </div>
    </section>
  )
}

export default ContactGreen
