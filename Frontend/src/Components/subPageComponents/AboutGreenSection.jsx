import React,{useEffect} from 'react'
import "../../Styles/AboutGreenSection.scss"
import logo from "../../../public/Logo/mpmatik-siyah.png"

const AboutGreenSection = () => {

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
    <section className='mainDiv'>
      <div className='divtext-green slide-up'>
        <div className='divLogo'><img src={logo} alt='logo' width={350} height={91.23}/></div>
        <h3>BP Taşıtmatik Nedir?</h3>
        <p> BP Taşıtmatik, sürücülere akaryakıt alımlarını kolaylaştıran ve daha avantajlı hale getiren bir hizmettir. Taşıtmatik kart sahipleri, BP istasyonlarında kolayca ödeme yapabilir, aynı zamanda özel indirimler ve avantajlardan yararlanabilirler. BP Taşıtmatik ile yakıt masraflarınızı daha iyi yönetebilir ve işlerinizi daha verimli hale getirebilirsiniz.</p>

        <h3>Neden mptasitmatik.com?</h3>
        <p>Mptasitmatik.com, BP Taşıtmatik hizmetlerini daha erişilebilir hale getirmek ve sürücülerimize en iyi deneyimi sunmak için kurulmuştur. İnternet üzerinden hızlı ve güvenli bir şekilde BP Taşıtmatik kart başvurusu yapabilir ve kartınızı hemen kullanmaya başlayabilirsiniz. Ayrıca, BP Taşıtmatik kartınızı yönetmek ve kampanyalardan haberdar olmak için kullanabileceğiniz bir dizi çevrimiçi araç sunuyoruz.</p>
        
        <h3>Nasıl Çalışırız?</h3>
        <p>Mptasitmatik.com olarak, müşteri memnuniyetini her şeyin önünde tutuyoruz. Size en iyi hizmeti sunmak için sürekli çalışıyor ve ihtiyaçlarınıza uygun çözümler sunmaktan mutluluk duyuyoruz. BP Taşıtmatik kart başvurunuzdan, kartınızı kullanmaya başladığınız anın ötesine kadar, size profesyonel ve hızlı destek sunuyoruz.</p>

        <h3>İletişim</h3>
        <p>Sorularınızı, geri bildirimlerinizi veya taleplerinizi bizimle paylaşmak için her zaman buradayız. İletişim sayfamızı ziyaret ederek bize ulaşabilirsiniz.

Mptasitmatik.com olarak, akaryakıt deneyiminizi daha iyi hale getirmeniz için buradayız. BP Taşıtmatik ile sürücülerimize avantajlı bir yolculuk sunmayı amaçlıyoruz. Bize katılın ve akaryakıt harcamalarınızı daha verimli bir şekilde yönetmeye başlayın.</p>
      </div>
    </section>
  )
}

export default AboutGreenSection
