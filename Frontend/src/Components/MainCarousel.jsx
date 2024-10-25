"use client";
import React, { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../Styles/MainCarousel.scss";
import image1 from "../../public/images/mp-tasit-banner-kurumsal.jpg";
import image2 from "../../public/images/mpmatik-banner-masaustu-filokart3.jpg";
import image3 from "../../public/images/mpmatik3.jpg";
import image1mobile from "../../public/images/mpmatik-mobil-banner-istasyon.jpg";
import image2mobile from "../../public/images/filo-mobil-banner2.jpg";
import image3mobile from "../../public/images/mpmatik-mobil-banner-form.jpg";
import ContactForm from "./ContactForm";

const imagesDesktop = [image1, image2, image3];
const imagesMobile = [image1mobile, image2mobile, image3mobile];

const HomeCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Ekran boyutunu takip et
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px altı mobil olarak kabul edilir
    };

    handleResize(); // İlk yüklemede boyutu kontrol et
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };
      emblaApi.on("select", onSelect);
      return () => emblaApi.off("select", onSelect);
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const imagesToShow = isMobile ? imagesMobile : imagesDesktop; // Ekran boyutuna göre görselleri belirle

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container" ref={emblaRef}>
        <div className="carousel-slides">
          {imagesToShow.map((image, index) => (
            <div className="carousel-slide" key={index}>
              <img
                src={image}
                width={image.width}
                height={image.height}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
              />
              {index === 0  && (
                <div className="custom-text-1">
                  <h2>Her zaman yenilikçi <br></br> her zaman kaliteli hizmet</h2>
                  <p className="custom-text">Filonuzun akaryakıt alımları mevlana petrol güvencesi ve <span>BP Taşıtmatik</span> sistemi ile kontrol altında </p>
                  <button className="custom-button"><p>Kolay Başvuru</p></button>
                </div>
              )}
              {index === 1  && (
                <div className="custom-text-2">
                  <h2 className="custom-header"><span>Filo</span>nuza Özel Çözümler</h2>
                  <p className="custom-text">BP Filo Kart sistemi taşeron araçlarının ödeme yapmadan anlaşmalı BP istasyonlarından yakıt almasını sağlar.</p>
                  <p className="custom-text">BP Filo Kart kullanan şirketler, tedarikçi veya taşeronlarına yapacakları ödemeleri akaryakıt üzerinden yaparak, yapmış oldukları ödemelerden akaryakıt iskonto tutarları kadar prim elde ederler.</p>
                  <button className="custom-button"><p>Kolay Başvuru</p></button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="carousel-controls">
          <button className="carousel-prev" onClick={scrollPrev} type="button">
            <IoIosArrowBack size={25} color="white" />
          </button>

          <button onClick={scrollNext} className="carousel-next">
            <IoIosArrowForward size={25} color="white" />
          </button>
        </div>

        {selectedIndex === 2 && (
          <div className="form-section">
            <ContactForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeCarousel;
