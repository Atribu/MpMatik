import React from 'react';
import imgLimit from "../../public/images/mpmatikLimit.png";
import "../Styles/Limitation.scss";
import img from "../../public/images/bp.jpg"

const Limitation = () => {
  return (
    <section className='section'>
      <div className='div-1'>
      <img src={img} alt='bp' width={392} height={196} layout="responsive"></img>
      <div className='div-text'>
        <h2>BP TAŞITMATİK Ne İşe Yarar?</h2>
        <text><span>BP TAŞITMATİK</span>, BP’nin filolara özel geliştirdiği çözümümüz.Bu otomasyon sistemiyle, akaryakıtınızı aracınızdan çıkmadan alıp, ikmal sırasında herhangi bir ödeme yapmaksızın akaryakıt giderlerinizi tam olarak kontrol altına alabilirsiniz.</text>
      </div>
      </div>

      {/* limitlendirme */}
      <div className='div-limitsection'>
        <button className='buttonBlack2'>LİMİTLENDİRME</button>
        <div className='div-limitman'>
        <div className='div-button'>
        <button className='buttonBlack'><text>LİMİTLENDİRME</text></button>
        <button className='button'><text>YAKIT ALIMI</text></button>
        <button className='button'><text>TEK FATURA</text></button>
        <button className='button'><text>RAPORLAMA</text></button>
        <button className='button'><text>MÜŞTERİ HİZMETLERİ</text></button>
        <button className='button'><text>7/24 SERVİS</text></button>
        </div>
        <div className='div-manbutton'>
        <div className='div-limittext'>
        <h2 className='title'>LİMİTLENDİRME</h2>
        <text>Araçlarınızın sizin belirleyeceğiniz dönemlerde TL veya LT bazında ne kadar yakıt alabileceğine karar verebiliyor olacaksınız.</text>
        </div>
        <img src={imgLimit} alt='limit' width={150} height={245} layout="responsive"></img>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default Limitation
