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
  
  const [activeButton, setActiveButton] = useState("limit");

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
    <section className="sectionLim">
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
          <h2><span>BP TAŞITMATİK</span> Ne İşe Yarar?</h2>
          <p>
            <span>BP TAŞITMATİK</span>, BP’nin filolara özel geliştirdiği
            çözümümüz.Bu otomasyon sistemiyle, akaryakıtınızı aracınızdan
            çıkmadan alıp, ikmal sırasında herhangi bir ödeme yapmaksızın
            akaryakıt giderlerinizi tam olarak kontrol altına alabilirsiniz.
          </p>
        </div>
      </div>

      {/* limitlendirme */}
      <div className="div-limitsection">
        
        <div className="div-limitman slide-up">
          <div className="div-mantext">
            <div className="div-limittext">
              <h2 className="title">{sectionContent[selectedSection].title}</h2>
              <p className="p">
              {sectionContent[selectedSection].text}
              </p>
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
            <button className={`buttonLim ${selectedSection === 'limitlendirme' ? 'active' : ''}`}
             onClick={() => setSelectedSection('limitlendirme')}
            >
              <p>LİMİTLENDİRME</p>
            </button>

            <button className={`buttonLim ${selectedSection === 'yakit' ? 'active' : ''}`}
             onClick={() => setSelectedSection('yakit')}
            >
              <p>YAKIT ALIMI</p>
            </button>
            <button className={`buttonLim ${selectedSection === 'tekFatura' ? 'active' : ''}`}  onClick={() => setSelectedSection('tekFatura')}>
              <p>TEK FATURA</p>
            </button>
            <button className={`buttonLim ${selectedSection === 'raporlama' ? 'active' : ''}`}  onClick={() => setSelectedSection('raporlama')}>
              <p>RAPORLAMA</p>
            </button>
            <button className={`buttonLim ${selectedSection === 'musteriHizmetleri' ? 'active' : ''}`}  onClick={() => setSelectedSection('musteriHizmetleri')}>
              <p>MÜŞTERİ HİZMETLERİ</p>
            </button>
            <button className={`buttonLim ${selectedSection === 'servis724' ? 'active' : ''}`}  onClick={() => setSelectedSection('servis724')}>
              <p>7/24 SERVİS</p>
            </button>
          </div>
        </div>
      </div>


{/* mobil */}

      <div className="div-limitsectionMobil slide-up">
      <div className="div-button">
        {/* LİMİTLENDİRME */}
        <button className={`buttonLim ${activeButton === 'limit' ? 'active' : ''}`} onClick={() => handleButtonClick('limit')}>
          <p>LİMİTLENDİRME</p>
        </button>
        {activeButton === 'limit' && (
          <div className="accordion-content show">
            <h2 className="title">LİMİTLENDİRME</h2>
            <p>
              Araçlarınızın sizin belirleyeceğiniz dönemlerde TL veya LT bazında ne kadar yakıt alabileceğine karar verebiliyor olacaksınız.
            </p>
            <img src={imgLimit} alt="limit" className="accordion-img" />
          </div>
        )}

        {/* YAKIT ALIMI */}
        <button className={`buttonLim ${activeButton === 'yakit' ? 'active' : ''}`} onClick={() => handleButtonClick('yakit')}>
          <p>YAKIT ALIMI</p>
        </button>
        {activeButton === 'yakit' && (
          <div className="accordion-content show">
            <h2 className="title">YAKIT ALIMI</h2>
            <p>BP Taşıtmatik ile fionuzun hatalı ürün alma ihtimali ortadan kalkar. Sistem aracınızın hangi ürün kullandığını bilir, aracınızı pompada tanır ve yanlış ürün ikmali engeller.</p>
            <img src={imgYakit} alt="yakit" className="accordion-img" />
          </div>
        )}

        {/* TEK FATURA */}
        <button className={`buttonLim ${activeButton === 'fatura' ? 'active' : ''}`} onClick={() => handleButtonClick('fatura')}>
          <p>TEK FATURA</p>
        </button>
        {activeButton === 'fatura' && (
          <div className="accordion-content show">
            <h2 className="title">TEK FATURA</h2>
            <p>Filonuzun tüm akaryakıt alımları için tek bir fatura alırsınız. Sistemden otomatik olarak aktarılan akaryakıt alımınıza ait bilgiler periyodlar halinde faturalanacaktır.</p>
            <img src={imgFatura} alt="fatura" className="accordion-img" />
          </div>
        )}

<button className={`buttonLim ${activeButton === 'raporlama' ? 'active' : ''}`} onClick={() => handleButtonClick('raporlama')}>
          <p>Raporlama</p>
        </button>
        {activeButton === 'raporlama' && (
          <div className="accordion-content show">
            <h2 className="title">Raporlama</h2>
            <p>Araçlarınızın akaryakıt alımıyla ilgili ihtiyacınız olan tüm bilgiler BP Genel Merkezi’nden faturayla birlikte bir rapor halinde size gönderilir. Bu sayede filonuzu kolaylıkla yönetebilirsiniz.</p>
            <img src={imgRaporlama} alt="raporlama" className="accordion-img" />
          </div>
        )}

        <button className={`buttonLim ${activeButton === 'musteriHizmetleri' ? 'active' : ''}`} onClick={() => handleButtonClick('musteriHizmetleri')}>
          <p>MÜŞTERİ HİZMETLERİ</p>
        </button>
        {activeButton === 'musteriHizmetleri' && (
          <div className="accordion-content show">
            <h2 className="title">MÜŞTERİ HİZMETLERİ</h2>
            <p>Ayrıca dilediğiniz her zaman, karşılıklı bilgi alışverişinde bulunabileceğiniz “Taşıtmatik Müşteri Hizmetleri Servisimiz” hizmetinizde olmaktan mutluluk duyacaktır.</p>
            <img src={imgMusteri} alt="fatura" className="accordion-img" />
          </div>
        )}

<button className={`buttonLim ${activeButton === 'servis' ? 'active' : ''}`} onClick={() => handleButtonClick('servis')}>
          <p>7/24 SERVİS</p>
        </button>
        {activeButton === 'servis' && (
          <div className="accordion-content show">
            <h2 className="title">7/24 SERVİS</h2>
            <p>BP Taşıtmatik Müşteri Hizmetleri Servisi`nin yanısıra 0212 473 27 27 numaralı telefondan ulaşacağınız Müşteri Danışma Hattı ile 24 saat hizmetinizdeyiz. BP Taşıtmatik sistemi ile merak ettiğiniz konulara 7 gün 24 saat yanıt bulabilir, sistemimizle ilgili her türlü görüş ve önerilerinizi anında bize ulaştırabilirsiniz.</p>
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