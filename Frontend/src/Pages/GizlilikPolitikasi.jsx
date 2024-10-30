import React, { useState } from "react";
import { Helmet } from "react-helmet";
import BlogSection from "../Components/BlogSection";
import RoadSimulation from "../Components/RoadSimulation";
import ContactForm2 from "../Components/ContactForm2";
import Background from "../Components/Background";
import "../Styles/GizlilikPolitikasi.scss";

const GizlilikPolitikasi = () => {
  const [selectedContent, setSelectedContent] = useState(0);
  
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive); // Tıklanınca aktif durumu değiştir
  };

  const buttons=["KVKK Başvuru Formu","KVKK Saklama ve İmha Politikası","KVKK Politikası","Aydınlata Metni","KVKK Kurulu İç Yönerge","Gizlilik ve Çerezler Politikası"]

  // Butonlara göre gösterilecek içerikler
  const contents = [
    <div className="content-box">
      <p>Kişisel verilerinizin şirketimiz tarafından işlenmiş olması halinde taleplerinizi iletmek üzere <span>“İletişim Formunu”</span> kullanarak başvuruda bulanabilirsiniz.</p>
    </div>,

    <div className="content-box">
     <h3>KVK SAKLAMA VE İMHA POLİTİKASI</h3>
     <h4>MEVLANA PETROL ÜRÜNLERİ TURİZM TAŞIMACILIK PAZARLAMA İNŞAAT TİCARET LİMİTED ŞİRKETİ </h4>
     <h4>KİŞİSEL VERİ SAKLAMA VE İMHA POLİTİKASI</h4>
     <h5>MADDE 1- AMAÇ</h5>
     <p>Kişisel verileri saklama ve imha politikası Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi tarafından işlenen kişisel verilerin saklanması ve imhasına yönelik iş ve işlemler konusundaki usulleri ve esasları belirlemek amacıyla hazırlanmıştır.</p>
     <h5>MADDE 2- KAPSAM</h5>
     <p>Şirket çalışanlarına, çalışan adaylarına, stajyerlere, ürün ve hizmet alanlara, potansiyel müşterilere, ortaklara, ziyaretçilere, tedarikçilere ve diğer üçüncü kişilere ait kişisel veriler bu politika kapsamındadır. </p>
     <p>Şirketin sahip olduğu ya da şirket tarafından yönetilen kişisel verilerin işlendiği tüm kayıt ortamları ve kişisel veri işlenmesine yönelik faaliyetlerde bu politika uygulanır.</p>
     <h5>MADDE 3- TANIMLAR</h5>
     <div>
      <h5>Alıcı grubu</h5>
      <p> : Veri sorumlusu tarafından kişisel verilerin aktarıldığı gerçek veya tüzel kişi kategorisi.</p>
    </div>

    <div>
      <h5>Açık rıza</h5>
      <p> : Belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rıza</p>
    </div>

    <div>
      <h5>Anonim Hale Getirme</h5>
      <p> : Kişisel verilerin, başka verilerle eşleştirilerek dahi hiçbir surette kimliği belirli veya belirlenebilir bir gerçek kişiyle ilişkilendirilemeyecek hale getirilmesi</p>
    </div>

    <div>
      <h5>Çalışan</h5>
      <p>  : Şirket personeli</p>
    </div>

    <div>
      <h5>Elektronik ortam  </h5>
      <p> : Kişisel verilerin elektronik aygıtlar ile oluşturulabildiği, okunabildiği, değiştirilebildiği ve yazılabildiği ortamlar</p>
    </div>

    <div>
      <h5>Elektronik olmayan ortam</h5>
      <p>  : Elektronik ortamların dışında kalan tüm yazılı, basılı, görsel vb. diğer ortamlar</p>
    </div>

    <div>
      <h5>Hizmet sağlayıcı </h5>
      <p>    : Şirket ile belirli bir sözleşme çerçevesinde hizmet sağlayan gerçek veya tüzel kişi</p>
    </div>

    <div>
      <h5>İlgili kişi</h5>
      <p> : Kişisel verisi işlenen gerçek kişi</p>
    </div>

    <div>
      <h5>İlgili kullanıcı</h5>
      <p>  :Verilerin teknik olarak depolanması, korunması ve yedeklenmesinden sorumlu olan kişi ya da birim hariç olmak üzere veri sorumlusu organizasyonu içerisinde veya veri sorumlusundan aldığı yetki ve talimat doğrultusunda kişisel verileri işleyen kişiler</p>
    </div>

    <div>
      <h5>İmha</h5>
      <p> : Kişisel verilerin silinmesi, yok edilmesi veya anonim hale getirilmesi</p>
    </div>

    <div>
      <h5>Kanun</h5>
      <p>  : 6698 Sayılı Kişisel Verilerin Korunması Kanunu</p>
    </div>

    <div>
      <h5>Kayıt ortamı  </h5>
      <p>  : Tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla işlenen kişisel verilerin bulunduğu her türlü ortam</p>
    </div>

    <div>
      <h5>Kişisel veri</h5>
      <p> : Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi</p>
    </div>

    <div>
      <h5>Kişisel veri işleme envanteri</h5>
      <p>  :Veri sorumlularının iş süreçlerine bağlı olarak gerçekleştirmekte oldukları kişisel verileri işleme faaliyetlerini; kişisel verileri işleme amaçları ve hukuki sebebi, veri kategorisi, aktarılan alıcı grubu ve veri konusu kişi grubuyla ilişkilendirerek oluşturdukları ve kişisel verilerin işlendikleri amaçlar için gerekli olan azami muhafaza edilme süresini, yabancı ülkelere aktarımı öngörülen kişisel verileri ve veri güvenliğine ilişkin alınan tedbirleri açıklayarak detaylandırdıkları envanter</p>
    </div>

    <div>
      <h5>Kişisel verilerin işlenmesi</h5>
      <p> : Kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilmesi, kaydedilmesi, depolanması, saklanması, değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması, devralınması, elde edilebilir hale getirilmesi, sınıflandırılması ya da kullanılmasının engellenmesi gibi veriler üzerinde gerçekleştirilen her türlü işlem</p>
    </div>

    <div>
      <h5>Kurul</h5>
      <p> : Kişisel Verileri Koruma Kurulu</p>
    </div>

    <div>
      <h5>Özel nitelikli kişisel veri</h5>
      <p>   : Kişilerin ırkı, etnik kökeni, siyasi düşüncesi, felsefi inancı, dini, mezhebi veya diğer inançları, kılık ve kıyafeti, dernek, vakıf ya da sendika üyeliği, sağlığı, cinsel hayatı, ceza mahkûmiyeti ve güvenlik tedbirleriyle ilgili verileri ile biyometrik ve genetik verileri</p>
    </div>
   
    <div>
      <h5>Periyodik imha</h5>
      <p>  : Kanunda yer alan kişisel verilerin işlenme şartlarının tamamının ortadan kalkması durumunda kişisel verileri saklama ve imha politikasında belirtilen ve tekrar eden aralıklarla resen gerçekleştirilecek silme, yok etme veya anonim hale getirme işlemi</p>
    </div>

    <div>
      <h5>Politika</h5>
      <p>  : Kişisel Verileri Saklama ve İmha Politikası</p>
    </div>

    <div>
      <h5>Şirket</h5>
      <p>  : Kişisel Verileri Saklama ve İmha Politikası</p>
    </div>

    <div>
      <h5>Politika</h5>
      <p>   : Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama </p>
    </div>

    <p>İnşaat Ticaret Limited Şirketi  (İşyeri/sorumlu unvanı yazılacak)</p>

    <div>
      <h5>Veri işleyen </h5>
      <p>    : Veri sorumlusunun verdiği yetkiye dayanarak veri sorumlusu adına kişisel verileri işleyen gerçek veya tüzel kişi</p>
    </div>

    <div>
      <h5>Veri kayıt sistemi  </h5>
      <p>   : Kişisel verilerin belirli kriterlere göre yapılandırılarak işlendiği kayıt sistemi </p>
    </div>

    <div>
      <h5>Veri sorumlusu </h5>
      <p>   : Kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasında ve yönetilmesinden sorumlu gerçek veya tüzel kişi</p>
    </div>

    <div>
      <h5>Veri sorumluları sicil bilgi sistemi  </h5>
      <p>    : Veri sorumlularının Sicile başvuruda ve Sicile ilişkin ilgili diğer işlemlerde kullanacakları, internet üzerinden erişilebilen, Başkanlık tarafından oluşturulan ve yönetilen bilişim sistemi</p>
    </div>

    <div>
      <h5>VERBİS </h5>
      <p>      : Veri Sorumluları Sicil Bilgi Sistemi</p>
    </div>

    <div>
      <h5>Yönetmelik </h5>
      <p> Yönetmelik</p>
    </div>

    <h5>MADDE 4- SORUMLULUK VE GÖREVLER</h5>

    <p>Şirketin tüm çalışanları ve birimleri; kişisel verilerin hukuka uygun olarak elde edilmesi, işlenmesi ve saklanması konusunda sorumlu birimlere tam ve aktif destek verir. Politika kapsamında alınan idari ve teknik tedbirlerin uygulanmasında, birim çalışanlarının eğitilmesinde, çalışanların farkındalığının sağlanmasında, artırılmasında ve izlenmesinde, kişisel verilere hukuka aykırı olarak erişilmesinin önlenmesinde ve kişisel verilerin hukuka uygun olarak muhafazasında tüm çalışanlar ve birimler, sorumlu birimlere destek olur.</p>
    <p>Kişisel verilerin saklama ve imha süreçlerinde görev alanların unvanları, birimleri ve görev tanımlarına ait dağılım EK TABLO: 1’de gösterilmiştir.</p>
    <h5>MADDE 5- KAYIT ORTAMLARI</h5>
    <p>Kişisel veriler, şirket tarafından EK TABLO: 2’de listelenen ortamlarda hukuka uygun olarak güvenli bir şekilde muhafaza edilir.</p>
    <h5>MADDE 6- SAKLAMAYI GEREKTİREN HUKUKİ SEBEPLER</h5>
    <p>Şirkette, faaliyetler çerçevesinde işlenen kişisel veriler, ilgili mevzuatta öngörülen süre kadar ve kanun ile ilgili mevzuat kapsamında muhafaza edilir. Bu kapsamda saklamayı gerektiren sebepler şunlardır:</p>
    <ol>
      <li>Kişisel verilerin sözleşmelerin kurulması ve ifası ile doğrudan doğruya ilgili olması nedeniyle saklanması, </li>
      <li>Kişisel verilerin bir hakkın tesisi, kullanılması veya korunması amacıyla saklanması</li>
      <li>Kişisel verilerin kişilerin temel hak ve özgürlüklerine zarar vermemek kaydıyla şirketin meşru menfaatleri için saklanmasının zorunlu olması</li>
      <li>Kişisel verilerin şirketin herhangi bir hukuki yükümlülüğünü yerine getirmesi amacıyla saklanması</li>
      <li>Mevzuatta kişisel verilerin saklanmasının açıkça öngörülmesi</li>
      <li>Veri sahiplerinin açık rızasının alınmasını gerektiren saklama faaliyetleri açısından veri sahiplerinin açık rızasının bulunması</li>
    </ol>

    <h5>MADDE 7- SAKLAMAYI GEREKTİREN İŞLEME AMAÇLARI</h5>
    <p>Şirket aşağıdakiler dahil olmak ancak bununla sınırlı olmamak üzere, ilgili kişinin veya ilgili kişi tarafından belirtilen üçüncü tarafların kişisel verilerini çeşitli amaçlarla işleyebilir:</p>
    <ol>
      <li>İnsan kaynakları süreçlerini yürütmek</li>
      <li>Kurumsal iletişimi sağlamak</li>
      <li>Şirket güvenliğini sağlamak</li>
      <li>İstatistiksel çalışmalar yapabilmek</li>
      <li>İmzalanan sözleşmeler ve protokoller neticesinde iş ve işlemleri ifa edebilmek</li>
      <li>Yasal düzenlemelerin gerektirdiği veya zorunlu kıldığı şekilde, hukuki yükümlülüklerin yerine getirilmesini sağlamak</li>
      <li>Şirket ile iş ilişkisinde bulunan gerçek / tüzel kişilerle irtibat sağlamak</li>
      <li>Yasal raporlamalar yapmak</li>
      <li>Çağrı merkezi süreçlerini yönetmek</li>
      <li>İleride doğabilecek hukuki uyuşmazlıklarda delil olarak ispat yükümlülüğünü yerine getirmek</li>
      <li>Şirket hukuk işlerinin icrası/takibini yapmak</li>
    </ol>

    <h5>MADDE 8- İMHAYI GEREKTİREN HUKUKİ SEBEPLER</h5>
    <p>Kişisel veriler, aşağıdaki durumların varlığı halinde ilgili kişinin talebi üzerine veya re’sen şirket tarafından silinir ya da yok edilir:</p>
    <ol>
      <li>Kişisel verinin işlenmesine esas teşkil eden ilgili mevzuat hükümlerinin değiştirilmesi veya kaldırılması</li>
      <li>Kişisel verinin işlenmesini veya saklanmasını gerektiren amacın ortadan kalkması</li>
      <li>Kişisel verileri işlemenin sadece açık rıza şartına istinaden gerçekleştiği hallerde, ilgili kişinin açık rızasını geri alması</li>
      <li>Kanunun 11 inci maddesi gereği ilgili kişinin hakları çerçevesinde kişisel verilerinin silinmesi ve yok edilmesine ilişkin yaptığı başvurunun veri sorumlusu tarafından kabul edilmesi</li>
      <li>Kişisel verilerin saklanmasını gerektiren azami sürenin geçmiş olması ve kişisel verileri daha uzun süre saklamayı haklı kılacak herhangi bir şartın mevcut olmaması</li>
    </ol>

    <h5>MADDE 9- TEKNİK TEDBİRLER</h5>
    <p>Şirket tarafından, işlediği kişisel verilerle ilgili olarak alınan teknik tedbirler aşağıdadır:</p>
    <ol>
      <li>Kurulan sistemler kapsamında gerekli iç kontrolleri yapar</li>
      <li>Kurulan sistemler kapsamında bilgi teknolojileri risk değerlendirmesi ve iş etki analizinin gerçekleştirilmesi süreçlerini yürütür</li>
      <li>Verilerin şirket dışına sızmasını engelleyecek veyahut gözlemleyecek teknik altyapının temin edilmesini ve ilgili matrislerin oluşturulmasını sağlar</li>
      <li>Düzenli olarak ve ihtiyaç oluştuğunda sızma testi hizmeti alarak sistem zafiyetlerinin kontrolünü sağlar</li>
      <li>Bilgi teknolojileri birimlerinde çalışanların kişisel verilere erişim yetkilerinin kontrol altında tutulmasını sağlar</li>
      <li>Kişisel verilerin yok edilmesi geri dönüştürülemeyecek ve denetim izi bırakmayacak şekilde sağlanır</li>
      <li>Kanun’un 12. maddesi uyarınca, kişisel verilerin saklandığı her türlü dijital ortam, bilgi güvenliği gereksinimlerini sağlayacak şekilde şifreli veyahut kriptografik yöntemler ile korunur</li>
    </ol>

    <h5>MADDE 10- İDARİ TEDBİRLER</h5>
    <p>Şirket tarafından, işlediği kişisel verilerle ilgili olarak alınan idari tedbirler aşağıdadır:</p>
    <ol>
      <li>Saklanan kişisel verilere Şirket içi erişimi iş tanımı gereği erişmesi gerekli personel ile sınırlandırır. Erişimin sınırlandırılmasında verinin özel nitelikli olup olmadığı ve önem derecesi de dikkate alınır.</li>
      <li>İşlenen kişisel verilerin hukuka aykırı yollarla başkaları tarafından elde edilmesi hâlinde, bu durumu en kısa sürede ilgilisine ve Kurul’a bildirir.</li>
      <li>Kişisel verilerin paylaşılması ile ilgili olarak, kişisel verilerin paylaşıldığı kişiler ile kişisel verilerin korunması ve veri güvenliğine ilişkin çerçeve sözleşme imzalar yahut mevcut sözleşmesine eklenen hükümler ile veri güvenliğini sağlar.</li>
      <li>Kişisel verilerin işlenmesi hakkında bilgili ve deneyimli personel istihdam eder ve personeline kişisel verilerin korunması mevzuatı ve veri güvenliği kapsamında gerekli eğitimleri verir.</li>
      <li>Kendi tüzel kişiliği nezdinde Kanun hükümlerinin uygulanmasını sağlamak amacıyla gerekli denetimleri yapar ve yaptırır. Denetimler sonucunda ortaya çıkan gizlilik ve güvenlik zafiyetlerini giderir.</li>
    </ol>

    <h5>MADDE 11- KİŞİSEL VERİLERİN SİLİNMESİ YÖNTEMLERİ</h5>
    <p>Kişisel veriler EK TABLO: 3’te belirtilen yöntemlerle silinir.</p>
    <h5>MADDE 12- KİŞİSEL VERİLERİN YOK EDİLMESİ YÖNTEMLERİ</h5>
    <p>Kişisel veriler EK TABLO: 4’te belirtilen yöntemlerle yok edilir.</p>
    <h5>MADDE 13- SAKLAMA VE İMHA SÜRELERİ</h5>
    <p>Şirket tarafından kişisel verilerin saklama süresi belirlenirken; öncelikle yasal mevzuatta söz konusu kişisel verinin saklanmasına ilişkin olarak bir süre öngörülmüş ise bu süreye riayet edilir. Bunun haricinde; EK TABLO: 5’te yer alan saklama ve imha süresi tablosu esas alınır.</p>
    <h5>MADDE 14- PERİYODİK İMHA SÜRESİ</h5>
    <p>Şirket her yıl Haziran ve Aralık aylarında periyodik imha işlemi gerçekleştirilir.</p>
    <h5>MADDE 15- POLİTİKANIN YAYIMLANMASI, SAKLANMASI VE GÜNCELLENMESİ</h5>
    <p>Politika, ıslak imzalı (basılı kâğıt) ve elektronik ortamda olmak üzere iki farklı ortamda yayımlanır, internet sayfasında kamuoyuna ilan edilir. Basılı kâğıt nüshası şirket bünyesinde saklanır. Politika, ihtiyaç duyuldukça gözden geçirilir ve gerekli bölümler güncellenir.</p>
    <h5>MADDE 16- YÜRÜRLÜK</h5>
    <p>Politika, şirketin internet sitesinde yayınlanmasının ardından yürürlüğe girmiş kabul edilir. Yürürlükten kaldırılmasına karar verilmesi halinde, politikanın ıslak imzalı eski nüshaları iptal edilerek (iptal kaşesi vurularak veya iptal yazılarak) imzalanır ve en az 5 yıl süre ile şirket tarafından saklanır.</p>
    <h5>EK TABLO: 1 Saklama ve imha süreçleri görev dağılımı</h5>
    </div>,

    <div className="content-box">Üçüncü butonun içeriği. Kısa bir içerik.</div>,
    <div className="content-box">dört butonun içeriği. Kısa bir içerik.</div>,
    <div className="content-box">beş butonun içeriği. Kısa bir içerik.</div>,
    <div className="content-box">altı butonun içeriği. Kısa bir içerik.</div>,
  ];

  return (
    <>
      <Helmet>
        <title>Gizlilik Politikası - BP Taşıtmatik</title>
        <meta
          name="description"
          content="Kişisel verilerinizin şirketimiz tarafından işlenmiş olması halinde taleplerinizi iletmek üzere 'İletişim Formun' kullanarak başvuruda"
        />
      </Helmet>

      <div className="gizlilik-main">
        <h2>Gizlilik Politikası</h2>
        <div className="gizlilik-container">
          {/* Sol taraftaki butonlar */}
          <div className="gizlilik-button-panel">
          {buttons.map((buttonLabel, index) => (
          <button
            key={index}
            onClick={() => setSelectedContent(index)}
            className={selectedContent === index ? "active" : ""}
          >
            {buttonLabel}
          </button>
        ))}
          </div>

          {/* Sağ tarafta seçilen içerik */}
          <div className="content-panel">{contents[selectedContent]}</div>
        </div>
      </div>

      <BlogSection />
      <ContactForm2 />
      <Background />
      <RoadSimulation />
    </>
  );
};

export default GizlilikPolitikasi;
