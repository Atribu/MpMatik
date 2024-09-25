import React from 'react'
import image from "../../../public/images/tasit-tanıma.png"
import "../../Styles/TasitTanimaSection.scss"

const TasitTanimaSection = () => {
  return (
    <section className='sectioncontainer'>
        <div className='divcontainer'>
            <div className='divHalf'>
                <h2>Taşıt Tanıma Sistemi</h2>
                <p>Taşıtmatik, araçların yakıt alımını otomatik olarak yöneten bir teknolojidir. Araçların plakalarını otomatik tanıyarak ve pompa tanıma özellikleri sayesinde sürücülerin yakıt alım sürecini hızlandırır ve kullanıcılar anında işlem yapabilir.</p>
                <p>Bu sistem sayesinde sürücüler araçlarından inmeden akaryakıt alımlarını hızla gerçekleştirebilir, nakit ödeme veya kredi kartı ödemesiyle uğraşmak zorunda kalmaz. Aynı zamanda işletmeler için de yakıt giderlerini izlemek ve yönetmek daha kolay hale gelir. Taşıtmatik, araçlarınızın yakıt verimliliğini artırırken hatalı işlemleri minimize ederek zamandan ve paradan tasarruf sağlar. Yakıt giderlerini izlemeyi basit hale getirir. Gerçek zamanlı veri analizi ile yakıt tüketimini daha iyi anlamak ve yönetmek mümkündür. Müşteri memnuniyetini ve işletme verimliliğini yükseltmek için tasarlanmış yenilikçi bir çözümdür.</p>
                <p>Taşıtmatik sistemi, genellikle ticari veya lojistik amaçlarla kullanılan taşıtların akaryakıt tüketimini izlemek ve yönetmek için kullanılan bir teknoloji ve sistemdir. Bu sistem, taşıtın ne kadar akaryakıt kullandığını, ne zaman ve nerede yakıt doldurduğunu izleyerek hem maliyetleri azaltır hem de yakıt verimliliğini artırır.</p>
                <p>BP Taşıtmatik, taşıt filolarını daha etkili ve verimli bir şekilde yönetmek isteyen işletmeler için önemli bir araçtır. Bu hizmet, işletmelerin maliyetleri azaltmalarına, verimliliği artırmalarına ve çevresel etkileri azaltmalarına yardımcı olur.</p>
                <button className='buttonApply'><span>HEMEN BAŞVUR</span></button>
            </div>

            <div className='divHalfImage'>
            <img className='imageRes' src={image} alt='tasittanıma' width={image.width} height={image.height}/>
            </div>
        </div>
    </section>
  )
}

export default TasitTanimaSection
