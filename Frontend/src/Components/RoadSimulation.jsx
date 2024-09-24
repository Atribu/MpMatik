import React from 'react';
import '../Styles/RoadSimulation.scss'; // Sass dosyanızı burada import ediyorsunuz
import benzinlik from "../../public/images/bp-mp-istasyonu.png";
import maviaraba from "../../public/images/maviaraba.png";
import kisakamyon from "../../public/images/kisakamyon.png";
import uzunkamyon from "../../public/images/uzunkamyon.png";
import beyazaraba from "../../public/images/beyazaraba.png";


const RoadSimulation = () => {
  return (
    <div className="containerb">
      <div className="footer-yol">
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
