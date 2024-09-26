import React from 'react'
import image from "../../../public/images/iletisim-mpmatik.png"
import logo from "../../../public/Logo/mpmatik-siyah.png"
import "../../Styles/ContactGreen.scss"

const ContactGreen = () => {
  return (
    <section className='sectionTercih'>
      <div className='divTercih'>
        <div className='divHalfTercih'>
            <img src={logo} alt='referances' width={300} height={118} />
            <h2 className='h2'>NEDEN MP TAŞITMATİK'İ TERCİH ETMELİSİNİZ?</h2>
            <p>Taşıt akaryakıt tanıma sistemi, araçların yakıt alımını otomatik olarak yöneten bir teknolojidir. Araçların plakalarını ve yakıt pompalarını tanıyarak, sürücülerin yakıt alım sürecini hızlandırır ve kolaylaştırır. Bu sistem sayesinde sürücüler kart veya etiket kullanarak işlemi hızla gerçekleştirebilir, nakit veya kredi kartıyla uğraşmak zorunda kalmaz. Aynı zamanda işletmeler için de yakıt giderlerini izlemek ve yönetmek daha kolay hale gelir. Akaryakıt tanıma sistemi, verimliliği artırırken hatalı işlemleri minimize ederek zamandan ve paradan tasarruf sağlar.</p>
            <p>Firmamızın taşıt akaryakıt tanıma sistemi, modern teknolojiyle donatılmış etkili bir çözümdür. Araç sahiplerine ve işletmelere yakıt alımlarını kolaylaştırarak zaman ve çaba tasarrufu sağlar. Otomatik plaka ve pompa tanıma özellikleri sayesinde kullanıcılar anında işlem yapabilir. Bu sistem, verimliliği artırırken hatalı işlemleri minimize eder ve yakıt giderlerini izlemeyi basit hale getirir. Gerçek zamanlı veri analizi ile yakıt tüketimini daha iyi anlamak ve yönetmek mümkündür. Müşteri memnuniyetini ve işletme verimliliğini yükseltmek için tasarlanmış yenilikçi bir çözümdür.</p>
            <button className='buttonApply'>HEMEN BAŞVUR</button>
        </div>


        <div className='half2'>
            <img src={image} alt='referances' width={315} height={525.56} />
            <h2 className='h2'>sosyal medya'da BİZ!</h2>
            <div className='social-div'></div>
        </div>

      </div>
    </section>
  )
}

export default ContactGreen
