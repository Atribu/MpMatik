import React from 'react';
import "../../Styles/MainPart.scss";
import MainBackground from '../subPageComponents/MainBackground';
import img from "../../../public/images/bp-tasitmatik-musteri-hizmetleri.jpg"

const MainPart = () => {
  return (
    <section className='section-blog'>
      <div className='blog-mainDiv'>
        <span>MEVLANA PETROL</span>
        <h2>BP Taşıtmatik Müşteri Hizmetleri</h2> 

        <div className='div-logo'>
          <img/>
           <span>MP Taşıtmatik</span>
        </div>
        <MainBackground header="" img={img}/>

        <div className='text-div'>
            <p>BP Taşıtmatik olarak geniş bir müşteri hizmetleri ekibi ile sizlere en iyi hizmeti sunmayı hedefliyoruz. Aracınızın yakıt verimliliğini artırmaktan, filo yönetimi konularında destek sağlamaya kadar uzanan geniş bir yelpazede hizmetler sağlamaktayız. Sektördeki deneyimimiz ve uzmanlığımız sayesinde, ihtiyaçlarınıza özel çözümler sunarak filo yönetiminizi optimize etmenize yardımcı oluruz.</p>
            <p>Müşteri memnuniyetine Mevlana Petrol BP Taşıtmatik olarak her zaman önem veriyoruz. Size yardımcı olmak ve sorularınıza hızlı çözümler sunmak için 7/24 erişilebiliriz. Ayrıca, müşteri geri bildirimlerini önemsiyor ve sürekli olarak hizmetlerimizi iyileştirmek için bu geri bildirimlere dayalı olarak çalışıyoruz.</p>

            <div className='content-div'>
                <h3>İçerikler</h3>
                <ul>
                    {/* <li>Yakıt verimliliğini artırmak için öneriler</li>
                    <li>Filo yönetimi konularında destek</li>
                    <li>7/24 erişilebilir müşteri hizmetleri</li>
                    <li>Müşteri geri bildirimlerini önemseme</li> */}
                </ul>
            </div>
        </div>

      </div>
    </section>
  )
}

export default MainPart
