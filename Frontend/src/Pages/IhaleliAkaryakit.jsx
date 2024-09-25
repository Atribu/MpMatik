import React from 'react';
import BlogSection from '../Components/BlogSection'
import RoadSimulation from '../Components/RoadSimulation'
import ContactForm2 from '../Components/ContactForm2'
import Background from '../Components/Background'
import EBülten from '../Components/EBülten'
import MainBackground from '../Components/subPageComponents/MainBackground';
import Teklif from '../Components/subPageComponents/Teklif';
import TextSection from '../Components/subPageComponents/TextSection';
import Satis2 from '../Components/Satis2';
import imageMain from '../../public/images/ihaleli-satis.jpg'

const headersArray=["İHALELİ AKARYAKIT SATIŞI NEDİR?","İHALELİ AKARYAKIT SATIŞININ AVANTAJLARI NELERDİR?","İHALELİ AKARYAKIT SATIŞININ SÜRECİ NASIL İŞLER?","İHALELİ AKARYAKIT SATIŞINDA GELECEĞE BAKIŞ"];
const textsArray= ["İhaleli akaryakıt satışı, enerji tedarikinin belirli bir yöntemi olarak karşımıza çıkar. Bu yöntemde, akaryakıt tedarikçileri ve alıcıları arasında yapılan açık bir teklif süreci vardır. Bu süreç, akaryakıt alımının şeffaf, rekabetçi ve adil bir şekilde gerçekleşmesini sağlar. İhaleli akaryakıt satışı, enerji tedarik zincirinde giderek daha fazla popülerlik kazanmaktadır.",
  "İhaleli akaryakıt satışı, tedarikçilerin rekabetçi bir ortamda tekliflerini sunmasını ve alıcıların en iyi seçeneği seçmesini sağladığı için piyasa şeffaflığını artırır. Aynı zamanda, enerji sektörünün karmaşıklığını ve çeşitliliğini göz önünde bulunduran bir yaklaşım sunar. Bu, alıcıların belirli ihtiyaçlarına ve bütçelerine en uygun akaryakıt tedarikçisini seçmelerine yardımcı olur. İhaleli akaryakıt satışı, tedarikçilerin de kalite, hız ve güvenilirlik gibi faktörlerde sürekli olarak daha iyi hizmet sunma konusundaki motivasyonlarını artırır, bu da enerji tedarik zincirinin güçlenmesine katkı sağlar.",
  "İhaleli akaryakıt satışı, akaryakıt tedarikinin belirli bir yöntemi olarak öne çıkar ve bu yöntem bir dizi avantaj sunar. Bu avantajlar, hem alıcılar hem de tedarikçiler için çeşitli faydalar sağlar. İhaleli akaryakıt satışının sağladığı bu avantajlara daha yakından bakmak, enerji sektöründe daha iyi bir anlayış geliştirmemize yardımcı olacaktır.",
  "İhaleli akaryakıt satışı süreci, akaryakıt tedarikinin bir türüdür ve bu yöntem, tedarikçilerin ve alıcıların arasında şeffaf ve rekabetçi bir platform oluşturur. Bu süreç, akaryakıtın belirli bir organizasyon veya kuruluş tarafından açık bir teklif süreciyle tedarik edilmesini içerir. İhaleli akaryakıt satışı, işlemi daha şeffaf ve adil hale getirerek hem alıcılar hem de tedarikçiler için bir dizi avantaj sunar. Sürecin nasıl işlediğini daha iyi anlamak için daha ayrıntılı olarak göz atalım.",
  "İhaleli akaryakıt satışı, enerji sektöründe geleceğe dönük önemli bir rol oynamaya devam edecektir. Bu yöntem, şeffaf ve rekabetçi bir şekilde akaryakıt tedarikini gerçekleştirmenin yanı sıra alıcıların ihtiyaçlarına daha iyi yanıt verme potansiyeli sunar. Gelecekte, teknolojik gelişmelerin etkisiyle bu süreç daha da optimize edilebilir. Özellikle veri analitiği, yapay zeka ve blokzincir gibi yeni teknolojiler, ihaleli akaryakıt satışını daha verimli ve güvenilir hale getirebilir. Bu, alıcıların daha iyi kararlar almasına ve tedarikçilerin daha iyi hizmet sunmasına yardımcı olabilir.",
  "Ayrıca, enerji sektörünün giderek artan çevresel ve sürdürülebilirlik baskıları altında olduğu bir dönemde ihaleli akaryakıt satışı, daha çevre dostu yakıt kaynaklarına ve enerji verimliliğine yönelik çabaları destekleyebilir. Bu, gelecekte bu yöntemin enerji sektöründe daha fazla benimsenmesini teşvik edebilir. İhaleli akaryakıt satışı, şirketlerin, kuruluşların ve tüketici gruplarının enerji ihtiyaçlarını karşılamak için güvenilir bir yaklaşım sunmaya devam edecektir."
];

