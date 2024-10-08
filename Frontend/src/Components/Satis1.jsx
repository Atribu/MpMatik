import React, { useState,useEffect }  from 'react'
import "../Styles/Satis1.scss"

const Satis1 = () => {
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
    <section className='background-containerSatis ' >
        <div className='overlay'></div>
      <div className='container '>
        <div className='subContainer1 slide-upSatis'>
            <h2>Toptan Akaryakıt Satışı</h2>
            <p >Mevlana Petrol, toptan akaryakıt konusunda firmaların profesyonel çözüm ortağı olup, toplu akaryakıt tüketimi olan şirket ve kuruluşların, bu konudaki ihtiyaçlarını giderir.
Akaryakıt sektöründe başarının; kaliteli hizmet, zamanında teslimat ve müşteri memnuniyeti olduğu bilinciyle, her zaman ve her yerde kesintisiz enerji kaynağı anlayışıyla, müşterilerine ihtiyacı olan ürünleri en iyi hizmetle sunan Mevlana Petrol, ilgili tesisatlarından temin ettiği akaryakıtları, mühürlü olarak, ürün teslim fişi, kantar fişi, analiz raporu ile birlikte teslim adresine sevk eder.</p>
            <button className='buttonMoreSatis1'>DAHA FAZLA BİLGİ AL</button>
        </div>

        <div className='subContainer2 slide-upSatis'>
      <div className='button-container'>
        <button
           className={`buttonsGray ${activeContent === 'content1' ? 'active' : ''}`}
          onClick={() => handleClick('content1')}
        >
          GÜVENLİK NAKLİYE
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
           className={`buttonsGray ${activeContent === 'content2' ? 'active' : ''}`}
          onClick={() => handleClick('content2')}
        >
          ÖDEME KOLAYLIĞI
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
        className={`buttonsGray ${activeContent === 'content3' ? 'active' : ''}`}
          onClick={() => handleClick('content3')}
        >
          KUSURSUZ HİZMET
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

export default Satis1
