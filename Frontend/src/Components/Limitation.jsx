import React from 'react';
import imgLimit from "../../public/images/mpmatikLimit.png";
import "../Styles/Limitation.scss";

const Limitation = () => {
  return (
    <section>
      <div>
      <img></img>
      <div>
        <h2>BP TAŞITMATİK Ne İşe Yarar?</h2>
        <text><span>BP TAŞITMATİK</span>, BP’nin filolara özel geliştirdiği çözümümüz.Bu otomasyon sistemiyle, akaryakıtınızı aracınızdan çıkmadan alıp, ikmal sırasında herhangi bir ödeme yapmaksızın akaryakıt giderlerinizi tam olarak kontrol altına alabilirsiniz.</text>
      </div>
      </div>

      {/* limitlendirme */}
      <div>
        <button>LİMİTLENDİRME</button>
        <h2>LİMİTLENDİRME</h2>
        <text>Araçlarınızın sizin belirleyeceğiniz dönemlerde TL veya LT bazında ne kadar yakıt alabileceğine karar verebiliyor olacaksınız.</text>
        <img src={imgLimit} alt='limit' width={imgLimit.width} height={imgLimit.height}></img>
        <div className='div-button'>
        <button className='button'><text>YAKIT ALIMI</text></button>
        
        <button className='button'><text>TEK FATURA</text></button>
        <button className='button'><text>RAPORLAMA</text></button>
        <button className='button'><text>MÜŞTERİ HİZMETLERİ</text></button>
        <button className='button'><text>7/24 SERVİS</text></button>
        </div>
      </div>
    </section>
  )
}

export default Limitation
