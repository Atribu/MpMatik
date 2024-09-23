import React, { useEffect, useState } from "react";
import imgLimit from "../../public/images/mpmatikLimit.png";
import "../Styles/Limitation.scss";
import img from "../../public/images/bp.jpg";
import imgServis from "../../public/images/mpmatik-servis.png"
import imgMusteri from '../../public/images/mpmatik-musteri-destek.png'
import imgYakit from '../../public/images/mpmatik-yakit.png'
import imgFatura from '../../public/images/mpmatik-fatura.png'
import imgRaporlama from '../../public/images/mpmatik-raporlamasi.png'

const Limitation = () => {
  const [selectedSection, setSelectedSection] = useState('limitlendirme');
  
  const [activeButton, setActiveButton] = useState(null);

   // Butona tıklayınca tetiklenen fonksiyon
   const handleButtonClick = (buttonName) => {
    setActiveButton(prev => prev === buttonName ? null : buttonName);
  };

  // İçeriklerin tanımlandığı veri
  const sectionContent = {
    limitlendirme: {
      title: 'LİMİTLENDİRME',
      text: 'Araçlarınızın sizin belirleyeceğiniz dönemlerde TL veya LT bazında ne kadar yakıt alabileceğine karar verebiliyor olacaksınız.',
      img: imgLimit,
    },
    yakit: {
      title: 'HATALI YAKIT ALIMINA SON!',
      text: 'BP Taşıtmatik ile fionuzun hatalı ürün alma ihtimali ortadan kalkar. Sistem aracınızın hangi ürün kullandığını bilir, aracınızı pompada tanır ve yanlış ürün ikmali engeller.',
      img: imgYakit,
    },
    tekFatura: {
      title: 'TEK FATURA İMKANI',
      text: 'Filonuzun tüm akaryakıt alımları için tek bir fatura alırsınız. Sistemden otomatik olarak aktarılan akaryakıt alımınıza ait bilgiler periyodlar halinde faturalanacaktır.',
      img: imgFatura,
    },
    raporlama: {
      title: 'RAPORLAMA',
      text: 'Araçlarınızın akaryakıt alımıyla ilgili ihtiyacınız olan tüm bilgiler BP Genel Merkezi’nden faturayla birlikte bir rapor halinde size gönderilir. Bu sayede filonuzu kolaylıkla yönetebilirsiniz.',
      img: imgRaporlama,
    },
    musteriHizmetleri: {
      title: 'MÜŞTERİ HİZMETLERİ SİZİNLE!',
      text: 'Ayrıca dilediğiniz her zaman, karşılıklı bilgi alışverişinde bulunabileceğiniz “Taşıtmatik Müşteri Hizmetleri Servisimiz” hizmetinizde olmaktan mutluluk duyacaktır.',
      img: imgMusteri,
    },
    servis724: {
      title: '7/24 KESİNTİSİZ SERVİS',
      text: 'BP Taşıtmatik Müşteri Hizmetleri Servisi`nin yanısıra 0212 473 27 27 numaralı telefondan ulaşacağınız Müşteri Danışma Hattı ile 24 saat hizmetinizdeyiz. BP Taşıtmatik sistemi ile merak ettiğiniz konulara 7 gün 24 saat yanıt bulabilir, sistemimizle ilgili her türlü görüş ve önerilerinizi anında bize ulaştırabilirsiniz.',
      img: imgServis,
    },
  }; 

  useEffect(() => {
    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    // Gözlemlemek istediğiniz elemanları seçin
    const hiddenElements = document.querySelectorAll('.slide-up');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup işlemi: Bileşen kaldırıldığında gözlemlemeyi bırakır
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); 
  
  return (
    <section className="section">
      <div className="div-1 slide-up">
        <img
          className="mp-image"
          src={img}
          alt="bp"
          width={img.width}
          height={img.height}
          layout="responsive"
        ></img>
        <div className="div-text">
          <h2>BP TAŞITMATİK Ne İşe Yarar?</h2>
          <text>
            <span>BP TAŞITMATİK</span>, BP’nin filolara özel geliştirdiği
            çözümümüz.Bu otomasyon sistemiyle, akaryakıtınızı aracınızdan
            çıkmadan alıp, ikmal sırasında herhangi bir ödeme yapmaksızın
            akaryakıt giderlerinizi tam olarak kontrol altına alabilirsiniz.
          </text>
        </div>
      </div>

      {/* limitlendirme */}
      <div className="div-limitsection">
        
        <div className="div-limitman slide-up">
          <div className="div-mantext">
            <div className="div-limittext">
              <h2 className="title">{sectionContent[selectedSection].title}</h2>
              <text>
              {sectionContent[selectedSection].text}
              </text>
            </div>
            <img
              src={sectionContent[selectedSection].img}
              alt="limit"
              width={img.width}
              height={img.height}
              layout="responsive"
            ></img>
          </div>
          <div className="div-button">
            <button className="button"
             onClick={() => setSelectedSection('limitlendirme')}
            >
              <text>LİMİTLENDİRME</text>
            </button>

            <button className="button"
             onClick={() => setSelectedSection('yakit')}
            >
              <text>YAKIT ALIMI</text>
            </button>
            <button className="button"  onClick={() => setSelectedSection('tekFatura')}>
              <text>TEK FATURA</text>
            </button>
            <button className="button"  onClick={() => setSelectedSection('raporlama')}>
              <text>RAPORLAMA</text>
            </button>
            <button className="button"  onClick={() => setSelectedSection('musteriHizmetleri')}>
              <text>MÜŞTERİ HİZMETLERİ</text>
            </button>
            <button className="button"  onClick={() => setSelectedSection('servis724')}>
              <text>7/24 SERVİS</text>
            </button>
          </div>
        </div>
      </div>

      <div className="div-limitsectionMobil">
      <div className="div-button">
        {/* LİMİTLENDİRME */}
        <button className="button" onClick={() => handleButtonClick('limit')}>
          <text>LİMİTLENDİRME</text>
        </button>
        {activeButton === 'limit' && (
          <div className="accordion-content show">
            <h2 className="title">LİMİTLENDİRME</h2>
            <text>
              Araçlarınızın sizin belirleyeceğiniz dönemlerde TL veya LT bazında ne kadar yakıt alabileceğine karar verebiliyor olacaksınız.
            </text>
            <img src={imgLimit} alt="limit" className="accordion-img" />
          </div>
        )}

        {/* YAKIT ALIMI */}
        <button className="button" onClick={() => handleButtonClick('yakit')}>
          <text>YAKIT ALIMI</text>
        </button>
        {activeButton === 'yakit' && (
          <div className="accordion-content show">
            <h2 className="title">YAKIT ALIMI</h2>
            <text>Yakıta dair detaylı bilgi burada yer alacak.</text>
            <img src={imgYakit} alt="yakit" className="accordion-img" />
          </div>
        )}

        {/* TEK FATURA */}
        <button className="button" onClick={() => handleButtonClick('fatura')}>
          <text>TEK FATURA</text>
        </button>
        {activeButton === 'fatura' && (
          <div className="accordion-content show">
            <h2 className="title">TEK FATURA</h2>
            <text>Tek fatura detayları bu alanda yer alacak.</text>
            <img src={imgFatura} alt="fatura" className="accordion-img" />
          </div>
        )}

<button className="button" onClick={() => handleButtonClick('raporlama')}>
          <text>Raporlama</text>
        </button>
        {activeButton === 'raporlama' && (
          <div className="accordion-content show">
            <h2 className="title">Raporlama</h2>
            <text>Tek fatura detayları bu alanda yer alacak.</text>
            <img src={imgRaporlama} alt="raporlama" className="accordion-img" />
          </div>
        )}

        <button className="button" onClick={() => handleButtonClick('musteriHizmetleri')}>
          <text>MÜŞTERİ HİZMETLERİ</text>
        </button>
        {activeButton === 'musteriHizmetleri' && (
          <div className="accordion-content show">
            <h2 className="title">MÜŞTERİ HİZMETLERİ</h2>
            <text>Tek fatura detayları bu alanda yer alacak.</text>
            <img src={imgMusteri} alt="fatura" className="accordion-img" />
          </div>
        )}

<button className="button" onClick={() => handleButtonClick('servis')}>
          <text>7/24 SERVİS</text>
        </button>
        {activeButton === 'servis' && (
          <div className="accordion-content show">
            <h2 className="title">7/24 SERVİS</h2>
            <text>Tek fatura detayları bu alanda yer alacak.</text>
            <img src={imgServis} alt="fatura" className="accordion-img" />
          </div>
        )}

        {/* Diğer butonlar aynı şekilde devam edebilir */}
      </div>
    </div>
    </section>
  );
};

export default Limitation;