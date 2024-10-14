/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Styles/BlogDetails.scss";
import logo from "../../public/Logo/mp-matik-favicon.png";
import MainBackground from "../Components/subPageComponents/MainBackground";
import BreadCrumbs from "../Components/BreadCrumbs";
import img from "../../public/images/tasitmatik-avantajlari-nelerdir.jpg";
import BlogSection from "../Components/BlogSection";
import Background from "../Components/Background";
import RoadSimulation from "../Components/RoadSimulation";
import ContactForm2 from "../Components/ContactForm2";
import { CiStar } from "react-icons/ci";
import { TbStarFilled } from "react-icons/tb";

const BlogDetails = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };


  return (
    <main className="">
      <div className="blog-div">
        <div className="div-ic">
          <span className="greenText">MEVLANA PETROL</span>
          <h1>BP Taşıtmatik Avantajları Nelerdir?</h1>

          <div className="logo-div">
            <img src={logo} alt="logo" className="img-logo" />
            <span>MP Taşıtmatik</span>
          </div>
          <BreadCrumbs />

          <MainBackground header="" img={img} />

          <p>
            <span className="spanBold">BP Taşıtmatik kartı,</span> sürücülere
            yakıt alımlarını kolaylaştıran bir ödeme sistemi ve yakıt alım
            kartıdır. Bu kart sayesinde kullanıcılar, yakıt alımlarını
            kolaylıkla yapabilir ve birçok avantajdan faydalanabilirler. BP
            Taşıtmatik kartı, sürücülere özel indirimler, bonus puanlar, ek
            hizmetler ve araç bakım ve onarım indirimleri gibi bir dizi avantaj
            sunar. Ayrıca, kart sahipleri güvenli bir şekilde yakıt alımlarını
            gerçekleştirebilir ve kartlarını kaybettiklerinde hızlı bir şekilde
            iptal ettirebilirler. BP Taşıtmatik kartı, sürücülerin yakıt
            alımlarını daha sorunsuz ve avantajlı hale getirmek için
            tasarlanmıştır. BP Taşıtmatik kullanarak tüm BP istasyonlarından
            daha verimli şekilde faydalanabilirsiniz. BP’nin sağladığı özel
            indirimler, kampanyalar, fırsatlar tam size göre! Bu avantajlar
            akaryakıt taşıt tanıma sistemleri için vazgeçilmezdir. Tüm
            Türkiye’de hizmet veren BP İstasyonlarımızda BP Taşıtmatik kartını
            kullanabilir, muhteşem avantajlardan faydalanabilirsiniz.
          </p>

          <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
              <span>İçerikler</span>
              <span className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
            </div>
            <div className={`accordion-content ${isOpen ? "open" : ""}`}>
              <span> gethtyj htentrh</span>
              <ul>
                <li>BP Taşıtmatik Farkları Nelerdir?</li>
                <li>BP Taşıtmatik`in Sunduğu Önemli Avantajlar</li>
                <li>Özel İndirimler</li>
                <li>Bonus Puanlar</li>
                <li>Ek Hizmetler</li>
                <li>Özel Hizmetler</li>
                <li>Güvenlik ve Kolaylık</li>
              </ul>
            </div>
          </div>

          <h2>BP Taşıtmatik Farkları Nelerdir?</h2>
          <p>
            BP Taşıtmatik Kartının diğer benzin istasyonu kartlarından farklı
            bazı özellikleri bulunmaktadır. Öncelikle, BP Taşıtmatik Kartı,
            sadece BP istasyonlarında geçerlidir ve bu istasyonlarda özel
            avantajlar sunar. Bu avantajlar arasında yakıt indirimleri, bonus
            puanlar, ek hizmetler ve araç bakım ve onarım indirimleri
            bulunmaktadır. Diğer bir fark ise kartın kullanım kolaylığıdır. BP
            Taşıtmatik Kartı, sürücülere yakıt alımlarını kolaylaştırmak için
            tasarlanmıştır ve kullanıcılar kartlarını hızlı bir şekilde
            kullanabilirler. Ayrıca, kart sahipleri kartlarını kaybettiklerinde
            hızlı bir şekilde iptal ettirebilirler. Bu özellikler, BP Taşıtmatik
            Kartını diğer benzin istasyonu kartlarından farklı kılarak
            sürücülere daha fazla kolaylık ve avantaj sunar. BP Taşıtmatik kartı
            muhakkak kullanılması gereken akaryakıt kontrol kartıdır. Bir çok
            fırsattan ve avantajdan yararlanmanıza fayda sağlayan bu kart
            sayesinde diğer taşıt takip kartlarından daha büyük farklara sahip
            olacaksınız ve en uygun fiyatlarla, en iyi hizmetten
            yararlanabileceksiniz. Taşıt takip sistemleri her geçen gün daha
            fazla önem kazanmaktadır. BP Taşıtmatik ise en çok tercih edilen
            akaryakıt kart takip sistemi olarak dikkat çekmektedir.
          </p>

          <h2>BP Taşıtmatik’in Sunduğu Önemli Avantajlar</h2>
          <p>
            <span className="spanBold">BP Taşıtmatik kartı,</span> BP tarafından
            sunulan bir ödeme sistemi ve yakıt alım kartıdır. Bu kart sayesinde
            kullanıcılar, yakıt alımlarını kolaylıkla yapabilir ve birçok
            avantajdan faydalanabilirler. İşte BP Taşıtmatik’in sunduğu
            avantajlardan bazıları:
          </p>

          <h2>Özel İndirimler</h2>
          <p>
            BP Taşıtmatik kart sahipleri, yakıt alımlarında özel indirimlerden
            yararlanabilirler. BP, düzenli müşterilerine özel olarak tasarlanmış
            indirimler sunarak sürücülerin yakıt masraflarını düşürmelerine
            yardımcı olur. Bu sayede sürücüler, yakıt alımlarında önemli ölçüde
            tasarruf edebilirler.
          </p>

          <h2>Bonus Puanlar</h2>
          <p>
            BP Taşıtmatik kartıyla yapılan her yakıt alımı, kart sahiplerine
            bonus puanlar kazandırır. Bu puanlar daha sonra indirimler, ücretsiz
            yakıt veya diğer BP ürünlerinde kullanılabilir. Sürücüler, sadakat
            programı sayesinde ek avantajlar elde edebilir ve daha fazla
            tasarruf sağlayabilirler.
          </p>

          <h2>Ek Hizmetler</h2>
          <p>
            BP Taşıtmatik kartıyla birlikte sunulan ek hizmetler, sürücülere
            büyük kolaylık sağlar. Örneğin, kullanıcılar mobil uygulama
            üzerinden kart bakiyesini kontrol edebilir, yakıt istasyonlarını
            bulabilir ve harcamalarını takip edebilir. Böylece, sürücüler yakıt
            alımlarını daha iyi yönetebilir ve bütçelerini daha etkin bir
            şekilde kontrol edebilirler.
          </p>

          <h2>Özel Hizmetler</h2>
          <p>
            BP Taşıtmatik kartı sahipleri, anlaşmalı servis noktalarında araç
            bakım ve onarım hizmetlerinden özel indirimlerden faydalanabilirler.
            Bu sayede sürücüler, araçlarının bakım ve onarım masraflarında da
            tasarruf edebilirler. Ayrıca, kart sahiplerine özel olarak sunulan
            diğer hizmetlerden de yararlanma imkanı bulunmaktadır.
          </p>

          <h2>Güvenlik ve Kolaylık</h2>
          <p>
            BP Taşıtmatik kartı, sürücülere güvenli ve kolay bir ödeme yöntemi
            sunar. Nakit para taşıma derdi olmadan, kart sahipleri güvenli bir
            şekilde yakıt alımlarını gerçekleştirebilirler. Ayrıca, kartın
            kaybolması veya çalınması durumunda hızlı ve etkili bir şekilde
            kartın iptal edilmesi mümkündür. Bu da sürücülere huzur ve güvenlik
            sağlar. Sonuç olarak,{" "}
            <span className="spanBold">BP Taşıtmatik kartı</span> sürücülere
            birçok avantaj sunan bir ödeme sistemi ve yakıt alım kartıdır. Özel
            indirimler, bonus puanlar, ek hizmetler ve güvenlik gibi
            özellikleriyle sürücülerin yakıt alımlarını kolaylaştırırken aynı
            zamanda ekonomik ve pratik bir seçenek sunar. BP Taşıtmatik,
            sürücülerin yakıt alımlarını daha sorunsuz ve avantajlı hale
            getirmek için tasarlanmıştır.
          </p>

          <div className="starDiv">
          <div><TbStarFilled color="#ffa502" size={30}/>
          <TbStarFilled color="#ffa502" size={30}/>
          <TbStarFilled color="#ffa502" size={30}/>
          <TbStarFilled color="#ffa502" size={30}/>
          <TbStarFilled color="#ffa502" size={30}/></div>
          <p>5/5 - (1 Oy)</p>
          </div>

          <div className="divLineLogo">
            <div className="line"></div>
            <img src={logo} alt="logo" width={80} height={80} />
            <div className="line"></div>
          </div>
          <text className="textLogo">MP Taşıtmatik</text>
          <div className="line2"></div>
        </div>
      </div>
      <div className="divGreen">
      <BlogSection/>
      <ContactForm2/>
      <Background/> 
      <RoadSimulation/>
      </div>
    </main>
  );
};

export default BlogDetails;
