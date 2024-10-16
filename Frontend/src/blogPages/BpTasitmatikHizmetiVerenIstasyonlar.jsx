/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../Styles/BlogDetails.scss";
import logo from "../../public/Logo/mp-matik-favicon.png";
import MainBackground from "../Components/subPageComponents/MainBackground";
import BreadCrumbs from "../Components/BreadCrumbs";
import img from "../../public/images/bp-tasitmatik-hizmeti-veren-istasyonlar.jpg";
import BlogSection from "../Components/BlogSection";
import Background from "../Components/Background";
import RoadSimulation from "../Components/RoadSimulation";
import ContactForm2 from "../Components/ContactForm2";
import { CiStar } from "react-icons/ci";
import { TbStarFilled } from "react-icons/tb";

const BpTasitmatikHizmetiVerenIstasyonlar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="">
      <div className="blog-div">
        <div className="div-ic">
          <span className="greenText">MEVLANA PETROL</span>
          <h1>BP Taşıtmatik Hizmeti Veren İstasyonlar</h1>

          <div className="logo-div">
            <img src={logo} alt="logo" className="img-logo" />
            <span>MP Taşıtmatik</span>
          </div>
          <BreadCrumbs />

          <MainBackground header="" img={img} />

          <p>
             <span className="spanBold">BP Taşıtmatik</span>, BP istasyonlarında sunulan bir hizmettir ve sürücülere bir dizi avantaj sağlar. Bu hizmetle birlikte BP istasyonlarından yakıt alımı daha kolay, hızlı ve avantajlı hale gelir. <span className="spanBold">BP Taşıtmatik kartı,</span> ise sürücülere yakıt alımlarını kolaylaştıran bir ödeme sistemi ve yakıt alım kartıdır. Bu kart sayesinde kullanıcılar, yakıt alımlarını kolaylıkla yapabilir ve birçok avantajdan faydalanabilirler.
          </p>

          <p>
          BP Taşıtmatik hizmetini Türkiye’deki bütün BP İstasyonları vermektedir. Türkiye genelinde Taşıtmatik hizmetinden yararlanabilir ve dilediğiniz gibi kullanabilirsiniz. BP Taşıtmatik sistemi sizlerin daha avantajlı yakıt almanızı ve yakıt takibinizi kolaylaştırmak için yaratılmıştır. Sizde BP Taşıtmatik hizmetinden yararlanarak tüm istasyonlardan yakıt alımı yapabilirsiniz.
          </p>
          
          <p>
          <span className="spanBold">BP Taşıtmatik hizmeti</span>, sürücülere bir dizi kolaylık sunar. Öncelikle, kart sahipleri BP istasyonlarında sadece kartlarını kullanarak yakıt alımı yapabilirler. Nakit veya kredi kartı gibi farklı ödeme yöntemlerine ihtiyaç duymadan, BP Taşıtmatik kartıyla kolayca yakıt alımı gerçekleştirebilirsiniz. Bu da sürücülerin ödemelerini hızlı ve sorunsuz bir şekilde yapmalarını sağlar.
          </p>

          <div className="accordion">
            <div className="accordion-header" onClick={toggleAccordion}>
              <span>İçerikler</span>
              <span className={`arrow ${isOpen ? "open" : ""}`}>&#9662;</span>
            </div>
            <div className={`accordion-content ${isOpen ? "open" : ''}`}>
              <ul>
                <li className="liAccordion">BP Taşıtmatik Hizmeti ve Avantajları</li>
                <li className="liAccordion">BP Taşıtmatik Kolay ve Güvenli</li>
                <li className="liAccordion">En Yakın BP'yi Bulun</li>
                <li className="liAccordion">BP İstasyonları Hizmetleri</li>
              </ul>
            </div>
          </div>

          <h2>BP Taşıtmatik Hizmeti ve Avantajları</h2>
          <p>
          BP Taşıtmatik hizmeti ayrıca sürücülere çeşitli avantajlar sunar. Kart sahipleri, yakıt alımlarında indirimlerden ve bonus puanlardan faydalanabilirler. BP istasyonlarında yakıt alımı yaptıkça, bonus puanlar kazanabilir ve bu puanları sonraki yakıt alımlarında kullanabilirsiniz. Ayrıca, BP Taşıtmatik kartıyla yapılan her yakıt alımında indirimlerden yararlanabilirsiniz. Bu da sürücülere yakıt masraflarında tasarruf etme imkanı sağlar.
          </p>
          <p>
          <span className="spanBold">BP Taşıtmatik hizmeti veren istasyonlar</span>da ayrıca ek hizmetler sunulur. Araç bakım ve onarım hizmetleri gibi ek hizmetlerden faydalanabilirsiniz. BP Taşıtmatik kartıyla yakıt alırken aynı zamanda aracınızın bakımını da yaptırabilirsiniz. Bu da sürücülerin zaman ve enerji tasarrufu yapmalarını sağlar.
          </p>

          <h2>BP Taşıtmatik Kolay ve Güvenli</h2>
          <p>
          <span className="spanBold">BP Taşıtmatik hizmeti veren istasyonlar</span>, kullanıcılarına güvenli bir alışveriş deneyimi sunar. Kart kullanımı kolay ve güvenlidir. Kartınızı kaybettiğinizde veya çalındığında hızlı bir şekilde iptal ettirebilir ve yeni bir kart talep edebilirsiniz. Böylece kartınızın güvende olduğunu ve kötü niyetli kişilerin kartınızı kullanmasını engelleyebileceğinizi bilirsiniz.
          </p>
          <p>BP Taşıtmatik hizmeti veren istasyonlar ayrıca sürdürülebilirlik konusunda da önemli bir rol oynar. BP, çevreye duyarlı bir şekilde faaliyet göstermeyi hedefleyen bir şirkettir ve bu hedefi BP Taşıtmatik hizmetiyle desteklemektedir. BP istasyonlarında sunulan yakıtlar çevreye daha az zarar veren ve daha temiz bir yakıt seçeneği sunar. Bu da sürücülerin çevreye duyarlı bir şekilde seyahat etmelerini sağlar.</p>

          <h2>En Yakın BP’yi Bulun</h2>
          <p>
          BP, dünya genelinde birçok benzin istasyonuna sahip olan bir akaryakıt ve enerji şirketidir. BP istasyonları, sürücülere bir dizi hizmet ve avantaj sunar. En yakın BP istasyonunu bulmak için birkaç seçenek vardır. İlk olarak, BP’nin resmi web sitesini ziyaret edebilirsiniz. Web sitesinde, “İstasyonlarımızı Bul” kısmından ilgili alana erişebilirsiniz. Ayrıca, BP’nin mobil uygulamasını indirerek de en yakın istasyonu bulabilirsiniz. Mobil uygulama konumunuzu otomatik olarak algılar ve size <span className="spanBold">en yakın BP istasyonları</span>nı gösterir.
          </p>
          <p>BP istasyonlarında bir dizi hizmet sunulur. Yakıt alımı dışında, BP istasyonlarında mini marketler, kafe ve tuvaletler gibi ek hizmetler de bulunabilir. Bu hizmetler, sürücülerin yakıt alırken ihtiyaç duydukları diğer hizmetleri de karşılamalarını sağlar.</p>
          <p>BP istasyonlarının kullanımı oldukça basittir. İstasyona varıldığında, yakıt almak istediğiniz pompayı seçmeniz gerekir. Ardından, yakıt türünü seçip pompanın ekranındaki talimatları takip etmeniz yeterlidir. <span className="spanBold">BP Taşıtmatik kartı</span> kullanıyorsanız, kartınızı pompa üzerindeki okuyucuya yerleştirerek ödemenizi gerçekleştirebilirsiniz.</p>


          <h2>BP İstasyonları Hizmetleri</h2>
          <p>
          BP istasyonlarında sunulan hizmetler ve avantajlar, sürücüler için birçok fayda sağlar. Yakıt alımlarında indirimlerden ve bonus puanlardan faydalanabilirsiniz. Ayrıca, <span className="spanBold">BP Taşıtmatik kartı</span> kullanarak yapacağınız her yakıt alımında indirimlerden yararlanabilir ve bonus puanlar kazanabilirsiniz. Bu da sürücülere tasarruf imkanı sağlar.
          </p>
          <p>Sonuç olarak, <span className="spanBold">BP Taşıtmatik hizmeti veren istasyonlar</span> sürücülere bir dizi avantaj sunar. Kart sahipleri, BP istasyonlarında kolaylıkla yakıt alımı yapabilir ve birçok avantajdan faydalanabilirler. Yakıt alımlarında indirimler, bonus puanlar ve ek hizmetler gibi avantajlar sürücülere tasarruf sağlar. Ayrıca, BP Taşıtmatik kartı kullanımı kolay, güvenli ve çevreye duyarlı bir seçenektir. BP Taşıtmatik hizmeti veren istasyonlar sürücülere güvenli, hızlı ve avantajlı bir alışveriş deneyimi sunar.</p>

          <div className="starDiv">
          <div><TbStarFilled color="#ffa502" size={30}/>
          <TbStarFilled color="#ffa502" size={30}/>
          <TbStarFilled color="#ffa502" size={30}/>
          <TbStarFilled color="#ffa502" size={30}/>
          <TbStarFilled color="#ffa502" size={30}/></div>
          <p>5/5 - (4 Oy)</p>
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
}

export default BpTasitmatikHizmetiVerenIstasyonlar