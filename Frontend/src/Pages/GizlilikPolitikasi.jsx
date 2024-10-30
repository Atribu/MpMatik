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
      <p>Kişisel verilerinizin şirketimiz tarafından işlenmiş olması halinde taleplerinizi iletmek üzere <p className="spanunderline">“İletişim Formunu”</p> kullanarak başvuruda bulanabilirsiniz.</p>
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
     <div className="row-div">
      <h5>Alıcı grubu</h5>
      <p> : Veri sorumlusu tarafından kişisel verilerin aktarıldığı gerçek veya tüzel kişi kategorisi.</p>
    </div>

    <div className="row-div">
      <h5>Açık rıza</h5>
      <p> : Belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rıza</p>
    </div>

    <div className="row-div">
      <h5>Anonim Hale Getirme</h5>
      <p> : Kişisel verilerin, başka verilerle eşleştirilerek dahi hiçbir surette kimliği belirli veya belirlenebilir bir gerçek kişiyle ilişkilendirilemeyecek hale getirilmesi</p>
    </div>

    <div className="row-div">
      <h5>Çalışan</h5>
      <p>  : Şirket personeli</p>
    </div>

    <div className="row-div">
      <h5>Elektronik ortam  </h5>
      <p> : Kişisel verilerin elektronik aygıtlar ile oluşturulabildiği, okunabildiği, değiştirilebildiği ve yazılabildiği ortamlar</p>
    </div>

    <div className="row-div">
      <h5>Elektronik olmayan ortam</h5>
      <p>  : Elektronik ortamların dışında kalan tüm yazılı, basılı, görsel vb. diğer ortamlar</p>
    </div>

    <div className="row-div">
      <h5>Hizmet sağlayıcı </h5>
      <p>    : Şirket ile belirli bir sözleşme çerçevesinde hizmet sağlayan gerçek veya tüzel kişi</p>
    </div>

    <div className="row-div">
      <h5>İlgili kişi</h5>
      <p> : Kişisel verisi işlenen gerçek kişi</p>
    </div>

    <div className="row-div">
      <h5>İlgili kullanıcı</h5>
      <p>  :Verilerin teknik olarak depolanması, korunması ve yedeklenmesinden sorumlu olan kişi ya da birim hariç olmak üzere veri sorumlusu organizasyonu içerisinde veya veri sorumlusundan aldığı yetki ve talimat doğrultusunda kişisel verileri işleyen kişiler</p>
    </div>

    <div className="row-div">
      <h5>İmha</h5>
      <p> : Kişisel verilerin silinmesi, yok edilmesi veya anonim hale getirilmesi</p>
    </div>

    <div className="row-div">
      <h5>Kanun</h5>
      <p>  : 6698 Sayılı Kişisel Verilerin Korunması Kanunu</p>
    </div>

    <div>
      <h5>Kayıt ortamı  </h5>
      <p>  : Tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla işlenen kişisel verilerin bulunduğu her türlü ortam</p>
    </div>

    <div  className="row-div">
      <h5>Kişisel veri</h5>
      <p> : Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi</p>
    </div>

    <div className="row-div">
      <h5>Kişisel veri işleme envanteri</h5>
      <p>  :Veri sorumlularının iş süreçlerine bağlı olarak gerçekleştirmekte oldukları kişisel verileri işleme faaliyetlerini; kişisel verileri işleme amaçları ve hukuki sebebi, veri kategorisi, aktarılan alıcı grubu ve veri konusu kişi grubuyla ilişkilendirerek oluşturdukları ve kişisel verilerin işlendikleri amaçlar için gerekli olan azami muhafaza edilme süresini, yabancı ülkelere aktarımı öngörülen kişisel verileri ve veri güvenliğine ilişkin alınan tedbirleri açıklayarak detaylandırdıkları envanter</p>
    </div>

    <div  className="row-div">
      <h5>Kişisel verilerin işlenmesi</h5>
      <p> : Kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilmesi, kaydedilmesi, depolanması, saklanması, değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması, devralınması, elde edilebilir hale getirilmesi, sınıflandırılması ya da kullanılmasının engellenmesi gibi veriler üzerinde gerçekleştirilen her türlü işlem</p>
    </div>

    <div className="row-div">
      <h5>Kurul</h5>
      <p> : Kişisel Verileri Koruma Kurulu</p>
    </div>

    <div className="row-div">
      <h5>Özel nitelikli kişisel veri</h5>
      <p>   : Kişilerin ırkı, etnik kökeni, siyasi düşüncesi, felsefi inancı, dini, mezhebi veya diğer inançları, kılık ve kıyafeti, dernek, vakıf ya da sendika üyeliği, sağlığı, cinsel hayatı, ceza mahkûmiyeti ve güvenlik tedbirleriyle ilgili verileri ile biyometrik ve genetik verileri</p>
    </div>
   
    <div className="row-div">
      <h5>Periyodik imha</h5>
      <p>  : Kanunda yer alan kişisel verilerin işlenme şartlarının tamamının ortadan kalkması durumunda kişisel verileri saklama ve imha politikasında belirtilen ve tekrar eden aralıklarla resen gerçekleştirilecek silme, yok etme veya anonim hale getirme işlemi</p>
    </div>

    <div className="row-div">
      <h5>Politika</h5>
      <p>  : Kişisel Verileri Saklama ve İmha Politikası</p>
    </div>

    <div className="row-div">
      <h5>Şirket</h5>
      <p>  : Kişisel Verileri Saklama ve İmha Politikası</p>
    </div>

    <div className="row-div">
      <h5>Politika</h5>
      <p>   : Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama </p>
    </div>

    <p>İnşaat Ticaret Limited Şirketi  (İşyeri/sorumlu unvanı yazılacak)</p>

    <div className="row-div">
      <h5>Veri işleyen </h5>
      <p>    : Veri sorumlusunun verdiği yetkiye dayanarak veri sorumlusu adına kişisel verileri işleyen gerçek veya tüzel kişi</p>
    </div>

    <div className="row-div">
      <h5>Veri kayıt sistemi  </h5>
      <p>   : Kişisel verilerin belirli kriterlere göre yapılandırılarak işlendiği kayıt sistemi </p>
    </div>

    <div className="row-div">
      <h5>Veri sorumlusu </h5>
      <p>   : Kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri kayıt sisteminin kurulmasında ve yönetilmesinden sorumlu gerçek veya tüzel kişi</p>
    </div>

    <div className="row-div">
      <h5>Veri sorumluları sicil bilgi sistemi  </h5>
      <p>    : Veri sorumlularının Sicile başvuruda ve Sicile ilişkin ilgili diğer işlemlerde kullanacakları, internet üzerinden erişilebilen, Başkanlık tarafından oluşturulan ve yönetilen bilişim sistemi</p>
    </div>

    <div className="row-div">
      <h5>VERBİS </h5>
      <p>      : Veri Sorumluları Sicil Bilgi Sistemi</p>
    </div>

    <div className="row-div">
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

    <div className="content-box">
      <h3>KVKK POLİTİKASI</h3>
      <h4>MEVLANA PETROL ÜRÜNLERI TURIZM TAŞIMACILIK PAZARLAMA İNŞAAT TICARET LIMITED ŞIRKETI</h4>
      <h4>KİŞİSEL VERİLERİN KORUNMASI VE İŞLENMESİ POLİTİKASI</h4>
      <p><span>Hedef Kitle:</span> Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi Tarafından kişisel verileri işlenen tüm gerçek kişiler</p>
      <p><span>Hazırlayan:</span> Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi Kişisel Verilerin Korunması Komitesi</p>
      <p><span>Versiyon:</span> 1.0</p>
      <p><span>Onaylayan:</span> Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi tarafından onaylanmıştır.</p>
      <h4>İÇİNDEKİLER</h4>
      <h4>MEVLANA PETROL ÜRÜNLERI TURIZM TAŞIMACILIK PAZARLAMA İNŞAAT TICARET LIMITED ŞIRKETI</h4>
      <h4>KİŞİSEL VERİLERİN KORUNMASI VE İŞLENMESİ POLİTİKASI</h4>
      <h5>1. GİRİŞ</h5>
      <p>Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi (“Şirket”) olarak Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi</p>
      <p>Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi yürüttüğü faaliyetlerde kişisel verilerin korunmasına önem vermekte ve iş ve işlemlerinde öncelikleri arasında kabul etmektedir. Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi Kişisel Verilerin Korunması ve İşlenmesi Politikası (“Politika”), 6698 sayılı Kişisel Verilerin Korunması Kanunu’nca (“Kanun”) belirlenen kişisel veri işleme usul ve esaslarının Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi organizasyon ve iş süreçlerinin uyumuna yönelik temel düzenlemedir. Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi bu Politika prensipleri doğrultusunda, üst düzey sorumluluk ve bilinciyle kişisel verileri işlemekte ve korumakta, kişisel veri sahiplerini bilgilendirerek gerekli şeffaflığı sağlamaktadır.</p>
      <h5>2. AMAÇ</h5>
      <p>Bu Politikanın amacı, Kanun ve ilgili diğer mevzuat ile öngörülen usul ve esasları, Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi organizasyon ve süreçlerine uyumlulaştırılarak, faaliyetlerinde etkin bir şekilde uygulanmasını sağlamaktır. Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi kişisel verilerin işlenmesi ve korunması için bu Politika ile her türlü idari ve teknik önlemleri almakta, gerekli iç prosedürler oluşturmakta, farkındalığı arttırmakta, bilincin sağlanması için gerekli tüm eğitimleri yapmaktadır. Hissedarlar, yetkililer, çalışanlar ve iş ortaklarının Kanun süreçlerine uyumları için, gerekli tüm önlemler alınmakta, uygun ve etkin denetim mekanizmaları kurulmaktadır.</p>
      <h6>1.2.Kapsam</h6>
      <p>Politika, Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi iş süreçlerinde otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilen bütün kişisel verileri kapsamaktadır.</p>
      <h7>1.2.1.Dayanak</h7>
      <p>Politika, Kanun ve ilgili mevzuata dayanmaktadır. Kişisel veriler, 5179 sayılı Gıdaların Üretimi, Tüketimi ve Denetlenmesine Dair Kanun Hükmünde Kararnamenin Değiştirilerek Kabulü Hakkında Kanun, Gıda ve Gıda İle Temasta Bulunan Madde ve Malzemelerin Piyasa Gözetimi, Kontrolü ve Denetimi İle İşyeri Sorumluluklarına Dair Yönetmelik, 6502 sayılı Tüketicinin Korunması Hakkında Kanun, 1774 sayılı Kimlik Bildirme Kanununu, 4857 sayılı İş Kanunu, 6331 İş Sağlığı ve Güvenliği Kanunu, 5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu, 4447 sayılı İşsizlik Sigortası Kanunu, 6102 sayılı Türk Ticaret Kanunu, 213 sayılı Vergi Usul Kanunu ve diğer ilgili mevzuattan kaynaklanan kaynaklanan yasal yükümlülükleri yerine getirmek için işlenmektedir.</p>
      <p>Yürürlükteki mevzuat ve Politika arasında uyumsuzluk olduğu hallerde yürürlükteki mevzuat uygulanır. İlgili mevzuat tarafından öngörülen düzenlemeler, Politika ile Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi uygulamalarına dönüştürülmektedir.</p>
    </div>,
    <div className="content-box">dört butonun içeriği. Kısa bir içerik.</div>,
    <div className="content-box">beş butonun içeriği. Kısa bir içerik.</div>,
    <div className="content-box">
      <h3>GİZLİLİK VE ÇEREZ POLİTİKASI</h3>
      <h4>MEVLANA PETROL ÜRÜNLERİ TURİZM TAŞIMACILIK PAZARLAMA İNŞAAT TİCARET LİMİTED ŞİRKETİ </h4>
      <h4>WEB SİTESİ GİZLİLİK VE ÇEREZ POLİTİKASI</h4>
      <p>Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi  (“Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi ”) tarafından işletilen (“Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi ”) web sitesini ziyaret edenlerin (“ziyaretçi”) kişisel verilerini 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca işlemekte ve gizliliğini korumaktayız. Bu Web Sitesi Gizlilik ve Çerez Politikası (“Politika”) ile ziyaretçilerin kişisel verilerinin işlenmesi, çerez politikası ve internet sitesi gizlilik ilkeleri belirlenmektedir. </p>
      <p>Çerezler (cookies), küçük bilgileri saklayan küçük metin dosyalarıdır. Çerezler, ziyaret ettiğiniz internet siteleri tarafından, tarayıcılar aracılığıyla cihazınıza veya ağ sunucusuna depolanır. İnternet sitesi tarayıcınıza yüklendiğinde, çerezler cihazınızda saklanır. Çerezler, internet sitesinin düzgün çalışmasını, daha güvenli hale getirilmesini, daha iyi kullanıcı deneyimi sunmasını sağlar. Oturum ve yerel depolama alanları da çerezlerle aynı amaç için kullanılır. İnternet sitemizde çerez bulunmamakta, oturum ve yerel depolama alanları çalışmaktadır.</p>
      <p>Web sitemizin ziyaretçiler tarafından en verimli şekilde faydalanılması için çerezler kullanılmaktadır. Çerezler tercih edilmemesi halinde tarayıcı ayarlarından silinebilir ya da engellenebilir. Ancak bu web sitemizin performansını olumsuz etkileyebilir. Ziyaretçi tarayıcıdan çerez ayarlarını değiştirmediği sürece bu sitede çerez kullanımını kabul ettiği varsayılır.</p>
      <ol>
        <li>Kişisel Verilerin İşlenme Amacı
        <p>Web sitemizi ziyaret etmeniz dolayısıyla elde edilen kişisel verileriniz aşağıda sıralanan amaçlarla Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi  tarafından Kanun’un 5. ve 6. maddelerine uygun olarak işlenmektedir:</p>
        <ul>
          <li>Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi  tarafından yürütülen ticari faaliyetlerin yürütülmesi için gerekli çalışmaların yapılması ve buna bağlı iş süreçlerinin gerçekleştirilmesi,</li>
          <li>Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi  tarafından sunulan ürün ve hizmetlerden ilgili kişileri faydalandırmak için gerekli çalışmaların yapılması ve ilgili iş süreçlerinin gerçekleştirilmesi,</li>
          <li>Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi  tarafından sunulan ürün ve hizmetlerin ilgili kişilerin beğeni, kullanım alışkanlıkları ve ihtiyaçlarına göre özelleştirilerek ilgili kişilere önerilmesi ve tanıtılması.</li>
        </ul>
        </li>
      </ol>

      <ol>
        <li>Kişisel Verilerin Aktarıldığı Taraflar ve Aktarım Amacı
        <p>Web sitemizi ziyaret etmeniz dolayısıyla elde edilen kişisel verileriniz, kişisel verilerinizin işlenme amaçları doğrultusunda, iş ortaklarımıza, tedarikçilerimize kanunen yetkili kamu kurumlarına ve özel kişilere Kanun’un 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları kapsamında aktarılabilmektedir.</p>
        </li>
      </ol>

      <ol>
        <li>Kişisel Verilerin Toplanma Yöntemi</li>
        <p>Çerezler, ziyaret edilen internet siteleri tarafından tarayıcılar aracılığıyla cihaza veya ağ sunucusuna depolanan küçük metin dosyalarıdır. Web sitemiz ziyaret edildiğinde, ziyaretçinin izniyle web sitemize ek olarak google.com, facebook.com, twitter.com, instagram.com, linkedin.com, youtube.com alanlarına da çerezler uygulanmaktadır.</p>
      </ol>

      <ol>
        <li>Çerezleri Kullanım Amacı</li>
        <p>Web sitemiz birinci ve üçüncü taraf çerezleri kullanır. Birinci taraf çerezleri çoğunlukla web sitesinin doğru şekilde çalışması için gereklidir, kişisel verilerinizi tutmazlar. Üçüncü taraf çerezleri, web sitemizin performansını, etkileşimini, güvenliğini, reklamları ve sonucunda daha iyi bir hizmet sunmak için kullanılır. Kullanıcı deneyimi ve web sitemizle gelecekteki etkileşimleri hızlandırmaya yardımcı olur. Bu kapsamda çerezler;</p>
        <p>İstatistikler: Bu çerezler, web sitesine gelen ziyaretçi sayısı, benzersiz ziyaretçi sayısı, web sitesinin hangi sayfalarının ziyaret edildiği, ziyaretin kaynağı vb. bilgileri depolar. Bu veriler, web sitesinin ne kadar iyi performans gösterdiğini ve analiz etmemize yardımcı olur.</p>
        <p>Pazarlama: Web sitemiz reklam veriyor. Bu çerezler, size gösterdiğimiz reklamları sizin için anlamlı olacak şekilde kişiselleştirmek için kullanılır. Bu çerezler ayrıca bu reklam kampanyalarının verimliliğini takip etmemize yardımcı olur. Bu çerezlerde depolanan bilgiler, üçüncü taraf reklam sağlayıcıları tarafından size tarayıcıdaki diğer web sitelerinde reklam göstermek için de kullanılabilir.</p>
        <p>İşlevsel: Bunlar, web sitemizdeki bazı önemli olmayan işlevlere yardımcı olan çerezlerdir. Bu işlevler arasında videolar gibi içerik yerleştirme veya web sitesindeki içerikleri sosyal medya platformlarında paylaşma yer alır.</p>
        <p>Tercihler: Bu çerezler ayarlarınızı kaydetmemize ve dil tercihleri gibi tarama tercihlerinizi belirlememize yardımcı olur, böylece web sitesine gelecekteki ziyaretlerinizde daha iyi ve verimli bir deneyime sahip olursunuz.</p>
      </ol>

      <h4>Teknik olarak web sitemizde kullanılan çerez türleri aşağıdaki tabloda gösterilmektedir.</h4>
      tabloo

      <span>Web sitemizde çerez kullanılmasının başlıca amaçları aşağıda sıralanmaktadır:</span>

      <ul>
        <li>İnternet sitesinin işlevselliğini ve performansını arttırmak yoluyla sizlere sunulan hizmetleri geliştirmek,</li>
        <li>İnternet Sitesini iyileştirmek ve İnternet Sitesi üzerinden yeni özellikler sunmak ve sunulan özellikleri sizlerin tercihlerine göre kişiselleştirmek,</li>
        <li>İnternet Sitesinin, Sizin ve Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi ’ın hukuki ve ticari güvenliğinin teminini sağlamak.</li>
      </ul>

      <ol>
        <li>Çerez Tercihlerini Kontrol Etme</li>
        <p>Farklı tarayıcılar web siteleri tarafından kullanılan çerezleri engellemek ve silmek için farklı yöntemler sunar. Çerezleri engellemek / silmek için tarayıcı ayarları değiştirilmelidir. Tanımlama bilgilerinin nasıl yönetileceği ve silineceği hakkında daha fazla bilgi edinmek için www.allaboutcookies.org adresini ziyaret edilebilir. Ziyaretçi, tarayıcı ayarlarını değiştirerek çerezlere ilişkin tercihlerini kişiselleştirme imkânına sahiptir. </p>
      </ol>

      <ol>
        <li>Veri Sahiplerinin Hakları</li>
        <p>Kanunun “ilgili kişinin haklarını düzenleyen” 11. maddesi kapsamındaki talepleri, Politika’da düzenlendiği şekilde, ayrıntısını http://www.karatascam.com/kisisel-verilerin-korunmasi adresinden ulaşabileceğiniz Başvuru Formunu’nu Karataş Cam’a ileterek yapabilir.  Talebin niteliğine göre en kısa sürede ve en geç otuz gün içinde başvuruları ücretsiz olarak sonuçlandırılır; ancak işlemin ayrıca bir maliyet gerektirmesi halinde Kişisel Verileri Koruma Kurulu tarafından belirlenecek tarifeye göre ücret talep edilebilir.</p>
      </ol>

      <ol>
        <li>Politika’nın Yürürlüğü</li>
        <p>Bu Politika yayınlandığı tarihte yürürlüğe girer. Politika’nın tümünün veya belirli maddelerinin yenilenmesi halinde Politika’nın yürürlük tarihi revize edilir.</p>
      </ol>

      <span>Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi  Kişisel Verilerin Korunması ve İşlenmesi Politikası, Kişisel Veri Saklama ve İmha Politikası, Başvuru Formu için “Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi ” adresinden ulaşabilirsiniz.</span>
    
    </div>,
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
