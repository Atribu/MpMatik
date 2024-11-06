import React,{useEffect} from 'react';
import '../Styles/RoadSimulation.scss'; // Sass dosyanızı burada import ediyorsunuz
import benzinlik from "../../public/images/mpistasyonuzun.png";
import maviaraba from "../../public/images/maviaraba.png";
import kisakamyon from "../../public/images/kisakamyon.png";
import uzunkamyon from "../../public/images/uzunkamyon.png";
import beyazaraba from "../../public/images/beyazaraba.png";


const RoadSimulation = () => {
  useEffect(() => {
    // kayarak gelme
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
    <div className="containerb">
      <div className='divEbülten slide-up'>
        <h3> E-Bültene Kaydol</h3>
        <p>E-Mail bültenimize kaydolarak MP Taşıtmatik ile ilgili tüm yenilik ve haberleri alabilirsiniz.</p>
      <div className='divInput'>
        <input type='email' id='email' name='email' placeholder='E-Mail' required></input>
        <button>ABONE OL</button>
      </div>
      </div>
      <div className="footer-yol slide-up">
        {/* Yol */}
        <div className="yol" />

        {/* Benzinlik */}
        <div className="benzinlik">
          <img
            src={benzinlik}
            alt="Benzinlik"
            className="benzinlik-image"
            
          />
        </div>

        {/* Araçlar */}
        <img
          src={maviaraba}
          alt="Mavi Araba"
          className="maviarabam"
        />
        <img
          src={kisakamyon}
          alt="Kısa Kamyon"
          className="kisakamyonum"
        />
        <img
          src={uzunkamyon}
          alt="Uzun Kamyon"
          className="uzunkamyonum"
        />
        <img
          src={beyazaraba}
          alt="Beyaz Araba"
          className="beyazarabam"
        />
      </div>
    </div>
  );
};

export default RoadSimulation;
