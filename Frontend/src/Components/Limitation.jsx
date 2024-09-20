import React, { useEffect } from "react";
import imgLimit from "../../public/images/mpmatikLimit.png";
import "../Styles/Limitation.scss";
import img from "../../public/images/bp.jpg";

const Limitation = () => {
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
        <button className="buttonBlack2">
          <text>LİMİTLENDİRME</text>
        </button>
        <div className="div-limitman slide-up">
          <div className="div-mantext">
            <div className="div-limittext">
              <h2 className="title">LİMİTLENDİRME</h2>
              <text>
                Araçlarınızın sizin belirleyeceğiniz dönemlerde TL veya LT
                bazında ne kadar yakıt alabileceğine karar verebiliyor
                olacaksınız.
              </text>
            </div>
            <img
              src={imgLimit}
              alt="limit"
              width={img.width}
              height={img.height}
              layout="responsive"
            ></img>
          </div>
          <div className="div-button">
            <button className="buttonBlack">
              <text>LİMİTLENDİRME</text>
            </button>
            <button className="button">
              <text>YAKIT ALIMI</text>
            </button>
            <button className="button">
              <text>TEK FATURA</text>
            </button>
            <button className="button">
              <text>RAPORLAMA</text>
            </button>
            <button className="button">
              <text>MÜŞTERİ HİZMETLERİ</text>
            </button>
            <button className="button">
              <text>7/24 SERVİS</text>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Limitation;
