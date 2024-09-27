import React from 'react'
import "../../Styles/AboutMain.scss"
import BasicContactForm from "../../Components/subPageComponents/BasicContactForm"
import { FaInstagram,FaLinkedin,FaPinterestP,FaVimeoV } from "react-icons/fa";
import { FaFacebook,FaXTwitter,FaYoutube } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { TiSocialTumbler } from "react-icons/ti";

const GrayMatik = () => {
  return (
    <section className='sectionWhite'>
      <div className='divcontainerWhite'>
        <div className='divWhiteHalf'>
            <h2>HAKKIMIZDA</h2>
            <p>Türkiye’nin önde gelen akaryakıt ve petrol ürünleri tedarikçilerinden biri olarak sizlere hizmet vermekten gurur duyuyoruz. BP Taşıtmatik ürünleri konusundaki uzmanlığımız ve taahhüdümüz, sürücülerin akaryakıt deneyimlerini daha güvenli, verimli ve etkili hale getirmelerine yardımcı olmak için tasarlanmıştır.</p>
           {/* <div className='social media'> */}
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
           {/* </div> */}
        </div>
        <div className='divHalfForm'>
          <BasicContactForm/>
        </div>
      </div>
    </section>
  )
}

export default GrayMatik
