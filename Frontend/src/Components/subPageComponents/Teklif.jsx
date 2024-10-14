import React, { useState,useEffect }  from 'react'
import "../../Styles/Teklif.scss"
import { IoIosCard } from "react-icons/io";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { MdCheck } from "react-icons/md";
import { BiMinus,BiPlus } from "react-icons/bi";

const Teklif = () => {
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


// buton açılış 
    const [activeContent, setActiveContent] = useState(null);

    const handleClick = (id) => {
      setActiveContent(activeContent === id ? null : id);
    };

  return (
    <section className='background-container ' >
        <div className='overlay'></div>
      <div className='container slide-upSatis'>
        <div className='subContainer1'>
            <p >
            Mevlana Petrol, <span>toptan akaryakıt</span> sektöründe uzmanlaşmış bir şirket olarak, kurumsal müşterilerin toplu akaryakıt ihtiyaçlarını karşılamak amacıyla faaliyet göstermektedir. Şirketimiz, kaliteli hizmet, zamanında teslimat ve müşteri memnuniyetinin, akaryakıt sektöründeki başarının temel taşları olduğunun bilincindedir. Bu nedenle, her zaman ve her yerde kesintisiz enerji kaynağı sunma anlayışıyla, müşterilerine ihtiyaç duydukları ürünleri en üst düzeyde hizmetle sunmaktadır.</p>
            <p>Mevlana Petrol, müşterilerine komple bir çözüm ortağı olmanın ötesine geçerek, müşteri memnuniyetini en üst düzeyde sağlamayı öncelikli hedef olarak belirlemiştir. Firmamız, müşterilerine sunduğu akaryakıt ürünlerini BP, P.Ofisi, Socar ve Tüpraş gibi sektörün önde gelen markalarının kalitesi ve 50 yıllık güvencesiyle sunmaktadır.</p>
            <p>Lojistik ağını her geçen gün güçlendiren Mevlana Petrol, inşaat, hazır beton, madencilik, lojistik, nakliye, vinç işletmeleri, yol müteahhitleri, hafriyat, alt yapı, kum ve taş ocakları, kamu kuruluşları ve tekstil firmaları gibi birçok sektörde faaliyet gösteren firmalara benzin, dizel, fueloil, kalorifer yakıtı, gazyağı gibi akaryakıt kategorilerinde ürünler temin etmektedir. Bu ürünleri, ilgili tesisatlarından mühürlü olarak teslim ederken, ürün teslim fişi, kantar fişi ve analiz raporu gibi belgelerle birlikte müşteri adresine güvenli bir şekilde ulaştırmaktadır.</p>
            <p>Firmanızın <span>toptan akaryakıt</span> ihtiyacını karşılamak ve kaliteli hizmetten yararlanmak istiyorsanız, Mevlana Petrol ile hemen iletişime geçebilirsiniz. Konusunda uzmanlaşmış ekibimiz, size en uygun şartlarda teklif sunacak ve sizi, Mevlana Petrol “Memnun müşteriler ailesine” katılmanız için memnuniyetle karşılayacaktır.</p>
            <button className='buttonTeklif'><a href='toptan-akaryakit/#teklif'>TEKLİF AL</a></button>
        </div>

        <div className='subContainer2'>
      <div className='button-container'>
        <button
           className={`buttonsGrayTeklif ${activeContent === 'content1' ? 'active' : ''}`}
          onClick={() => handleClick('content1')}
        > 
        <RiArrowLeftRightFill size={20}/>
          GÜVENLİK NAKLİYE
         {activeContent === 'content1' ?  <BiMinus size={30}/> :  <BiPlus size={30}/>}
        </button>
        <div
          className={`contentButtons ${activeContent === 'content1' ? 'open' : ''}`}
          id='content1'
        >
          <p>Mevlana Petrol, siparişlerini en geç 24 saat içerisinde teslimini gerçekleştirerek müşterilerinin iş akışını sorunsuz devam etmesini sağlamaktadır.
          Müşerilerimizin, değerli referansları ile her geçen gün porföyümüz büyümeye devam etmektedir</p>
        </div>
      </div>
      <div className='button-container'>
        <button
           className={`buttonsGrayTeklif ${activeContent === 'content2' ? 'active' : ''}`}
          onClick={() => handleClick('content2')}
        >
          <IoIosCard size={20}/>
          ÖDEME KOLAYLIĞI
          {activeContent === 'content2' ?  <BiMinus size={30}/> :  <BiPlus size={30}/>}
        </button>
        <div
          className={`contentButtons ${activeContent === 'content2' ? 'open' : ''}`}
          id='content2'
        >
          <p>Mevlana Petrol müşterileri aldıkları ürünün faturasını ve tüm resmi evraklarını aynı gün eksiksiz olarak alır ve finans uzmanı personelleri ile sorunsuz bir şekilde ödemesini gerçekleştirir.</p>
        </div>
      </div>
      <div className='button-container'>
        <button
        className={`buttonsGrayTeklif ${activeContent === 'content3' ? 'active' : ''}`}
          onClick={() => handleClick('content3')}
        > <MdCheck size={20}/>
          KUSURSUZ HİZMET
          {activeContent === 'content3' ?  <BiMinus size={30}/> :  <BiPlus size={30}/>}
        </button>
        <div
          className={`contentButtons ${activeContent === 'content3' ? 'open' : ''}`}
          id='content3'
        >
          <p>Mevlana Petrol ile çalışma kararı alan tüm müşterilerimizin öncelikle ürün sevkiyatı yapılmadan önce akaryakıt tanklarının temizliğini titizlik ile profesyonel ekibimiz tarafından temizlenmektedir. Eğerki tank, pompa veya otomasyon ekipmanlarında bir sorun var ise gerekli yönlendirmeler ile onarımları ayrıca sağlanmaktadır.</p>
        </div>
      </div>
    </div>

      </div>
    </section>
  )
}

export default Teklif