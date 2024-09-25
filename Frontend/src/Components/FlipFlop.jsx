import React from 'react'
import "../Styles/FlipFlop.scss"
import yakittasarrufusistem from "../../public/images/yakit-tasarrufu-sistem.jpg"
import maliyetkontrolusistem from "../../public/images/maliyet-kontrolu-sistem.jpg"
import seyahatplanlamasi from "../../public/images/seyahat-planlamasi-1.jpg"
import yakithirsizi from "../../public/images/yakit-hirsizi.jpg"
import verianalizi from "../../public/images/veri-analizi.jpg"
import faturakolayligi from "../../public/images/fatura-kolayligi-sistem.jpg"

const cardData = [
    {
        id: 1,
        image: yakittasarrufusistem,
        title: "Yakıt Tasarrufu",
        description: "BP Taşıtmatik Sistemi, araçlarınızın yakıt verimliliğini artırmanıza yardımcı olur. Yakıt tüketimi ile ilgili verileri izleyerek, gereksiz motor çalıştırmalardan kaçınabilir ve yakıt israfını önleyebilirsiniz.",
    },
    {
        id: 2,
        image: maliyetkontrolusistem,
        title: "Maliyet Kontrolü",
        description: "BP Taşıtmatik sistemi, akaryakıt harcamalarınızı daha iyi yönetmenize yardımcı olur. Araçlarınızın ne kadar yakıt kullandığını ve bu yakıtın maliyetini izleyerek, bütçenizi kontrol altında tutabilirsiniz.",
    },
    {
        id: 3,
        image: seyahatplanlamasi,
        title: "Seyahat Planlaması",
        description: "BP Taşıtmatik sistem ile araçlar sisteme dahil olan tüm BP istasyonlarından ücret ödemeden yakıt alabilir. Yakıt doldurma sırasında ödeme veya fatura ile zaman kaybetmeyi önleyebilirsiniz.",
    },
    {
        id: 4,
        image: yakithirsizi,
        title: "Hırsızlık ve Güvenlik",
        description: "BP Taşıtmatik sistemi ile araçlarınızın yakıt alım hareketini izleyebilir ve herhangi bir hırsızlık teşebbüsünün önüne geçilebilir. Bu, taşıt güvenliğini artırabilir.",
    },
    {
        id: 5,
        image: verianalizi,
        title: "Veri Analizi",
        description: "BP Taşıtmatik, verileri toplar, analiz eder ve raporlar oluşturur. Bu sayede işletmenizin taşıt performansını daha iyi anlayabilir ve kararlarınızı veriye dayalı olarak alabilirsiniz.",
    },
    {
        id: 6,
        image: faturakolayligi,
        title: "Fatura Kolaylığı",
        description: "Her yakıt alımı sonrasında fatura almak veya fiş toplamak gerekmezken, firmaların taleplerine göre aylık ya da 10 günlük periyotlar ile faturalandırma gerçekleştirilebilmektedir.",
    }

]

const FlipFlop = () => {
  return (
    <section className='flip-flop-section'>
        <h1>BP Taşıtmatik Avantajları</h1>
        <div className='carousel'>
            {cardData.map((card) =>(
                <div className='card' key={card.id}>
                    <div className='card-inner'>
                        <div className='card-front'>
                            <img src={card.image} alt={`Resim ${card.id}`} />
                        </div>
                        <div className='card-back'>
                            <div className='card-back-content'>
                                <h2>{card.title}</h2>
                                <p>{card.description}</p>
                            </div>
                        </div>    
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default FlipFlop