const list1=[
  "Rekabetçi Fiyatlar: İhaleli süreç, tedarikçiler arasındaki rekabeti teşvik eder, bu da alıcıların daha iyi fiyatlar elde etmesini sağlar.",
  "Şeffaflık: İhaleli süreç, tüm tekliflerin ve sonuçların açıkça görülebilir olduğu bir ortam sağlar, bu da güveni artırır.",
  "İhtiyaçlara Uygunluk: Alıcılar, ihtiyaçlarına en uygun akaryakıt tedarikçisini seçme esnekliğine sahiptir.",
  "Kalite ve Hizmet Garantisi: İhaleli satış, tedarikçilerin kalite ve hizmet standartlarına uymalarını sağlar.",
];

const list2 =[
  "İlan ve Teklif Aşaması: Alıcılar, akaryakıt ihtiyaçlarını belirler ve bir ihale ilanı yaparlar. Tedarikçiler, bu ilanı inceleyerek tekliflerini sunarlar.",
  "Tekliflerin Değerlendirilmesi: Alıcılar, gelen teklifleri değerlendirirler. Fiyat, kalite ve hizmet gibi faktörler göz önüne alınır.",
  "Kazananın Seçilmesi: Alıcılar, en uygun teklifi veren tedarikçiyi seçerler ve sözleşme imzalarlar.",
  "Uygulama ve İzleme: Seçilen tedarikçi, akaryakıtı belirtilen koşullarda ve miktarlarda sağlar. Alıcılar, tedarikçinin performansını izlerler.",
]

const textSatis2=["Mevlana Petrol, akaryakıt sektöründe edindiği köklü deneyim ve sağlam geçmişi ile müşterilerine yalnızca akaryakıt tedariki sağlamakla kalmıyor, aynı zamanda projelerine destek oluyor. Yıllar içinde elde ettiği tecrübe ve sektördeki geniş bilgi birikimi, müşterilerimize özel ve özelleştirilmiş çözümler sunma yeteneğimizi güçlendiriyor.",
  "Firmamız, Türkiye’nin dört bir yanındaki resmi kurumlar, belediyeler ve özel sektör firmalarının ihaleli akaryakıt ihtiyaçlarını karşılamak için birinci sınıf akaryakıt ürünleri sunmaktadır. Bu ürünler, yüksek kalite standartlarına uygun olarak temin edilmekte ve taşıtmatik sistemimizle kesintisiz bir şekilde tedarik edilmektedir.",
  "Ayrıca, Mevlana Petrol olarak sürdürülebilirlik ve çevresel bilinç konularına da büyük önem vermekteyiz. Bu nedenle, akaryakıtın çevresel etkilerini en aza indirgeme çabalarımızı sürekli olarak güçlendiriyoruz. Çevre dostu yakıtları ve enerji kaynaklarını teşvik ediyor, atık yönetimi konularında en iyi uygulamaları benimseyerek doğal kaynakların korunmasına katkıda bulunuyoruz.",
  "Mevlana Petrol, müşterilerine sadece bir akaryakıt tedarikçisi değil, aynı zamanda güvenilir bir iş ortağı olarak hizmet vermektedir. Müşteri memnuniyetini her zaman en üst düzeyde tutmayı hedefleyen firmamız, uzman ekibi ve geniş dağıtım ağı ile Türkiye’nin dört bir yanındaki müşterilerine kalite, güvenlik ve rekabetçi fiyatlarla ihaleli akaryakıt hizmeti sunmaktadır."
]
const buttonSatis2="TEKLİF AL";

const IhaleliAkaryakit = () => {
  return (
    <div>

      <MainBackground header="İHALELİ AKARYAKIT" img={imageMain}/>
      <Satis2 texts={textSatis2} button={buttonSatis2}/>
      <TextSection headers={headersArray} text={textsArray} list1={list1} list2={list2}/>
      <BlogSection/>
      <ContactForm2/>
      <Background/>
      <EBülten/>
      <RoadSimulation/>

    </div>
  )
}

export default IhaleliAkaryakit
