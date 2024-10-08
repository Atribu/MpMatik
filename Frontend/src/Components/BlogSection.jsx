import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import '../Styles/BlogCarousel.scss';
import img1 from "../../public/images/bp-tasitmatik-hizmeti-veren-istasyonlar.jpg"
import img2 from "../../public/images/bp-tasitmatik-sik-sorulan-sorular.jpg"
import img3 from "../../public/images/ulusal-tasit-tanima-sistemi.jpg"
import img4 from "../../public/images/bp-tasitmatik-musteri-hizmetleri.jpg"
import img5 from "../../public/images/ana-sayfa-banner.jpg"
import img6 from "../../public/images/tasitmatik-avantajlari-nelerdir.jpg"

const musteri = "BP Taşıtmatik olarak geniş bir müşteri hizmetleri ekibi ile sizlere en iyi hizmeti sunmayı hedefliyoruz. Aracınızın yakıt verimliliğini artırmaktan, filo yönetimi konularında destek sağlamaya kadar uzanan geniş bir yelpazede hizmetler"
const istasyon = "BP Taşıtmatik, BP istasyonlarında sunulan bir hizmettir ve sürücülere bir dizi avantaj sağlar. Bu hizmetle birlikte BP istasyonlarından yakıt alımı daha kolay, hızlı ve avantajlı hale gelir. BP Taşıtmatik Kart"
const sss ="BP Taşıtmatik Nedir? BP Taşıtmatik, BP (British Petroleum) tarafından sunulan bir akaryakıt kartı ve yakıt yönetim hizmetidir. Bu hizmet, işletmelerin filo araçlarının yakıt giderlerini yönetmelerine yardımcı olur. BP Taşıtmatik kartı"
const ulusal = "Ulusal Taşıt Tanıma Sistemi (UTTS), bir ülkenin karayolu trafiğini daha etkin bir şekilde yönetmek, denetlemek ve izlemek amacıyla kullanılan bir teknoloji ve sistemdir. Ulusal Taşıt Tanıma Sistemi, genellikle otomobillerin plakalarını"
const mptasit ="Taşıt Tanıma Sistemi, motorlu araçların yakıt tüketimini ve kullanımını otomatik olarak kaydeden bir teknoloji sistemidir. Bu sistem, araçların hangi yakıtı (benzin, mazot) kullandığını ve bu yakıtın ne kadar kullanıldığını izler"
const avantaj = "BP Taşıtmatik kartı, sürücülere yakıt alımlarını kolaylaştıran bir ödeme sistemi ve yakıt alım kartıdır. Bu kart sayesinde kullanıcılar, yakıt alımlarını kolaylıkla yapabilir ve birçok avantajdan faydalanabilirler. BP Taşıtmatik kartı, sürücülere"

const images = [img1, img2, img3,img4,img5,img6];
const titles = ["BP Taşıtmatik Hizmeti Veren İstasyonlar","BP Taşıtmatik Sık Sorulan Sorular","Ulusal Taşıt Tanıma Sistemi Nedir?","BP Taşıtmatik Müşteri Hizmetleri","Taşıt Tanıma Sistemi","BP Taşıtmatik Avantajları Nelerdir?"];
const texts = [istasyon,sss,ulusal,musteri,mptasit,avantaj];

const BlogSection = () => {
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
    const hiddenElements = document.querySelectorAll('.slide-upSatis');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup işlemi: Bileşen kaldırıldığında gözlemlemeyi bırakır
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); 

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [curr, setCurr] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi && emblaApi.scrollPrev) emblaApi.scrollPrev();
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  }, [emblaApi, curr, images.length]);

  const scrollNext = useCallback(() => {
    if (emblaApi && emblaApi.scrollNext) emblaApi.scrollNext();
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  }, [emblaApi, curr, images.length]);

  const handleJump = useCallback((index) => {
    if (emblaApi && emblaApi.scrollTo) emblaApi.scrollTo(index);
    setCurr(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurr(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);



  return (
    <section className='blogGreenSec'>
       
      <div className='blog-container'>
      <p className="blog-carousel__title slide-upSatis">BLOG YAZILARI</p>
         <div className=" blog-carousel slide-upSatis">
      
      <div className="blog-carousel__carousel" ref={emblaRef}>
        <div className="blog-carousel__carousel-container">
          {images.map((image, index) => (
            <div className="blog-carousel__item" key={index}>
              <img
                className="blog-carousel__image"
                style={{objectFit:'cover'}}
                src={image}
                alt={`Slide ${index + 1}`}
              />
              <div className="carousel-texts">
               <h3>{titles[index]}</h3>
               <p>{texts[index]}</p>
               <button className="carousel-buttons">Daha Fazla Bilgi Al</button>
             </div>
            </div>
          ))}
        </div>
        <div className="carouselbuttondiv">
          <button className="buttonLeftRight" onClick={scrollPrev} type="button">
            <BsChevronLeft size="1.5rem" color="white" />
          </button>

          <button onClick={scrollNext} className="buttonLeftRight">
            <BsChevronRight size="1.5rem" color="white" />
          </button>
        </div>
      </div>

      

      <div className="circleIndexDiv">
        {images.map((_, i) => (
          <div
            key={i}
            className={`carousel-dot ${curr === i ? "active" : ""}`}
            onClick={() => handleJump(i)}
          />
        ))}
      </div>
    </div>
   
      </div>
    </section>
  )
}

export default BlogSection
