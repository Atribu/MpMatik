import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import '../Styles/BlogCarousel.scss';
import BlogItems from './BlogItems'
import "../Styles/BlogSection.scss"
import img1 from "../../public/images/bp-tasitmatik-hizmeti-veren-istasyonlar.jpg"
import img2 from "../../public/images/bp-tasitmatik-sik-sorulan-sorular.jpg"
import img3 from "../../public/images/ulusal-tasit-tanima-sistemi.jpg"
import img4 from "../../public/images/bp-tasitmatik-musteri-hizmetleri.jpg"
import img5 from "../../public/images/ana-sayfa-banner.jpg"
import img6 from "../../public/images/tasitmatik-avantajlari-nelerdir.jpg"

const images = [img1, img2, img3,img4,img5,img6];

const BlogSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    startIndex: 0,
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
        <h2>BLOG YAZILARI</h2>
      <div className='blog-container'>
         <div className=" blog-carousel">
      <p className="blog-carousel__title">OTHER OPTIONS</p>
      <div className="blog-carousel__carousel" ref={emblaRef}>
        <div className="blog-carousel__carousel-container">
          {images.map((image, index) => (
            <div className="blog-carousel__item" key={index}>
              <img
                className="blog-carousel__image"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="carouselbuttondiv">
          <button className="buttonLeftRight" onClick={scrollPrev} type="button">
            <BsChevronLeft size="2rem" color="white" />
          </button>

          <button onClick={scrollNext} className="buttonLeftRight">
            <BsChevronRight size="2rem" color="white" />
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
