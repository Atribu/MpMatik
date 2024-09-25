import React,{useEffect} from 'react'
import "../../Styles/ReferancesText.scss"

const ReferancesTextSection = () => {

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
    const hiddenElements = document.querySelectorAll('.slide-up');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup işlemi: Bileşen kaldırıldığında gözlemlemeyi bırakır
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className='mainTextDiv'>
      <div className='divtext-iki slide-up'>
        <h2>Neden BP Taşıtmatik Kullanmalısın?</h2>
        <p><span>Verimlilik ve Tasarruf:</span> Akaryakıt tanıma sistemleri, araçların ne kadar yakıt tükettiğini ve ne zaman dolum yapılması gerektiğini daha hassas bir şekilde takip etmenizi sağlar. Bu, gereksiz yakıt harcamalarını önler ve yakıt tasarrufu sağlar.</p>
        <p><span>Maliyet Kontrolü:</span> İşletmeler için önemli bir faktör olan yakıt maliyetlerini kontrol etmek için bu sistemler kullanılır. Yakıtın nasıl harcandığını izlemek, gereksiz yakıt kullanımını tespit etmek ve böylece maliyetleri düşürmek mümkün olabilir.</p>
        <p><span>Envanter Yönetimi:</span>Akaryakıt tanıma sistemleri, araçların ne kadar yakıt aldığını ve ne zaman yakıt alındığını kaydederek envanter yönetimini kolaylaştırır. Bu sayede yakıt hırsızlığı veya gereksiz kullanımı tespit etmek daha kolay olabilir.</p>
        <p><span>Veri Analizi:</span> Bu sistemler, araçların yakıt verimliliği ve tüketimi hakkında veri toplar. Bu veriler işlenerek araçların performansı analiz edilebilir, gereksiz yakıt tüketimi olan araçlar belirlenebilir ve işletme süreçleri iyileştirilebilir.</p>
        <p><span>Çevresel Etki:</span> Daha verimli yakıt kullanımı, doğal kaynakların daha az tüketilmesi anlamına gelir ve böylece çevresel etki azaltılabilir.</p>
        <p><span>Güvenlik ve Denetim:</span> Akaryakıt tanıma sistemleri, her aracın ne kadar yakıt aldığını kaydettiği için işletmeler için güvenlik ve denetim açısından faydalıdır. Yakıt alımlarını ve kullanımını izlemek, yanlış veya hatalı işlemleri tespit etmek için kullanılabilir.</p>
        <p><span>Kolaylık ve Otomasyon: </span>Otomasyon sayesinde sürücülerin yakıt alımı için ayrıca belge düzenlemesi veya işlem yapması gerekmez. Bu da zaman ve iş yükünden tasarruf sağlar.</p>
        <button className='buttonApply'><span>HEMEN BAŞVUR</span></button>
      </div>
    </section>
  )
}

export default ReferancesTextSection
