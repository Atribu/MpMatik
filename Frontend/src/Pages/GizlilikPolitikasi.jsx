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

  const buttons = [
    "KVKK Başvuru Formu",
    "KVKK Saklama ve İmha Politikası",
    "KVKK Politikası",
    "Aydınlata Metni",
    "KVKK Kurulu İç Yönerge",
    "Gizlilik ve Çerezler Politikası",
  ];

  // Butonlara göre gösterilecek içerikler
  const contents = [
    <div className="content-box">
      <p>
        Kişisel verilerinizin şirketimiz tarafından işlenmiş olması halinde
        taleplerinizi iletmek üzere{" "}
        <p className="spanunderline">“İletişim Formunu”</p> kullanarak başvuruda
        bulanabilirsiniz.
      </p>
    </div>,

    <div className="content-box">
      <h3>KVKK SAKLAMA VE İMHA POLİTİKASI</h3>
      <h4>
        MEVLANA PETROL ÜRÜNLERİ TURİZM TAŞIMACILIK PAZARLAMA İNŞAAT TİCARET
        LİMİTED ŞİRKETİ{" "}
      </h4>
      <h4>KİŞİSEL VERİ SAKLAMA VE İMHA POLİTİKASI</h4>
      <h4>MADDE 1- AMAÇ</h4>
      <p>
        Kişisel verileri saklama ve imha politikası Mevlana Petrol Ürünleri
        Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi tarafından
        işlenen kişisel verilerin saklanması ve imhasına yönelik iş ve işlemler
        konusundaki usulleri ve esasları belirlemek amacıyla hazırlanmıştır.
      </p>
      <h4>MADDE 2- KAPSAM</h4>
      <p>
        Şirket çalışanlarına, çalışan adaylarına, stajyerlere, ürün ve hizmet
        alanlara, potansiyel müşterilere, ortaklara, ziyaretçilere,
        tedarikçilere ve diğer üçüncü kişilere ait kişisel veriler bu politika
        kapsamındadır.{" "}
      </p>
      <p>
        Şirketin sahip olduğu ya da şirket tarafından yönetilen kişisel
        verilerin işlendiği tüm kayıt ortamları ve kişisel veri işlenmesine
        yönelik faaliyetlerde bu politika uygulanır.
      </p>
      <h4>MADDE 3- TANIMLAR</h4>
      <div className="row-div">
        <h4>Alıcı grubu</h4>
        <p>
          {" "}
          : Veri sorumlusu tarafından kişisel verilerin aktarıldığı gerçek veya
          tüzel kişi kategorisi.
        </p>
      </div>

      <div className="row-div">
        <h4>Açık rıza</h4>
        <p>
          {" "}
          : Belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür
          iradeyle açıklanan rıza
        </p>
      </div>

      <div className="row-div">
        <h4>Anonim Hale Getirme</h4>
        <p>
          {" "}
          : Kişisel verilerin, başka verilerle eşleştirilerek dahi hiçbir
          surette kimliği belirli veya belirlenebilir bir gerçek kişiyle
          ilişkilendirilemeyecek hale getirilmesi
        </p>
      </div>

      <div className="row-div">
        <h4>Çalışan</h4>
        <p> : Şirket personeli</p>
      </div>

      <div className="row-div">
        <h4>Elektronik ortam </h4>
        <p>
          {" "}
          : Kişisel verilerin elektronik aygıtlar ile oluşturulabildiği,
          okunabildiği, değiştirilebildiği ve yazılabildiği ortamlar
        </p>
      </div>

      <div className="row-div">
        <h4>Elektronik olmayan ortam</h4>
        <p>
          {" "}
          : Elektronik ortamların dışında kalan tüm yazılı, basılı, görsel vb.
          diğer ortamlar
        </p>
      </div>

      <div className="row-div">
        <h4>Hizmet sağlayıcı </h4>
        <p>
          {" "}
          : Şirket ile belirli bir sözleşme çerçevesinde hizmet sağlayan gerçek
          veya tüzel kişi
        </p>
      </div>

      <div className="row-div">
        <h4>İlgili kişi</h4>
        <p> : Kişisel verisi işlenen gerçek kişi</p>
      </div>

      <div className="row-div">
        <h4>İlgili kullanıcı</h4>
        <p>
          {" "}
          :Verilerin teknik olarak depolanması, korunması ve yedeklenmesinden
          sorumlu olan kişi ya da birim hariç olmak üzere veri sorumlusu
          organizasyonu içerisinde veya veri sorumlusundan aldığı yetki ve
          talimat doğrultusunda kişisel verileri işleyen kişiler
        </p>
      </div>

      <div className="row-div">
        <h4>İmha</h4>
        <p>
          {" "}
          : Kişisel verilerin silinmesi, yok edilmesi veya anonim hale
          getirilmesi
        </p>
      </div>

      <div className="row-div">
        <h4>Kanun</h4>
        <p> : 6698 Sayılı Kişisel Verilerin Korunması Kanunu</p>
      </div>

      <div>
        <h4>Kayıt ortamı </h4>
        <p>
          {" "}
          : Tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt
          sisteminin parçası olmak kaydıyla otomatik olmayan yollarla işlenen
          kişisel verilerin bulunduğu her türlü ortam
        </p>
      </div>

      <div className="row-div">
        <h4>Kişisel veri</h4>
        <p>
          {" "}
          : Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü
          bilgi
        </p>
      </div>

      <div className="row-div">
        <h4>Kişisel veri işleme envanteri</h4>
        <p>
          {" "}
          :Veri sorumlularının iş süreçlerine bağlı olarak gerçekleştirmekte
          oldukları kişisel verileri işleme faaliyetlerini; kişisel verileri
          işleme amaçları ve hukuki sebebi, veri kategorisi, aktarılan alıcı
          grubu ve veri konusu kişi grubuyla ilişkilendirerek oluşturdukları ve
          kişisel verilerin işlendikleri amaçlar için gerekli olan azami
          muhafaza edilme süresini, yabancı ülkelere aktarımı öngörülen kişisel
          verileri ve veri güvenliğine ilişkin alınan tedbirleri açıklayarak
          detaylandırdıkları envanter
        </p>
      </div>

      <div className="row-div">
        <h4>Kişisel verilerin işlenmesi</h4>
        <p>
          {" "}
          : Kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi
          bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan
          yollarla elde edilmesi, kaydedilmesi, depolanması, saklanması,
          değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması,
          devralınması, elde edilebilir hale getirilmesi, sınıflandırılması ya
          da kullanılmasının engellenmesi gibi veriler üzerinde gerçekleştirilen
          her türlü işlem
        </p>
      </div>

      <div className="row-div">
        <h4>Kurul</h4>
        <p> : Kişisel Verileri Koruma Kurulu</p>
      </div>

      <div className="row-div">
        <h4>Özel nitelikli kişisel veri</h4>
        <p>
          {" "}
          : Kişilerin ırkı, etnik kökeni, siyasi düşüncesi, felsefi inancı,
          dini, mezhebi veya diğer inançları, kılık ve kıyafeti, dernek, vakıf
          ya da sendika üyeliği, sağlığı, cinsel hayatı, ceza mahkûmiyeti ve
          güvenlik tedbirleriyle ilgili verileri ile biyometrik ve genetik
          verileri
        </p>
      </div>

      <div className="row-div">
        <h4>Periyodik imha</h4>
        <p>
          {" "}
          : Kanunda yer alan kişisel verilerin işlenme şartlarının tamamının
          ortadan kalkması durumunda kişisel verileri saklama ve imha
          politikasında belirtilen ve tekrar eden aralıklarla resen
          gerçekleştirilecek silme, yok etme veya anonim hale getirme işlemi
        </p>
      </div>

      <div className="row-div">
        <h4>Politika</h4>
        <p> : Kişisel Verileri Saklama ve İmha Politikası</p>
      </div>

      <div className="row-div">
        <h4>Şirket</h4>
        <p> : Kişisel Verileri Saklama ve İmha Politikası</p>
      </div>

      <div className="row-div">
        <h4>Politika</h4>
        <p> : Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama </p>
      </div>

      <p>İnşaat Ticaret Limited Şirketi (İşyeri/sorumlu unvanı yazılacak)</p>

      <div className="row-div">
        <h4>Veri işleyen </h4>
        <p>
          {" "}
          : Veri sorumlusunun verdiği yetkiye dayanarak veri sorumlusu adına
          kişisel verileri işleyen gerçek veya tüzel kişi
        </p>
      </div>

      <div className="row-div">
        <h4>Veri kayıt sistemi </h4>
        <p>
          {" "}
          : Kişisel verilerin belirli kriterlere göre yapılandırılarak işlendiği
          kayıt sistemi{" "}
        </p>
      </div>

      <div className="row-div">
        <h4>Veri sorumlusu </h4>
        <p>
          {" "}
          : Kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri
          kayıt sisteminin kurulmasında ve yönetilmesinden sorumlu gerçek veya
          tüzel kişi
        </p>
      </div>

      <div className="row-div">
        <h4>Veri sorumluları sicil bilgi sistemi </h4>
        <p>
          {" "}
          : Veri sorumlularının Sicile başvuruda ve Sicile ilişkin ilgili diğer
          işlemlerde kullanacakları, internet üzerinden erişilebilen, Başkanlık
          tarafından oluşturulan ve yönetilen bilişim sistemi
        </p>
      </div>

      <div className="row-div">
        <h4>VERBİS </h4>
        <p> : Veri Sorumluları Sicil Bilgi Sistemi</p>
      </div>

      <div className="row-div">
        <h4>Yönetmelik </h4>
        <p> Yönetmelik</p>
      </div>

      <h4>MADDE 4- SORUMLULUK VE GÖREVLER</h4>

      <p>
        Şirketin tüm çalışanları ve birimleri; kişisel verilerin hukuka uygun
        olarak elde edilmesi, işlenmesi ve saklanması konusunda sorumlu
        birimlere tam ve aktif destek verir. Politika kapsamında alınan idari ve
        teknik tedbirlerin uygulanmasında, birim çalışanlarının eğitilmesinde,
        çalışanların farkındalığının sağlanmasında, artırılmasında ve
        izlenmesinde, kişisel verilere hukuka aykırı olarak erişilmesinin
        önlenmesinde ve kişisel verilerin hukuka uygun olarak muhafazasında tüm
        çalışanlar ve birimler, sorumlu birimlere destek olur.
      </p>
      <p>
        Kişisel verilerin saklama ve imha süreçlerinde görev alanların
        unvanları, birimleri ve görev tanımlarına ait dağılım EK TABLO: 1’de
        gösterilmiştir.
      </p>
      <h4>MADDE 5- KAYIT ORTAMLARI</h4>
      <p>
        Kişisel veriler, şirket tarafından EK TABLO: 2’de listelenen ortamlarda
        hukuka uygun olarak güvenli bir şekilde muhafaza edilir.
      </p>
      <h4>MADDE 6- SAKLAMAYI GEREKTİREN HUKUKİ SEBEPLER</h4>
      <p>
        Şirkette, faaliyetler çerçevesinde işlenen kişisel veriler, ilgili
        mevzuatta öngörülen süre kadar ve kanun ile ilgili mevzuat kapsamında
        muhafaza edilir. Bu kapsamda saklamayı gerektiren sebepler şunlardır:
      </p>
      <ol>
        <li>
          Kişisel verilerin sözleşmelerin kurulması ve ifası ile doğrudan
          doğruya ilgili olması nedeniyle saklanması,{" "}
        </li>
        <li>
          Kişisel verilerin bir hakkın tesisi, kullanılması veya korunması
          amacıyla saklanması
        </li>
        <li>
          Kişisel verilerin kişilerin temel hak ve özgürlüklerine zarar vermemek
          kaydıyla şirketin meşru menfaatleri için saklanmasının zorunlu olması
        </li>
        <li>
          Kişisel verilerin şirketin herhangi bir hukuki yükümlülüğünü yerine
          getirmesi amacıyla saklanması
        </li>
        <li>Mevzuatta kişisel verilerin saklanmasının açıkça öngörülmesi</li>
        <li>
          Veri sahiplerinin açık rızasının alınmasını gerektiren saklama
          faaliyetleri açısından veri sahiplerinin açık rızasının bulunması
        </li>
      </ol>

      <h4>MADDE 7- SAKLAMAYI GEREKTİREN İŞLEME AMAÇLARI</h4>
      <p>
        Şirket aşağıdakiler dahil olmak ancak bununla sınırlı olmamak üzere,
        ilgili kişinin veya ilgili kişi tarafından belirtilen üçüncü tarafların
        kişisel verilerini çeşitli amaçlarla işleyebilir:
      </p>
      <ol>
        <li>İnsan kaynakları süreçlerini yürütmek</li>
        <li>Kurumsal iletişimi sağlamak</li>
        <li>Şirket güvenliğini sağlamak</li>
        <li>İstatistiksel çalışmalar yapabilmek</li>
        <li>
          İmzalanan sözleşmeler ve protokoller neticesinde iş ve işlemleri ifa
          edebilmek
        </li>
        <li>
          Yasal düzenlemelerin gerektirdiği veya zorunlu kıldığı şekilde, hukuki
          yükümlülüklerin yerine getirilmesini sağlamak
        </li>
        <li>
          Şirket ile iş ilişkisinde bulunan gerçek / tüzel kişilerle irtibat
          sağlamak
        </li>
        <li>Yasal raporlamalar yapmak</li>
        <li>Çağrı merkezi süreçlerini yönetmek</li>
        <li>
          İleride doğabilecek hukuki uyuşmazlıklarda delil olarak ispat
          yükümlülüğünü yerine getirmek
        </li>
        <li>Şirket hukuk işlerinin icrası/takibini yapmak</li>
      </ol>

      <h4>MADDE 8- İMHAYI GEREKTİREN HUKUKİ SEBEPLER</h4>
      <p>
        Kişisel veriler, aşağıdaki durumların varlığı halinde ilgili kişinin
        talebi üzerine veya re’sen şirket tarafından silinir ya da yok edilir:
      </p>
      <ol>
        <li>
          Kişisel verinin işlenmesine esas teşkil eden ilgili mevzuat
          hükümlerinin değiştirilmesi veya kaldırılması
        </li>
        <li>
          Kişisel verinin işlenmesini veya saklanmasını gerektiren amacın
          ortadan kalkması
        </li>
        <li>
          Kişisel verileri işlemenin sadece açık rıza şartına istinaden
          gerçekleştiği hallerde, ilgili kişinin açık rızasını geri alması
        </li>
        <li>
          Kanunun 11 inci maddesi gereği ilgili kişinin hakları çerçevesinde
          kişisel verilerinin silinmesi ve yok edilmesine ilişkin yaptığı
          başvurunun veri sorumlusu tarafından kabul edilmesi
        </li>
        <li>
          Kişisel verilerin saklanmasını gerektiren azami sürenin geçmiş olması
          ve kişisel verileri daha uzun süre saklamayı haklı kılacak herhangi
          bir şartın mevcut olmaması
        </li>
      </ol>

      <h4>MADDE 9- TEKNİK TEDBİRLER</h4>
      <p>
        Şirket tarafından, işlediği kişisel verilerle ilgili olarak alınan
        teknik tedbirler aşağıdadır:
      </p>
      <ol>
        <li>Kurulan sistemler kapsamında gerekli iç kontrolleri yapar</li>
        <li>
          Kurulan sistemler kapsamında bilgi teknolojileri risk değerlendirmesi
          ve iş etki analizinin gerçekleştirilmesi süreçlerini yürütür
        </li>
        <li>
          Verilerin şirket dışına sızmasını engelleyecek veyahut gözlemleyecek
          teknik altyapının temin edilmesini ve ilgili matrislerin
          oluşturulmasını sağlar
        </li>
        <li>
          Düzenli olarak ve ihtiyaç oluştuğunda sızma testi hizmeti alarak
          sistem zafiyetlerinin kontrolünü sağlar
        </li>
        <li>
          Bilgi teknolojileri birimlerinde çalışanların kişisel verilere erişim
          yetkilerinin kontrol altında tutulmasını sağlar
        </li>
        <li>
          Kişisel verilerin yok edilmesi geri dönüştürülemeyecek ve denetim izi
          bırakmayacak şekilde sağlanır
        </li>
        <li>
          Kanun’un 12. maddesi uyarınca, kişisel verilerin saklandığı her türlü
          dijital ortam, bilgi güvenliği gereksinimlerini sağlayacak şekilde
          şifreli veyahut kriptografik yöntemler ile korunur
        </li>
      </ol>

      <h4>MADDE 10- İDARİ TEDBİRLER</h4>
      <p>
        Şirket tarafından, işlediği kişisel verilerle ilgili olarak alınan idari
        tedbirler aşağıdadır:
      </p>
      <ol>
        <li>
          Saklanan kişisel verilere Şirket içi erişimi iş tanımı gereği erişmesi
          gerekli personel ile sınırlandırır. Erişimin sınırlandırılmasında
          verinin özel nitelikli olup olmadığı ve önem derecesi de dikkate
          alınır.
        </li>
        <li>
          İşlenen kişisel verilerin hukuka aykırı yollarla başkaları tarafından
          elde edilmesi hâlinde, bu durumu en kısa sürede ilgilisine ve Kurul’a
          bildirir.
        </li>
        <li>
          Kişisel verilerin paylaşılması ile ilgili olarak, kişisel verilerin
          paylaşıldığı kişiler ile kişisel verilerin korunması ve veri
          güvenliğine ilişkin çerçeve sözleşme imzalar yahut mevcut sözleşmesine
          eklenen hükümler ile veri güvenliğini sağlar.
        </li>
        <li>
          Kişisel verilerin işlenmesi hakkında bilgili ve deneyimli personel
          istihdam eder ve personeline kişisel verilerin korunması mevzuatı ve
          veri güvenliği kapsamında gerekli eğitimleri verir.
        </li>
        <li>
          Kendi tüzel kişiliği nezdinde Kanun hükümlerinin uygulanmasını
          sağlamak amacıyla gerekli denetimleri yapar ve yaptırır. Denetimler
          sonucunda ortaya çıkan gizlilik ve güvenlik zafiyetlerini giderir.
        </li>
      </ol>

      <h4>MADDE 11- KİŞİSEL VERİLERİN SİLİNMESİ YÖNTEMLERİ</h4>
      <p>Kişisel veriler EK TABLO: 3’te belirtilen yöntemlerle silinir.</p>
      <h4>MADDE 12- KİŞİSEL VERİLERİN YOK EDİLMESİ YÖNTEMLERİ</h4>
      <p>Kişisel veriler EK TABLO: 4’te belirtilen yöntemlerle yok edilir.</p>
      <h4>MADDE 13- SAKLAMA VE İMHA SÜRELERİ</h4>
      <p>
        Şirket tarafından kişisel verilerin saklama süresi belirlenirken;
        öncelikle yasal mevzuatta söz konusu kişisel verinin saklanmasına
        ilişkin olarak bir süre öngörülmüş ise bu süreye riayet edilir. Bunun
        haricinde; EK TABLO: 5’te yer alan saklama ve imha süresi tablosu esas
        alınır.
      </p>
      <h4>MADDE 14- PERİYODİK İMHA SÜRESİ</h4>
      <p>
        Şirket her yıl Haziran ve Aralık aylarında periyodik imha işlemi
        gerçekleştirilir.
      </p>
      <h4>MADDE 15- POLİTİKANIN YAYIMLANMASI, SAKLANMASI VE GÜNCELLENMESİ</h4>
      <p>
        Politika, ıslak imzalı (basılı kâğıt) ve elektronik ortamda olmak üzere
        iki farklı ortamda yayımlanır, internet sayfasında kamuoyuna ilan
        edilir. Basılı kâğıt nüshası şirket bünyesinde saklanır. Politika,
        ihtiyaç duyuldukça gözden geçirilir ve gerekli bölümler güncellenir.
      </p>
      <h4>MADDE 16- YÜRÜRLÜK</h4>
      <p>
        Politika, şirketin internet sitesinde yayınlanmasının ardından yürürlüğe
        girmiş kabul edilir. Yürürlükten kaldırılmasına karar verilmesi halinde,
        politikanın ıslak imzalı eski nüshaları iptal edilerek (iptal kaşesi
        vurularak veya iptal yazılarak) imzalanır ve en az 5 yıl süre ile şirket
        tarafından saklanır.
      </p>
      <h4>EK TABLO: 1 Saklama ve imha süreçleri görev dağılımı</h4>
      <table class="custom-table">
        <thead>
          <tr>
            <th>UNVANI</th>
            <th>BİRİMİ-ADI</th>
            <th>GÖREVİ</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Komite Başkanı</td>
            <td>OYA AYÇETİN</td>
            <td>
              MEVLANA PETROL GRUP Kişisel Veri Komitesinin toplanması; kişisel
              veri politikaların uygulanması ve yürütülmesi; Komite üyeleri ile
              koordinasyonun sağlanması; ve süreçlere ilişkin Yönetim Kurulunun
              Bilgilendirilmesi; Kişisel Verilerin Korunması Kurulu ile
              ilişkilerin takibi; Kurul Kararlarının takibi, uygulanması ve
              süreçlerin yönetimi; Şirketin Kişisel Verilerin Korunması Kurulu
              nezdindeki temsili
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>Bilgi İşlem Sorumlusu: CEM TUNÇ </td>
            <td>
              KVKK mevzuatı uyarınca, kişisel verilerin işlenmesi, saklanması,
              imha edilmesi ve anonimleştirilmesi için gerekli bilgi
              teknolojileri sistemlerinin tesis edilmesi ve çalışır durumda
              olmasının sağlanması; kişisel verilerin yurt içinde ve yurt dışına
              aktarılması için gerekli teknik mekanizmaların oluşturulması; veri
              güvenliğinin sağlanması; veri güvenliği sağlayan sistemlerin
              önerilmesi ve bu sistemlerin uygulanması ve Komite’nin bu
              konularda bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>İnsan Kaynakları Sorumlusu FUNDA ÖZEN</td>
            <td>
              MEVLANA PETROL GRUP insan kaynakları işlemlerinin yürütülmesi
              esnasında kişisel verilerin KVKK ile uyumlu bir biçimde
              işlenmesinin, imha edilmesinin ve anonimleştirilmesinin sağlanması
              ve bu işlemlere ilişkin gerekli adımların atılması ve Komite’nin
              bu konularda bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>Hukuk Bölümü Sorumluları Av. MEHMET CAN KARACA</td>
            <td>
              MEVLANA PETROL GRUP hukuk faaliyetlerinin yürütülmesi esnasında
              kişisel verilerin KVKK ile uyumlu bir biçimde işlenmesinin, imha
              edilmesinin ve anonimleştirilmesinin sağlanması ve bu işlemlere
              ilişkin gerekli adımların atılması ve Komite’nin bu konularda
              bilgilendirilmesi, komite kararlarında hukuki destek sağlamak.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>Gıda Bölümü Sorumlusu GİZEM YILMAZ-HAKAN ŞANAL</td>
            <td>
              MEVLANA PETROL GRUP restoran faaliyetlerinin yürütülmesi esnasında
              kişisel verilerin KVKK ile uyumlu bir biçimde işlenmesinin, imha
              edilmesinin ve anonimleştirilmesinin sağlanması ve bu işlemlere
              ilişkin gerekli adımların atılması ve Komite’nin bu konularda
              bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>
              Akaryakıt Müşteri Hizmetleri ve Satış Destek Sorumlusu MEHMET AKAN{" "}
            </td>
            <td>
              MEVLANA PETROL GRUP akaryakıt satış destek; bayi ve müşterilerle
              iletişim ve bayi ve müşterilere hizmet verilmesi faaliyetlerinin
              yürütülmesi esnasında kişisel verilerin KVKK ile uyumlu bir
              biçimde işlenmesinin, imha edilmesinin ve anonimleştirilmesinin
              sağlanması ve bu işlemlere ilişkin gerekli adımların atılması ve
              Komite’nin bu konularda bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>İdari İşler Bölümü Sorumlusu SENİYE TÜRK </td>
            <td>
              MEVLANA PETROL GRUP şirket içi idari denetim ve işlerin yapılması,
              müşteri memnuniyeti, talep öneri ve istek kayıtları ve ilgili
              işlemlerin yürütülmesi esnasında kişisel verilerin KVKK ile uyumlu
              bir biçimde işlenmesinin, imha edilmesinin ve
              anonimleştirilmesinin sağlanması ve bu işlemlere ilişkin gerekli
              adımların atılması ve Komite’nin bu konularda bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>İş Sağlığı ve Güvenliği Bölümü Sorumlusu KASIM KOPTUR</td>
            <td>
              MEVLANA PETROL GRUP şirket içi ve müşterilere yönelik İSG
              tedbirlerini alınmasında çalışan bilgileri ve müşteri iletişim
              bilgilerinin toplanması ve ilgili faaliyetlerinin yürütülmesi
              esnasında kişisel verilerin KVKK ile uyumlu bir biçimde
              işlenmesinin, imha edilmesinin ve anonimleştirilmesinin sağlanması
              ve bu işlemlere ilişkin gerekli adımların atılması ve Komite’nin
              bu konularda bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>TOLGA ÖZEN </td>
            <td>
              MEVLANA PETROL GRUP Kişisel Veri Komitesinin toplanması; kişisel
              veri politikaların uygulanması ve yürütülmesi; Komite üyeleri ile
              koordinasyonun sağlanması; ve süreçlere ilişkin Yönetim Kurulunun
              Bilgilendirilmesi; Kişisel Verilerin Korunması Kurulu ile
              ilişkilerin takibi; Kurul Kararlarının takibi, uygulanması ve
              süreçlerin yönetimi; Şirketin Kişisel Verilerin Korunması Kurulu
              nezdindeki temsili
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>İnsan Kaynakları Sorumlusu AYŞEGÜL AKPINAR</td>
            <td>
              MEVLANA PETROL GRUP insan kaynakları işlemlerinin yürütülmesi
              esnasında kişisel verilerin KVKK ile uyumlu bir biçimde
              işlenmesinin, imha edilmesinin ve anonimleştirilmesinin sağlanması
              ve bu işlemlere ilişkin gerekli adımların atılması ve Komite’nin
              bu konularda bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>
              Hukuk Bölümü Sorumluları Av. BEYZA M. KESER <br></br> Av. M. FATİH
              YILMAZ
            </td>
            <td>
              MEVLANA PETROL GRUP restoran faaliyetlerinin yürütülmesi esnasında
              kişisel verilerin KVKK ile uyumlu bir biçimde işlenmesinin, imha
              edilmesinin ve anonimleştirilmesinin sağlanması ve bu işlemlere
              ilişkin gerekli adımların atılması ve Komite’nin bu konularda
              bilgilendirilmesi.
            </td>
          </tr>
        </tbody>
      </table>

      <span>EK TABLO: 2 Kişisel Veri Saklama Ortamları</span>
      <table class="custom-table">
        <thead>
          <tr>
            <th>Elektronik Ortamlar</th>
            <th>Elektronik Olmayan Ortamlar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Kişisel bilgisayarlarMobil CihazlarOptik disklerYazıcılar,
              tarayıcılar, fotokopi makineleriÇıkarılabilir ve taşınabilir
              belleklerSunucularYazılımlarBilgi güvenliği cihazları
            </td>
            <td>
              KağıtlarYazılı ve basılı ortamlarGörsel kayıtlarManuel veri kayıt
              sistemleri
            </td>
          </tr>
        </tbody>
      </table>

      <span>EK TABLO: 3 Kişisel Verilerin Silinmesi Yöntemleri</span>
      <table class="custom-table">
        <thead>
          <tr>
            <th>Veri Kayıt Ortamı</th>
            <th>Silinme Yöntemi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sunucular</td>
            <td>
              Sunucularda yer alan kişisel verilerden saklanmasını gerektiren
              süre sona erenler için sistem yöneticisi tarafından ilgili
              kullanıcıların erişim yetkisi kaldırılarak silme işlemi yapılır.
            </td>
          </tr>
          <tr>
            <td>Elektronik ortam</td>
            <td>
              Elektronik ortamda yer alan kişisel verilerden saklanmasını
              gerektiren süre sona erenler, veritabanı yöneticisi hariç diğer
              çalışanlar (ilgili kullanıcılar) için hiçbir şekilde erişilemez ve
              tekrar kullanılamaz hale getirilir.
            </td>
          </tr>
          <tr>
            <td>Fiziksel ortam</td>
            <td>
              Fiziksel ortamda tutulan kişisel verilerden saklanmasını
              gerektiren süre sona erenler için evrak arşivinden sorumlu birim
              yöneticisi hariç diğer çalışanlar için hiçbir şekilde erişilemez
              ve tekrar kullanılamaz hale getirilir. Ayrıca, üzeri okunamayacak
              şekilde çizilerek/boyanarak/silinerek karartma işlemi de
              uygulanır.
            </td>
          </tr>
          <tr>
            <td>Taşınabilir medya</td>
            <td>
              Flash tabanlı saklama ortamlarında tutulan kişisel verilerden
              saklanmasını gerektiren süre sona erenler, sistem yöneticisi
              tarafından şifrelenerek ve erişim yetkisi sadece sistem
              yöneticisine verilerek şifreleme anahtarlarıyla güvenli ortamlarda
              saklanır.
            </td>
          </tr>
        </tbody>
      </table>

      <span>EK TABLO: 4 Kişisel Verilerin Yok Edilmesi Yöntemleri</span>
      <table class="custom-table">
        <thead>
          <tr>
            <th>Veri Kayıt Ortamı</th>
            <th>Yok Edilme Yöntemi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fiziksel ortam</td>
            <td>
              Kâğıt ortamında yer alan kişisel verilerden saklanmasını
              gerektiren süre sona erenler, evrak imha makinelerinde geri
              döndürülemeyecek şekilde yok edilir.
            </td>
          </tr>
          <tr>
            <td>Optik ya da manyetik medya</td>
            <td>
              Optik medya ve manyetik medyada yer alan kişisel verilerden
              saklanmasını gerektiren süre sona erenlerin eritilmesi, yakılması
              veya toz haline getirilmesi gibi fiziksel olarak yok edilmesi
              işlemi uygulanır. Ayrıca, manyetik medya özel bir cihazdan
              geçirilerek yüksek değerde manyetik alana maruz bırakılması
              suretiyle üzerindeki veriler okunamaz hale getirilir
            </td>
          </tr>
        </tbody>
      </table>

      <span>EK TABLO: 5 Saklama ve İmha Süresi Tablosu</span>
      <table class="custom-table">
        <thead>
          <tr>
            <th>Veri Kategorisi</th>
            <th>Saklama Süresi</th>
            <th>İmha Süresi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Kimlik</td>
            <td>
              İşlem tarihi veya hukuki ilişkinin sonlanmasından itibaren 10 yıl
            </td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>İletişim</td>
            <td>
              İşlem tarihi veya hukuki ilişkinin sonlanmasından itibaren 10 yıl
            </td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Lokasyon</td>
            <td>Satın Alma</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Özlük</td>
            <td>İstihdamın sonlanmasından itibaren 10 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Hukuki İşlem</td>
            <td>
              Yargı kararının kesinleşmesinden itibaren 5 yıl Saklama süresinin
              bitimini takip eden ilk periyodik imha süresinde İşlem tarihi veya
              hukuki ilişkinin sonlanmasından itibaren 10 yıl
            </td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Müşteri İşlem</td>
            <td>
              İşlem tarihi veya hukuki ilişkinin sonlanmasından itibaren 10 yıl
            </td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Fiziksel Mekân Güvenliği </td>
            <td>30 gün</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>İşlem Güvenliği</td>
            <td>
              İşlem tarihi veya hukuki ilişkinin sonlanmasından itibaren 10 yıl
            </td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Risk Yönetimi</td>
            <td>
              İşlem tarihi veya hukuki ilişkinin sonlanmasından itibaren 10 yıl
            </td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>İşlem Güvenliği</td>
            <td>Satın Alma</td>
            <td>Tedarik Süreci Yönetimi</td>
          </tr>
          <tr>
            <td>Finans</td>
            <td>
              İşlem tarihi veya hukuki ilişkinin sonlanmasından itibaren 10 yıl
            </td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Mesleki Deneyim</td>
            <td>İstihdamın sonlanmasından itibaren 10 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Pazarlama</td>
            <td>İstihdamın sonlanmasından itibaren 10 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Görsel ve İşitsel Kayıtlar</td>
            <td>
              İşlem tarihi veya hukuki ilişkinin sonlanmasından itibaren 10 yıl
            </td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Sendika Üyeliği</td>
            <td>İstihdamın sonlanmasından itibaren 10 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Sağlık Bilgileri </td>
            <td>15 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Ceza Mahkûmiyeti Ve Güvenlik Tedbirleri </td>
            <td>İstihdamın sonlanmasından itibaren 10 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Aile Bilgileri</td>
            <td>10 Yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Çalışma Verisi</td>
            <td>10 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Web Sitesi Kullanım Verileri</td>
            <td>2 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Talep/Şikayet Yönetimi Bilgisi </td>
            <td>2 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>İtibar Yönetimi Bilgisi </td>
            <td>10 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Olay Yönetimi Bilgisi </td>
            <td>2 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>İmzalar</td>
            <td>10 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Sigorta Bilgileri</td>
            <td>İstihdamın sonlanmasından itibaren 10 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Araç Bilgileri</td>
            <td>10 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Uyum Bilgileri</td>
            <td>10 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Denetim ve Teftiş</td>
            <td>10 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
          <tr>
            <td>Yabancı Oturma İzni Bilgileri</td>
            <td>İstihdamın sonlanmasından itibaren 10 yıl</td>
            <td>
              Saklama süresinin bitimini takip eden ilk periyodik imha süresinde
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>,

    // ÜÇÜNCÜ BUTONN!!
    <div className="content-box">
      <h3>KVKK POLİTİKASI</h3>
      <h4>
        MEVLANA PETROL ÜRÜNLERI TURIZM TAŞIMACILIK PAZARLAMA İNŞAAT TICARET
        LIMITED ŞIRKETI
      </h4>
      <h4>KİŞİSEL VERİLERİN KORUNMASI VE İŞLENMESİ POLİTİKASI</h4>
      <p>
        <span>Hedef Kitle:</span> Mevlana Petrol Ürünleri Turizm Taşımacılık
        Pazarlama İnşaat Ticaret Limited Şirketi Tarafından kişisel verileri
        işlenen tüm gerçek kişiler
      </p>
      <p>
        <span>Hazırlayan:</span> Mevlana Petrol Ürünleri Turizm Taşımacılık
        Pazarlama İnşaat Ticaret Limited Şirketi Kişisel Verilerin Korunması
        Komitesi
      </p>
      <p>
        <span>Versiyon:</span> 1.0
      </p>
      <p>
        <span>Onaylayan:</span> Mevlana Petrol Ürünleri Turizm Taşımacılık
        Pazarlama İnşaat Ticaret Limited Şirketi tarafından onaylanmıştır.
      </p>
      <h4>İÇİNDEKİLER</h4>
      <h4>
        MEVLANA PETROL ÜRÜNLERI TURIZM TAŞIMACILIK PAZARLAMA İNŞAAT TICARET
        LIMITED ŞIRKETI
      </h4>
      <h4>KİŞİSEL VERİLERİN KORUNMASI VE İŞLENMESİ POLİTİKASI</h4>
      <h4>1. GİRİŞ</h4>
      <p>
        Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret
        Limited Şirketi (“Şirket”) olarak Mevlana Petrol Ürünleri Turizm
        Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi
      </p>
      <p>
        Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret
        Limited Şirketi yürüttüğü faaliyetlerde kişisel verilerin korunmasına
        önem vermekte ve iş ve işlemlerinde öncelikleri arasında kabul
        etmektedir. Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat
        Ticaret Limited Şirketi Kişisel Verilerin Korunması ve İşlenmesi
        Politikası (“Politika”), 6698 sayılı Kişisel Verilerin Korunması
        Kanunu’nca (“Kanun”) belirlenen kişisel veri işleme usul ve esaslarının
        Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret
        Limited Şirketi organizasyon ve iş süreçlerinin uyumuna yönelik temel
        düzenlemedir. Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama
        İnşaat Ticaret Limited Şirketi bu Politika prensipleri doğrultusunda,
        üst düzey sorumluluk ve bilinciyle kişisel verileri işlemekte ve
        korumakta, kişisel veri sahiplerini bilgilendirerek gerekli şeffaflığı
        sağlamaktadır.
      </p>
      <h4>2. AMAÇ</h4>
      <p>
        Bu Politikanın amacı, Kanun ve ilgili diğer mevzuat ile öngörülen usul
        ve esasları, Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat
        Ticaret Limited Şirketi organizasyon ve süreçlerine uyumlulaştırılarak,
        faaliyetlerinde etkin bir şekilde uygulanmasını sağlamaktır. Mevlana
        Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited
        Şirketi kişisel verilerin işlenmesi ve korunması için bu Politika ile
        her türlü idari ve teknik önlemleri almakta, gerekli iç prosedürler
        oluşturmakta, farkındalığı arttırmakta, bilincin sağlanması için gerekli
        tüm eğitimleri yapmaktadır. Hissedarlar, yetkililer, çalışanlar ve iş
        ortaklarının Kanun süreçlerine uyumları için, gerekli tüm önlemler
        alınmakta, uygun ve etkin denetim mekanizmaları kurulmaktadır.
      </p>
      <h5>1.2.Kapsam</h5>
      <p>
        Politika, Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat
        Ticaret Limited Şirketi iş süreçlerinde otomatik olan ya da herhangi bir
        veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla
        elde edilen bütün kişisel verileri kapsamaktadır.
      </p>
      <h5>1.2.1.Dayanak</h5>
      <p>
        Politika, Kanun ve ilgili mevzuata dayanmaktadır. Kişisel veriler, 5179
        sayılı Gıdaların Üretimi, Tüketimi ve Denetlenmesine Dair Kanun Hükmünde
        Kararnamenin Değiştirilerek Kabulü Hakkında Kanun, Gıda ve Gıda İle
        Temasta Bulunan Madde ve Malzemelerin Piyasa Gözetimi, Kontrolü ve
        Denetimi İle İşyeri Sorumluluklarına Dair Yönetmelik, 6502 sayılı
        Tüketicinin Korunması Hakkında Kanun, 1774 sayılı Kimlik Bildirme
        Kanununu, 4857 sayılı İş Kanunu, 6331 İş Sağlığı ve Güvenliği Kanunu,
        5510 sayılı Sosyal Sigortalar ve Genel Sağlık Sigortası Kanunu, 4447
        sayılı İşsizlik Sigortası Kanunu, 6102 sayılı Türk Ticaret Kanunu, 213
        sayılı Vergi Usul Kanunu ve diğer ilgili mevzuattan kaynaklanan
        kaynaklanan yasal yükümlülükleri yerine getirmek için işlenmektedir.
      </p>
      <p>
        Yürürlükteki mevzuat ve Politika arasında uyumsuzluk olduğu hallerde
        yürürlükteki mevzuat uygulanır. İlgili mevzuat tarafından öngörülen
        düzenlemeler, Politika ile Mevlana Petrol Ürünleri Turizm Taşımacılık
        Pazarlama İnşaat Ticaret Limited Şirketi uygulamalarına
        dönüştürülmektedir.
      </p>

      <table class="custom-table">
        <tbody>
          <tr>
            <td>Açık rıza</td>
            <td>
              Belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür
              iradeyle açıklanan rızayı ifade eder.
            </td>
          </tr>
          <tr>
            <td>Başvuru Formu</td>
            <td>
              Kişisel veri sahiplerinin haklarını kullanmak için yapacakları
              başvuruyu içeren, 6698 sayılı Kişisel Verilerin Korunması Kanununa
              ve Kişisel Verileri Koruma Kurumunun çıkardığı Veri Sorumlusuna
              Başvuru Usul ve Esasları Hakkında Tebliğe uygun olarak
              hazırlanmış, ilgili kişi (Kişisel Veri Sahibi) tarafından veri
              sorumlusuna yapılacak başvurulara ilişkin başvuru formu.
            </td>
          </tr>
          <tr>
            <td>İlgili kullanıcı</td>
            <td>
              Verilerin teknik olarak depolanması, korunması ve yedeklenmesinden
              sorumlu olan kişi ya da birim hariç olmak üzere veri sorumlusu
              organizasyonu içerisinde veya veri sorumlusundan aldığı yetki ve
              talimat doğrultusunda kişisel verileri işleyen kişilerdir.
            </td>
          </tr>
          <tr>
            <td>İmha</td>
            <td>
              Kişisel verilerin silinmesi, yok edilmesi veya anonim hale
              getirilmesi.
            </td>
          </tr>
          <tr>
            <td>Kayıt ortamı</td>
            <td>
              Tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt
              sisteminin parçası olmak kaydıyla otomatik olmayan yollarla
              işlenen kişisel verilerin bulunduğu her türlü ortam.
            </td>
          </tr>
          <tr>
            <td>Kişisel veri</td>
            <td>
              Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her
              türlü bilgi.
            </td>
          </tr>
          <tr>
            <td>Kişisel verilerin işlenmesi</td>
            <td>
              Kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi
              bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan
              yollarla elde edilmesi, kaydedilmesi, depolanması, muhafaza
              edilmesi, değiştirilmesi, yeniden düzenlenmesi, açıklanması,
              aktarılması, devralınması, elde edilebilir hâle getirilmesi,
              sınıflandırılması ya da kullanılmasının engellenmesi gibi veriler
              üzerinde gerçekleştirilen her türlü işlem.
            </td>
          </tr>
          <tr>
            <td>Kişisel verilerin anonim hale getirilmesi</td>
            <td>
              Kişisel verilerin, başka verilerle eşleştirilerek dahi hiçbir
              surette kimliği belirli veya belirlenebilir bir gerçek kişiyle
              ilişkilendirilemeyecek hâle getirilmesi.
            </td>
          </tr>
          <tr>
            <td>Kişisel veri sahibi</td>
            <td>
              Kişisel verileri Mevlana Petrol Ürünleri Turizm Taşımacılık
              Pazarlama İnşaat Ticaret Limited Şirketi tarafından veya adına
              işleme sokulan gerçek kişi.
            </td>
          </tr>
          <tr>
            <td>Kişisel verilerin silinmesi</td>
            <td>
              Kişisel verilerin silinmesi; kişisel verilerin İlgili Kullanıcılar
              için hiçbir şekilde erişilemez ve tekrar kullanılamaz
              halegetirilmesi.
            </td>
          </tr>
          <tr>
            <td>Kişisel verilerin yok edilmesi</td>
            <td>
              Kişisel verilerin hiç kimse tarafından hiçbir şekilde erişilemez,
              geri getirilemez ve tekrar kullanılamaz hale getirilmesi işlemi.
            </td>
          </tr>
          <tr>
            <td>Kurul</td>
            <td>Kişisel Verileri Koruma Kurulu</td>
          </tr>
          <tr>
            <td>Kurum</td>
            <td>Kişisel Verileri Koruma Kurumu</td>
          </tr>
          <tr>
            <td>Özel nitelikli kişisel veri</td>
            <td>
              Kişilerin ırkı, etnik kökeni, siyasi düşüncesi, felsefi inancı,
              dini, mezhebi veya diğer inançları, kılık ve kıyafeti, dernek,
              vakıf ya da sendika üyeliği, sağlığı, cinsel hayatı, ceza
              mahkûmiyeti ve güvenlik tedbirleriyle ilgili verileri
              ilebiyometrik ve genetik verileri.
            </td>
          </tr>
          <tr>
            <td>Periyodik imha</td>
            <td>
              Kanun’da yer alan kişisel verilerin işlenme şartlarının tamamının
              ortadan kalkması durumunda kişisel verileri saklama ve imha
              politikasında belirtilen ve tekrar eden aralıklarla re’sen
              gerçekleştirilecek silme, yok etme veya anonim hale getirme
              işlemi.
            </td>
          </tr>
          <tr>
            <td>Veri İşleyen</td>
            <td>
              Veri sorumlusunun verdiği yetkiye dayanarak onun adına kişisel
              veri işleyen gerçek ve tüzel kişi.
            </td>
          </tr>
          <tr>
            <td>Veri Kayıt Sistemi</td>
            <td>
              Kişisel verilerin belirli kriterlere göre yapılandırılarak
              işlendiği kayıt sistemi.
            </td>
          </tr>
          <tr>
            <td>Veri sahibi / İlgili kişi</td>
            <td>Kişisel verisi işlenen gerçek kişi.</td>
          </tr>
          <tr>
            <td>Veri sorumlusu</td>
            <td>
              Kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen,
              veri kayıt sisteminin kurulmasından ve yönetilmesinden sorumlu
              olan gerçek veya tüzel kişi.
            </td>
          </tr>
          <tr>
            <td>Veri Temsilcisi</td>
            <td>
              {" "}
              Kanun uyarınca Veri Sorumlusunun ilgili kanun maddeleri
              kapsamındaki görevlerini yerine getirmek üzere atanmış gerçek
              kişi.
            </td>
          </tr>
          <tr>
            <td>Yönetmelik</td>
            <td>
              28 Ekim 2017 tarihinde Resmi Gazete’ de yayımlanan Kişisel
              Verilerin Silinmesi, Yok Edilmesi veya Anonim Hale Getirilmesi
              Hakkında Yönetmelik
            </td>
          </tr>
        </tbody>
      </table>
      <h4>2. Kişisel Verilerin Korunması Konuları</h4>
      <h5>1. işisel Verilerin GüvenliğininSağlanması</h5>
      <p>Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi, kişisel verilerin hukuka aykırı açıklanmasını, erişimini, aktarılmasını veya başka şekillerde oluşabilecek güvenlik sorunlarını önlemek için, kişisel verinin niteliğine göre, Kanun’un 12. maddesinde öngörülen gerekli önlemleri almaktadır. Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi, Kişisel Verileri Koruma Kurumu tarafından yayımlanmış olan rehberlere uygun olarak gerekli kişisel veri güvenlik seviyesini sağlamak için tedbirler almakta, denetimler gerçekleştirmektedir.</p>
      <h5>2. Özel Nitelikli Kişisel VerilerinKorunması</h5>
      <p>Özel nitelikte olan, kişilere ait ırk, etnik köken, siyasi düşünce, felsefi inanç, din, mezhep veya diğer inançlar, kılık ve kıyafet, dernek, vakıf ya da sendika üyeliği, sağlık, cinsel hayat, ceza mahkûmiyeti, güvenlik tedbirleriyle ilgili veriler ile biyometrik ve genetik verilerin korunmasına yönelik alınan önlemler özenle uygulanmakta ve gerekli denetimler yapılmaktadır.</p>
      <h5>3. KişiselVerilerin Korunmasıveİşlenmesi Bilincinin Geliştirilmesi</h5>
      <p>Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi, kişisel verilerin hukuka uygun işlenmesini, erişilmesini, verilerin muhafazası ve hakları kullanmaya yönelik bilincin geliştirilmesi için ilgililere gerekli eğitimleri verir.</p>
      <p>Çalışanların kişisel verileri koruma bilincini arttırmak için, Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi gerekli iş süreçlerini oluşturur, ihtiyaç duyulması halinde danışmanlardan destek alır. Uygulamada karşılaşılan eksiklikler ve eğitimlerin sonucu Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi yönetimi tarafından değerlendirilir. Yapılan bu değerlendirmeler ile ilgili mevzuattaki değişikliklere bağlı ihtiyaç duyulması halinde yeni eğitimler düzenlenir.</p>

      <h3>3. KİŞİSEL VERİLERİN İŞLENMESİ</h3>
      <h3>3.1 Kişisel Verilerin Mevzuata Uygun İşlenmesi</h3>
      <p>Kişisel veriler aşağıda sayılan ilkeler doğrultusunda mevzuata uygun işlenir.</p>
      <h5>1. Hukuka ve Dürüstlük Kuralına Uygun İşleme</h5>
      <p>Kişisel veriler, iş süreçlerinin gerektirdiği ölçüde, bunlarla sınırlı, kişilerin temel hak ve özgürlüklerine zarar vermeden, hukuka ve dürüstlük kuralına uygun olarak işlenir.</p>
      <h5>2. Kişisel Verilerin Güncel ve Doğru ve Olmasını Sağlama</h5>
      <p>İşlenen kişisel veriler, güncel ve doğru tutmak için gerekli önlemler alınmakta ve plan ve programlı çalışılmaktadır.</p>
      <h5>3. Belirli, Açık ve Meşru Amaçlarla İşleme </h5>
      <p>Kişisel veriler, yürütülen iş süreçlerinde belirlenen ve açıklanan meşru amaçlara bağlı işlenmektedir .</p>
      <h5>4. İşlendikleriAmaçlaBağlantılı,SınırlıveÖlçülüOlma</h5>
      <p>Kişisel veriler, iş süreçlerinin gerektirdiği nitelik ve ölçüde toplamakta, belirlenen amaçlara bağlı, sınırlı işlenmektedir.</p>
      <h5>5. GerekliOlanSüreKadarMuhafaza Etme</h5>
      <p>Kişisel veriler, ilgili mevzuatta öngörülen ve kişisel verileri işleme amacı için gerekli olan en az süre kadar muhafaza edilmektedir. Öncelikle, ilgili mevzuatta kişisel verilerin saklanması için bir süre öngörülmüş ise bu süreye, öngörülmemiş ise kişisel veriler işlendikleri amaç için gerekli olan süre kadar muhafaza edilmektedir. Kişisel veriler saklama sürelerinin sonunda periyodik imha sürelerine veya veri sahibi başvurusuna uygun olarak, uygun yöntemlerle (silme, yok etme veya anonimleştirme) imha edilmektedir.</p>
      
      <h3>3.2. Kişisel Verilerin İşlenme Şartları</h3>
      {/*----------------burda kaldınn ----------------- */}
    </div>,


    //DÖRDÜNCÜ BUTON!!
    <div className="content-box">
      <h3>AYDINLATMA METNİ</h3>
      <h4>
        MEVLANA PETROL ÜRÜNLERİ TURİZM TAŞIMACILIK PAZARLAMA İNŞAAT TİCARET
        LİMİTED ŞİRKETİ{" "}
      </h4>
      <h4>AYDINLATMA METNİ</h4>
      <p>
        Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret
        Limited Şirketi (“Şirket”) olarak, 6698 Sayılı Kişisel Verilerin
        Korunması Kanunu’nun (“Kanun”) 10uncu maddesi uyarınca hazırladığımız ve
        şirketin kişisel veri işleme faaliyetleri hakkında bilgi içeren
        aydınlatma metnini kamuoyunun ve ilgili kişilerin bilgilerine sunarız;
      </p>
      <h4>MADDE 1: VERİ SORUMLUSU</h4>
      <p>
        Kişisel verileriniz, veri sorumlusu sıfatıyla Mevlana Petrol Ürünleri
        Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi (şirket
        unvanı yazılacak) tarafından aşağıda açıklanan kapsamda
        işlenebilecektir. Veri sorumlusu kavramından anlaşılması gereken;
        kişisel verilerin işleme amaçlarını ve vasıtalarını belirleyen, veri
        kayıt sisteminin kurulmasında ve yönetilmesinden sorumlu gerçek veya
        tüzel kişidir. Veri sorumlusuyla irtibata geçmek için aşağıdaki
        kanalları kullanabilirsiniz:
      </p>

      <table class="custom-table">
        <tbody>
          <tr>
            <td>Unvanı</td>
            <th>:</th>
            <td>Mevlana Petrol Ürünleri Tur. Taş. Paz. İnş. Tic. Ltd. Şti</td>
          </tr>
          <tr>
            <td>Mersis Numarası</td>
            <th>:</th>
            <td>0620007742900018</td>
          </tr>
          <tr>
            <td>Adresi</td>
            <th>:</th>
            <td>Yenigün Mah. Mevlana Cd. No: 66 Muratpaşa/Antalya</td>
          </tr>
          <tr>
            <td>Telefonu</td>
            <th>:</th>
            <td>242 312 55 00</td>
          </tr>
          <tr>
            <td>Fax</td>
            <th>:</th>
            <td>242 312 51 05</td>
          </tr>
          <tr>
            <td>Kayıtlı e Posta (KEP)</td>
            <th>:</th>
            <td>mevlanapetrol@hs02.kep.tr</td>
          </tr>
        </tbody>
      </table>

      <span>Veri Sahibi Olarak Haklarınızın Kullanması</span>
      <p>
        Haklarınızı kullanmaya yönelik başvuruları, “www.mevlanapetrol.com.tr”
        adresinden ulaşılan Veri Sahibi Başvuru Formu’nu doldurulup, Form’da
        yapılan açıklamalara uygun şekilde kvkk@mevlanapetrol.com.tr adresine
        ileterek yapabilirsiniz.{" "}
      </p>
      <p>
        Talepler niteliğine göre, en kısa sürede ve en geç otuz gün içinde
        ücretsiz sonuçlandırılır; ancak işlemin ayrıca bir maliyet gerektirmesi
        halinde Kişisel Verileri Koruma Kurulu tarafından belirlenecek tarifeye
        göre ilgili taraftan ücret talep edilebilir.
      </p>
      <p>
        Kişisel verilerinizin işlenmesine ve korunmasına ilişkin detaylı
        bilgilere (www.mevlanapetrol.com.tr) adresinde yer alan MEVLANA PETROL
        Kişisel Verilerin Korunması ve İşlenmesi Politikası’ndan
        ulaşabilirsiniz.
      </p>

      <h4>MADDE 2: KİŞİSEL VERİLERİ İŞLEME AMACI</h4>
      <p>Kişisel veriler tarafımızca aşağıdaki amaçlarla işlenmektedir:</p>
      <ol>
        <li>İnsan kaynakları süreçlerini yürütmek</li>
        <li>Kurumsal iletişimi sağlamak</li>
        <li>Kurumsal iletişimi sağlamak</li>
        <li>Kurumsal iletişimi sağlamak</li>
        <li>
          İmzalanan sözleşmeler ve protokoller neticesinde iş ve işlemleri ifa
          edebilmek
        </li>
        <li>
          Yasal düzenlemelerin gerektirdiği veya zorunlu kıldığı şekilde, hukuki
          yükümlülüklerin yerine getirilmesini sağlamak
        </li>
        <li>
          Şirket ile iş ilişkisinde bulunan gerçek / tüzel kişilerle irtibat
          sağlamak
        </li>
        <li>Yasal raporlamalar yapmak</li>
        <li>Çağrı merkezi süreçlerini yönetmek</li>
        <li>
          İleride doğabilecek hukuki uyuşmazlıklarda delil olarak ispat
          yükümlülüğünü yerine getirmek
        </li>
        <li>
          İleride doğabilecek hukuki uyuşmazlıklarda delil olarak ispat
          yükümlülüğünü yerine getirmek
        </li>
      </ol>

      <h4>
        MADDE 3: KİŞİSEL VERİLERİN AKTARILABİLECEĞİ TARAFLAR VE AKTARMA AMACI
      </h4>
      <p>
        Müşterilere ilişkin kişisel veriler, Kanun’un 8. ve 9. maddelerinde
        belirtilen kişisel veri işleme şartları ve amaçları çerçevesinde, Şirket
        tarafından sunulan ürün ve hizmetlerin ilgili kişilerin beğeni, kullanım
        alışkanlıkları ve ihtiyaçlarına göre özelleştirilerek ilgili kişilere
        önerilmesi ve tanıtılması için gerekli olan aktivitelerin planlanması ve
        icrası, Şirket tarafından sunulan ürün ve hizmetlerden ilgili kişileri
        faydalandırmak için gerekli çalışmaların iş birimleri tarafından
        yapılması ve ilgili iş süreçlerinin yürütülmesi, Şirket tarafından
        yürütülen ticari faaliyetlerin gerçekleştirilmesi için ilgili iş
        birimleri tarafından gerekli çalışmaların yapılması ve buna bağlı iş
        süreçlerinin yürütülmesi, Şirket’in ticari ve/veya iş stratejilerinin
        planlanması ve icrası ve Şirket’in ve Şirket’le iş ilişkisi içerisinde
        olan ilgili kişilerin hukuki, teknik ve ticari-iş güvenliğinin temini
        amaçları dahilinde şirketin iş ortakları ve tedarikçileri ile hukuken
        yetkili kurum ve kuruluşlar ile hukuken yetkili özel hukuk tüzel
        kişileriyle paylaşılabilecektir.
      </p>

      <h4>MADDE 4: KİŞİSEL VERİ TOPLAMA YÖNTEMLERİ VE HUKUKİ SEBEPLERİ</h4>
      <p>
        Kişisel veriler; internet sitesi, mobil uygulama ve sosyal mecralardaki
        bilgi ve talep formları, akıllı telefonlara indirilen aplikasyonlar gibi
        elektronik ortamlar aracılığıyla yahut fiziki ortamlarda toplanmaktadır.
        Kişisel verilerin toplanması ve işlenmesine dair hukuki sebepler
        aşağıdadır:
      </p>
      <ol>
        <li>
          Kişisel verilerin sözleşmelerin kurulması ve ifası ile doğrudan
          doğruya ilgili olması nedeniyle saklanması,{" "}
        </li>
        <li>
          Kişisel verilerin bir hakkın tesisi, kullanılması veya korunması
          amacıyla saklanması
        </li>
        <li>
          Kişisel verilerin kişilerin temel hak ve özgürlüklerine zarar vermemek
          kaydıyla şirketin meşru menfaatleri için saklanmasının zorunlu olması
        </li>
        <li>
          Kişisel verilerin şirketin herhangi bir hukuki yükümlülüğünü yerine
          getirmesi amacıyla saklanması
        </li>
        <li>Mevzuatta kişisel verilerin saklanmasının açıkça öngörülmesi</li>
        <li>
          Veri sahiplerinin açık rızasının alınmasını gerektiren saklama
          faaliyetleri açısından veri sahiplerinin açık rızasının bulunması
        </li>
      </ol>

      <h4>MADDE 5: İLGİLİ KİŞİNİN HAKLARI</h4>

      <ol>
        Kişisel verisi işlenen gerçek kişi, ilgili kişi olarak tanımlanır ve
        şirkete başvurarak kendisiyle ilgili aşağıdaki haklara sahiptir:
        <li>Kişisel veri işlenip işlenmediğini öğrenme</li>
        <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme</li>
        <li>
          Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp
          kullanılmadığını öğrenme{" "}
        </li>
        <li>
          Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü
          kişileri bilme
        </li>
        <li>
          Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların
          düzeltilmesini isteme
        </li>
        <li>Kişisel verilerin silinmesini veya yok edilmesini isteme</li>
        <li>
          (e) ve (f) bentleri uyarınca yapılan işlemlerin, kişisel verilerin
          aktarıldığı üçüncü kişilere bildirilmesini isteme
        </li>
        <li>
          İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz
          edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya
          çıkmasına itiraz etme
        </li>
        <li>
          Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara
          uğraması halinde zararın giderilmesini talep etme
        </li>
      </ol>

      <p>Saygılarımıza;</p>
      <span>
        Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret
        Limited Şirketi
      </span>
    </div>,
    //BEŞİNCİ BUTON!!!
    <div className="content-box">
      <h3>KVKK KURULU İÇ YÖNERGE</h3>
      <h4>
        MEVLANA PETROL ÜRÜNLERİ TURİZM TAŞIMACILIK PAZARLAMA İNŞAAT TİCARET
        LİMİTED ŞİRKETİ
      </h4>
      <h4>KİŞİSEL VERİLERİ KORUMA KOMİTESİ İÇ YÖNERGESİ</h4>
      <p>
        Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret
        Limited Şirketi (“Mevlana Petrol”) Kişisel Verileri Koruma Komitesi
        (“Komite”) İç Yönergesi (“İç Yönerge”), 07/04/2016 tarihli, 29677 sayılı
        Resmi Gazete’de yayımlanan 6698 sayılı Kişisel Verilerin Korunması
        Kanunu’na (“Kanun”), Kişisel Verileri Koruma Kurumu’nun çıkardığı ve
        28/10/2017 tarihli, 30224 sayılı Resmi Gazete’de yayımlanan Kişisel
        Verilerin Silinmesi, Yok Edilmesi veya Anonim Hale Getirilmesi Hakkında
        Yönetmelik’e (“Yönetmelik”), Mevlana Petrol Ürünleri Turizm Taşımacılık
        Pazarlama İnşaat Ticaret Limited Şirketi Kişisel Verilerin Korunması ve
        İşlenmesi Politikası’na (“Politika”) ve Mevlana Petrol Ürünleri Turizm
        Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi Kişisel Veri
        Saklama ve İmha Politikası’na (“Saklama ve İmha Politikası”) uygun
        olarak hazırlanmıştır.
      </p>
      <p>
        Kanun ve Yönetmelik uyarınca kişisel veri saklama ve imha süreçlerinin
        yürütülmesi ve gerekli iş ve işlemlerin yapılması amacıyla, veri
        sorumlusu Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat
        Ticaret Limited Şirketi nezdinde bir Kişisel Verileri Koruma Komitesi
        kurulmuştur. Bu kapsamda, kişisel verilerin korunması düzenlemeleri ve
        Politikalar gereğince kişisel verilerin saklanması ve imhası için
        Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret
        Limited Şirketi tarafından gerekli iç düzenlemeler yapılmakta ve
        farkındalığın oluşması için ihtiyaç duyulan sistem kurulmaktadır.
      </p>
      <span>Amaç:</span>
      <p>
        <span>Madde 1-</span> İşbu İç Yönerge; Komite’nin, görevlerini, kişisel
        verilerin korunması düzenlemeleri ve Politikalar çerçevesinde uyması
        gereken esasları ve Politikalara bağlı olarak uygulayacağı prosedürleri
        yerine getirmesine ilişkin hususların belirlenmesi amacıyla
        hazırlanmıştır.
      </p>
      <span>Kapsam:</span>
      <p>
        <span>Madde 2-</span> İşbu İç Yönerge Komite’nin ve üyelerinin ilgili
        sorumluluk, çalışma ve faaliyetlerini kapsar.
      </p>
      <span>Dayanak:</span>
      <p>
        <span>Madde 3-</span> Bu İç Yönerge; 6698 Sayılı Kişisel Verilerin
        Korunması Kanunu ile İlgili yukarıda anılan düzenlemelere dayanılarak
        hazırlanmıştır.
      </p>
      <span>
        Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret
        Limited Şirketi Kişisel Verileri Koruma Komitesi:
      </span>
      <p>
        <span>Madde 4-</span> Komite, Kanun kapsamındaki yükümlülüklerini yerine
        getirmek, Politikaların uygulanmasını sağlamak ve denetlemek, bunların
        işleyişine yönelik önerilerde bulunmak üzere Mevlana Petrol Ürünleri
        Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi yönetim
        kurulu tarafından atanır. Kurul; Mevlana Petrol Ürünleri Turizm
        Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi KVK düzenlemeleri
        kapsamında denetim, uyumluluk ve sürdürülebilir etkinliği sağlamakla
        görevlidir. Komite üyelerinin görev dağılımları, Komite’den üye
        çıkarılması veya eklenmesi veri sorumlusunun verdiği yetki ile komite
        başkanı tarafından gerçekleştirilir.
      </p>
      <span>Veri Sorumlusu Temsilcisi:</span>
      <p>
        <span>Madde 5–</span> Veri Sorumlusu Temsilcisi, Komite içerisinden
        seçilir ve Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat
        Ticaret Limited Şirketi’nin Kurum ile olan ilişkilerini yürütür.
      </p>
      <span>Üyeler:</span>
      <p>
        <span>Madde 6-</span> Komite’nin oluşumu ve kişilere görevleri aşağıda
        belirlenmiştir.
      </p>

      <table class="custom-table">
        <tbody>
          <tr>
            <td>Komite Başkanı</td>
            <td>TOLGA ÖZEN</td>
            <td>
              MEVLANA PETROL GRUP Kişisel Veri Komitesinin toplanması; kişisel
              veri politikaların uygulanması ve yürütülmesi; Komite üyeleri ile
              koordinasyonun sağlanması; ve süreçlere ilişkin Yönetim Kurulunun
              Bilgilendirilmesi; Kişisel Verilerin Korunması Kurulu ile
              ilişkilerin takibi; Kurul Kararlarının takibi, uygulanması ve
              süreçlerin yönetimi; Şirketin Kişisel Verilerin Korunması Kurulu
              nezdindeki temsili
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>Bilgi İşlem Sorumlusu: CEM TUNÇ</td>
            <td>
              KVKK mevzuatı uyarınca, kişisel verilerin işlenmesi, saklanması,
              imha edilmesi ve anonimleştirilmesi için gerekli bilgi
              teknolojileri sistemlerinin tesis edilmesi ve çalışır durumda
              olmasının sağlanması; kişisel verilerin yurt içinde ve yurt dışına
              aktarılması için gerekli teknik mekanizmaların oluşturulması; veri
              güvenliğinin sağlanması; veri güvenliği sağlayan sistemlerin
              önerilmesi ve bu sistemlerin uygulanması ve Komite’nin bu
              konularda bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>İnsan Kaynakları Sorumlusu: AYŞEGÜL AKPINAR</td>
            <td>
              MEVLANA PETROL GRUP insan kaynakları işlemlerinin yürütülmesi
              esnasında kişisel verilerin KVKK ile uyumlu bir biçimde
              işlenmesinin, imha edilmesinin ve anonimleştirilmesinin sağlanması
              ve bu işlemlere ilişkin gerekli adımların atılması ve Komite’nin
              bu konularda bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>
              Hukuk Bölümü Sorumluları Av. BEYZA M. KESER <br></br>Av. M. FATİH
              YILMAZ
            </td>
            <td>
              MEVLANA PETROL GRUP hukuk faaliyetlerinin yürütülmesi esnasında
              kişisel verilerin KVKK ile uyumlu bir biçimde işlenmesinin, imha
              edilmesinin ve anonimleştirilmesinin sağlanması ve bu işlemlere
              ilişkin gerekli adımların atılması ve Komite’nin bu konularda
              bilgilendirilmesi, komite kararlarında hukuki destek sağlamak.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>Gıda Bölümü SorumlusuGİZEM YILMAZ-HAKAN ŞANAL</td>
            <td>
              MEVLANA PETROL GRUP restoran faaliyetlerinin yürütülmesi esnasında
              kişisel verilerin KVKK ile uyumlu bir biçimde işlenmesinin, imha
              edilmesinin ve anonimleştirilmesinin sağlanması ve bu işlemlere
              ilişkin gerekli adımların atılması ve Komite’nin bu konularda
              bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>Akaryakıt Bölümü SorumlusuS.SALİH YILMAZ – ADİL ASKAN</td>
            <td>
              MEVLANA PETROL GRUP Akaryakıt ve LPG ürünleri, sevkiyat, terminal
              depolama ,karayolları taşıması, bayi, müşteri, kamu kurumları ve
              resmi daireler ile iletişim ve hizmet faaliyetlerinin yürütülmesi
              esnasında kanun, yönetmelik ve şirket talimatları dahilinde
              ihtiyaç duyulan kişisel verilerin KVKK ile uyumlu bir biçimde
              işlenmesinin, imha edilmesinin ve anonimleştirilmesinin sağlanması
              ve bu işlemlere ilişkin gerekli adımların atılması ve Komite’nin
              bu konularda bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>
              Akaryakıt Müşteri Hizmetleri ve Satış Destek Sorumlusu MEHMET AKAN
            </td>
            <td>
              MEVLANA PETROL GRUP akaryakıt satış destek; bayi ve müşterilerle
              iletişim ve bayi ve müşterilere hizmet verilmesi faaliyetlerinin
              yürütülmesi esnasında kişisel verilerin KVKK ile uyumlu bir
              biçimde işlenmesinin, imha edilmesinin ve anonimleştirilmesinin
              sağlanması ve bu işlemlere ilişkin gerekli adımların atılması ve
              Komite’nin bu konularda bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>Muhasebe ve Finans Müdürü LÜTFİ KIYICI</td>
            <td>
              MEVLANA PETROL GRUP muhasebe, fatura arşivleme ve işleme, banka
              işlemleri vb. hizmet faaliyetlerinin yürütülmesi esnasında kişisel
              verilerin KVKK ile uyumlu bir biçimde işlenmesinin, imha
              edilmesinin ve anonimleştirilmesinin sağlanması ve bu işlemlere
              ilişkin gerekli adımların atılması ve Komite’nin bu konularda
              bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>İdari İşler Bölümü SorumlusuSENİYE TÜRK – EMEL YUVACA</td>
            <td>
              MEVLANA PETROL GRUP şirket içi idari denetim ve işlerin yapılması,
              müşteri memnuniyeti, talep öneri ve istek kayıtları ve ilgili
              işlemlerin yürütülmesi esnasında kişisel verilerin KVKK ile uyumlu
              bir biçimde işlenmesinin, imha edilmesinin ve
              anonimleştirilmesinin sağlanması ve bu işlemlere ilişkin gerekli
              adımların atılması ve Komite’nin bu konularda bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>İş Sağlığı ve Güvenliği Bölümü Sorumlusu KASIM KOPTUR</td>
            <td>
              MEVLANA PETROL GRUP İSG faaliyetinin yerine getirilmesinde ,
              hizmet alınan firmaların iletişim bilgilerinin toplanması ve
              ilgili faaliyetlerinin yürütülmesi esnasında kişisel verilerin
              KVKK ile uyumlu bir biçimde işlenmesinin, imha edilmesinin ve
              anonimleştirilmesinin sağlanması ve bu işlemlere ilişkin gerekli
              adımların atılması ve Komite’nin bu konularda bilgilendirilmesi.
            </td>
          </tr>
          <tr>
            <td>Komite Üyesi</td>
            <td>Satın Alma Bölümü Sorumlusu İBRAHİM ERÇETİN</td>
            <td>
              MEVLANA PETROL GRUP Operasyon, İdari İşler, Malzeme Planlama ve
              Tedarik faaliyetlerinin yürütülmesi esnasında kişisel verilerin
              KVKK ile uyumlu bir biçimde işlenmesinin, imha edilmesinin ve
              anonimleştirilmesinin sağlanması ve bu işlemlere ilişkin gerekli
              adımların atılması ve Komite’nin bu konularda bilgilendirilmesi,
              alınan bilgilerin arşivlenmesi ile kanuni süresi sonunda imha
              edilmesi
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        <span>Madde 7-</span> Kişisel verilerin korunması, saklanması, işlenmesi
        ve kişisel verileri silme, yok etme ve anonim hale getirme süreçlerinin
        işletilmesinden Komite sorumludur.
      </p>

      <ol>
        Bu kapsamda Komite;
        <li>
          Gerekli prosedürleri oluşturur ve anılan prosedürün uygulanmasını
          sağlar.
        </li>
        <li>
          {" "}
          Kişisel verilere ilişkin mevzuatta bir değişiklik meydana gelirse,
          yeni düzenlemelere uyum için Mevlana Petrol Ürünleri Turizm
          Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi içi iş ve
          işlemlerin yapılmasını sağlar.
        </li>
        <li> Kişisel verilerin envanterini hazırlar.</li>
        <li> Kişisel verilerin envanterini periyodik olarak günceller.</li>
        <li>
          {" "}
          Kişisel verilerin envanterini sicile bildirir ve güncel tutulmasını
          sağlar.
        </li>
        <li>Sicil ile yazışmaları yapar ve yazışmaları saklar.</li>
      </ol>

      <p>
        Kişisel verileri işleyen üçüncü taraflar ise bu taraflarla yapılacak
        sözleşmeleri kontrol eder düzenlemeler kapsamında uyumluluğunu teyit
        eder. Üçüncü tarafları denetletir. Kişisel verileri işleyen gerçek ve
        tüzel kişileri belirler ve yetkilendirir.
      </p>

      <p>
        <span>Madde 8-</span> Kurul, Mevlana Petrol Ürünleri Turizm Taşımacılık
        Pazarlama İnşaat Ticaret Limited Şirketi içerisinde bulunan tüm kişisel
        verilerin korunmasına yönelik teknik ve idari önlemleri almak,
        gelişmeleri ve idari faaliyetleri sürekli takip etmekle ve gerekli
        prosedürleri hazırlayarak Mevlana Petrol Ürünleri Turizm Taşımacılık
        Pazarlama İnşaat Ticaret Limited Şirketi içerisinde duyurmak ve bunlara
        uyulmasını sağlamak ve denetlemekle yükümlüdür. Kurul kişisel verilerin
        korunması kapsamında belirli periyotlarda kendisi veya dışarıdan
        denetimlerin yapılmasını sağlar. Kişisel verileri koruma ile ilgili, üst
        yönetimi periyodik olarak toplayarak hem mevcut durumu hem risklerin
        görüşülmesini sağlar. Toplantı kararlarını ıslak imza ile alarak
        dosyalar. Kişisel verileri koruma ile ilgili birimleri periyodik olarak
        portaldan / e posta / duyuru ile bilgilendirir.
      </p>
      <p>
        <span>Madde 9-</span> Komite, tüm kişisel veri işleme süreçleri
        bakımından aydınlatma yükümlülüğünün yerine getirilmesini ve
        gerektiğinde açık rızanın alınmasını ve muhafazasını sağlamakla
        yükümlüdür.
      </p>

      <ol>
        Komite kişisel veriler ile ilgili;
        <li>Veri sorumlusunun kimliğinin duyurulmasını sağlar.</li>
        <li>
          Kişisel verilerin işlenme amaçlarının; belirli, meşru ve açık amaçlar
          için olmasını sağlar, denetletir ve hem çalışan hem müşterilere
          duyurulmasını sağlar.
        </li>
        <li>İşlenen verilerin kimlere hangi amaçla aktarılacağını açıklar.</li>
        <li>Veri toplama yöntemi ve hukuki sebebi açıklar.</li>
        <li>
          Komite kişisel verilerin işlenmesi için kişinin açık rızasının alınma
          yollarını belirler ve uygulatır, denetler.
        </li>
        <li>
          Özel nitelikli kişisel verilerin kayıt altına alınması durumunda açık
          rızanın alınmasını mutlaka garanti eder.
        </li>
        <li>
          Kişisel veri bulut sistemlerinde tutulacak ise veya yurtdışında
          saklanacak ise kişisel veri sahibinin mutlaka açık rızasının
          alınmasını sağlar. Kişisel verinin aktarılacağı yabancı ülkenin
          kurulca ilan edildiğinden emin olur.
        </li>
      </ol>

      <p>
        <span>Madde 10-</span> Kişisel verilerin üçüncü taraflara aktarılması
        durumunda paylaşılacak yerin/makam statüsüne göre veri sahibinden açık
        rıza alınacak mı alınmayacak mı belirler. Aşağıda açık rıza alınmayacak
        durumlar belirlenmiştir. Her durumda aşağıdaki kurumlarla hangi verinin
        paylaşıldığının kaydı ve aşağıdaki statüye uyan üçüncü tarafların
        geçerli esasa uygun olduklarını kayıt altına alır:
      </p>
      <ol>
        <li>Fiili imkânsızlıklar durumunda açık rıza alınamaması</li>
        <li>
          Kendisinin veya bir başkasının hayatı veya beden bütünlüğü söz konusu
          olduğunda
        </li>
        <li>Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması</li>
        <li>
          Sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli
          olması
        </li>
        <li>
          Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin
          zorunlu olması
        </li>
        <li>
          Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için
          zorunlu olması
        </li>
        <li>Kişi, kendi verisini alenileştirmiş olması durumunda</li>
        <li>Kişi, kendi verisini alenileştirmiş olması durumunda</li>
        <li>
          Siyasi parti, vakıf, dernek veya sendika gibi kar amacı gütmeyen
          kuruluş ya da oluşumların, tabi oldukları mevzuata ve amaçlarına uygun
          olmak, faaliyet alanlarıyla sınırlı olmak ve üçüncü kişilere
          açıklanmamak kaydıyla kendi üyelerine ve mensuplarına yönelik
          verilerin işlenmesi durumunda
        </li>
        <li>
          Kamu sağlığının korunması, koruyucu hekimlik, tıbbi teşhis, tedavi ve
          bakım hizmetlerinin yürütülmesi ile sağlık hizmetlerinin planlanması,
          yönetimi ve finansmanı amacıyla, sır saklama yükümlülüğü altında
          bulunan kişiler veya yetkili kurum ve kuruluşlar tarafından işlenmesi
          durumunda
        </li>
      </ol>
      <p>
        Kişisel veri yurtdışına aktarılacak ise açık rıza da alınmamış ise;
        verinin aktarılacağı yerde yeterli korumanın olması veya yeterli koruma
        olmaması durumunda Türkiye’deki ve ilgili yabancı ülkedeki veri
        sorumlularının yeterli bir korumayı yazılı olarak taahhüt etmeleri ve
        Kurulun izninin alınması durumunda paylaşılmasını koordine eder.
      </p>
      <p>
        Veriyi paylaşan bu veriyi paylaştığı yer ve amacını yazılı ve onaylı
        olarak yapılmasını sağlatır. Öneri verinin rızası alınıp alınmadığı
        kontrol edilir ve belgelendirilir. Hukuk ve veri sorumlusu onayı ile
        alındıktan sonra paylaşılmasını sağlatır.
      </p>
      <p>
        <span>Madde 11-</span> Komite, kişisel veri sahiplerinin başvurularını
        değerlendirir ve başvurulara cevap için Mevlana Petrol Ürünleri Turizm
        Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi içerisinde
        koordinasyonu sağlar. Kurul ile iletişim halinde olunması gereken
        durumlarda gerekli koordinasyonu ve iletişimi sağlar.
      </p>
      <ol>
        Kişisel veri sahibinin başvurması halinde aşağıdaki kişi haklarının
        yerine getirilmesini en geç 30 takvim günü içinde sağlar:
        <li>Kişinin kendi kişisel verisinin işlenip işlenmediğini bilmesi</li>
        <li>Kişisel veri ile ilgili bilgi talep etme</li>
        <li>İşlenme amacını açıklama</li>
        <li>
          Yurtiçi veya yurtdışında kişisel verilerin aktarıldığı üçüncü kişileri
          açıklama
        </li>
        <li>
          Kişisel verilerin eksik veya yanlış işlenmesi durumunda bunların
          düzeltilme taleplerini alma ve işlem tamamlandığında geri dönüş yapma
        </li>
        <li>
          Kişinin, kişisel bilgisini silme veya yok etme taleplerini alma ve
          işlem tamamlandığında geri dönüş yapma
        </li>
        <li>
          İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analizler
          sonucu veri sahibinin kendi aleyhine sonuç çıkması durumunda itiraz
          etmesi taleplerini alma ve işlem tamamlandığında geri dönüş yapma
        </li>
        <li>
          Kişisel verinin kanuna aykırı olarak işlenip işlenmediği kontrol etme
          ve kişiden gelen talepleri takip etme ve sonuçlandırma
        </li>
      </ol>
      <p>
        <span>Madde 12-</span> Komite, kişisel verilerin korunması, saklanması,
        işlenmesi ve imhası süreçlerinin Kanun’a ve Politikalara uyumu yönünde
        bir eksikliğin veya riskin tespit edilmesi halinde giderilmesi için
        gerekli önlemleri alır. Bu kapsamda Kurul, kendisine raporlanan her bir
        yeni işleme sürecinin denetimini yapar.
      </p>
      <ol>
        <span>Madde 13-</span> Komite, kişisel verilerin saklanması ve imhasına
        yönelik;
        <li>
          İlgili mevzuatlarda öngörülen veya işlendikleri amaç için gerekli olan
          saklama ve imha süresini belirler.
        </li>
        <li>
          {" "}
          Kişisel Verilerin Silinmesi, Yok Edilmesi veya Anonim Hale Getirilmesi
          Hakkında Yönetmelik’in 11/2 maddesi uyarınca, altı ayı geçmeyecek
          periyotlarda işlenen kişisel verileri denetleyerek silinmesi, imha
          edilmesi veya anonim hale getirilmesi gereken kişisel verilerin
          silinmesi, yok edilmesi veya anonim hale getirilmesini sağlar.
        </li>
        <li>
          {" "}
          Kişisel verilerin silinmesi, yok edilmesi ve anonim hale
          getirilmesiyle ilgili yapılan bütün işlemlerin kayıt altına alınmasını
          sağlar ve söz konusu kayıtların, diğer hukuki yükümlülükler hariç
          olmak üzere en az üç yıl süreyle saklanmasını sağlar.
        </li>
        <li>
          Aşağıdaki gerekçelerden herhangi biri olduğunda; kişisel verinin
          silinmesi, yok edilmesi veya anonimleştirilmesini, yönetmeliklerde
          belirlenen usul ve esaslar çerçevesinde sağlar:
        </li>
        <li> İşlenmesini gerektiren sebeplerin ortadan kalkması halinde</li>
        <li>Süresi dolması halinde</li>
        <li> Veri sahibinin talebi halinde</li>
      </ol>

      <p>
        <span>Madde 14-</span> Komite, Mevlana Petrol Ürünleri Turizm
        Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi çalışanları
        tarafından kendisine raporlanan durumlara ve Politikalarda belirtilen
        usul ve esaslara aykırı olduğunu düşündüğü iş, işlem yahut eylemler ile
        ilgili ihlale yönelik düzenlemelere uygun eylem planı oluşturur. Komite
        konuya ilişkin yürürlükteki mevzuat hükümlerini dikkate alarak ihlale
        ilişkin Kişisel Veri Sahibine veya Kurum’a yapılacak bildirimi hazırlar,
        Kurum ile yapılacak yazışma ve iletişimi yürütür.
      </p>
      <p>
        Kişisel verilere ilişkin başvurularda, prosüdüre ilişkin uygunsuz
        hallerde, denetimde Ek-1 Olay Yönetim şemasında öngörülen şekilde
        hareket edilir ve sonuçlandırılır. Buna ilişkin çalışmalarda diğer
        departmanlar gerekli yardımı gösterir.
      </p>
      <p>
        <span>Madde 15-</span> Kurulun isteyeceği belge ve bilgileri 15 takvim
        günü içinde gönderir ve gerektiğinde yerinde inceleme yapılmasına imkân
        sağlatır.
      </p>
      <p>
        Şikâyet durumunda veya herhangi bir nedenle Kurulun tebliğlerini takip
        eder ve 30 takvim günü içerisinde yerine getirilmesini sağlar.
      </p>
      <p>
        <span>Madde 16-</span> Komite, kişisel verilerin hukuka uygun olarak
        işlenmesi ve imhası ile hukuka aykırı erişimin önlenmesi amacıyla
        Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret
        Limited Şirketi çalışanlarının bilgilendirilmesini sağlar. Mevlana
        Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited
        Şirketi kişisel verilerine erişmesi gereken çalışanların söz konusu
        erişimi sağlamak için gerekli prosedürler oluşturulur ve bunun
        oluşturulması ve uygulanmasından Veri Sorumlusu Temsilcisi ve Komite
        müteselsilen sorumludur. Özel nitelikli kişisel verilere erişim
        yetkisinin verildiği sınırlı çalışanlara ait liste ve listenin takibi
        Komite tarafından yapılır.
      </p>
      <span>İç Yönergenin Yürürlüğe Girmesi ve Değişiklikler</span>
      <p>
        <span>Madde 17-</span> İç Yönerge, Mevlana Petrol Ürünleri Turizm
        Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi yönetimi tarafından
        yürürlüğe konulur. İç Yönerge’de yapılacak değişiklikler ve Yönerge
        düzenlemesi de aynı usule tabidir.
      </p>
    </div>,

    //ALTINCI BUTON!!
    <div id="cookie" className="content-box">
      <h3>GİZLİLİK VE ÇEREZ POLİTİKASI</h3>
      <h4>
        MEVLANA PETROL ÜRÜNLERİ TURİZM TAŞIMACILIK PAZARLAMA İNŞAAT TİCARET
        LİMİTED ŞİRKETİ{" "}
      </h4>
      <h4>WEB SİTESİ GİZLİLİK VE ÇEREZ POLİTİKASI</h4>
      <p>
        Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret
        Limited Şirketi (“Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama
        İnşaat Ticaret Limited Şirketi ”) tarafından işletilen (“Mevlana Petrol
        Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi ”)
        web sitesini ziyaret edenlerin (“ziyaretçi”) kişisel verilerini 6698
        sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca işlemekte
        ve gizliliğini korumaktayız. Bu Web Sitesi Gizlilik ve Çerez Politikası
        (“Politika”) ile ziyaretçilerin kişisel verilerinin işlenmesi, çerez
        politikası ve internet sitesi gizlilik ilkeleri belirlenmektedir.{" "}
      </p>
      <p>
        Çerezler (cookies), küçük bilgileri saklayan küçük metin dosyalarıdır.
        Çerezler, ziyaret ettiğiniz internet siteleri tarafından, tarayıcılar
        aracılığıyla cihazınıza veya ağ sunucusuna depolanır. İnternet sitesi
        tarayıcınıza yüklendiğinde, çerezler cihazınızda saklanır. Çerezler,
        internet sitesinin düzgün çalışmasını, daha güvenli hale getirilmesini,
        daha iyi kullanıcı deneyimi sunmasını sağlar. Oturum ve yerel depolama
        alanları da çerezlerle aynı amaç için kullanılır. İnternet sitemizde
        çerez bulunmamakta, oturum ve yerel depolama alanları çalışmaktadır.
      </p>
      <p>
        Web sitemizin ziyaretçiler tarafından en verimli şekilde faydalanılması
        için çerezler kullanılmaktadır. Çerezler tercih edilmemesi halinde
        tarayıcı ayarlarından silinebilir ya da engellenebilir. Ancak bu web
        sitemizin performansını olumsuz etkileyebilir. Ziyaretçi tarayıcıdan
        çerez ayarlarını değiştirmediği sürece bu sitede çerez kullanımını kabul
        ettiği varsayılır.
      </p>
      <ol>
        <li>
          Kişisel Verilerin İşlenme Amacı
          <p>
            Web sitemizi ziyaret etmeniz dolayısıyla elde edilen kişisel
            verileriniz aşağıda sıralanan amaçlarla Mevlana Petrol Ürünleri
            Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi
            tarafından Kanun’un 5. ve 6. maddelerine uygun olarak işlenmektedir:
          </p>
          <ul>
            <li>
              Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat
              Ticaret Limited Şirketi tarafından yürütülen ticari faaliyetlerin
              yürütülmesi için gerekli çalışmaların yapılması ve buna bağlı iş
              süreçlerinin gerçekleştirilmesi,
            </li>
            <li>
              Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat
              Ticaret Limited Şirketi tarafından sunulan ürün ve hizmetlerden
              ilgili kişileri faydalandırmak için gerekli çalışmaların yapılması
              ve ilgili iş süreçlerinin gerçekleştirilmesi,
            </li>
            <li>
              Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat
              Ticaret Limited Şirketi tarafından sunulan ürün ve hizmetlerin
              ilgili kişilerin beğeni, kullanım alışkanlıkları ve ihtiyaçlarına
              göre özelleştirilerek ilgili kişilere önerilmesi ve tanıtılması.
            </li>
          </ul>
        </li>
      </ol>

      <ol>
        <li>
          Kişisel Verilerin Aktarıldığı Taraflar ve Aktarım Amacı
          <p>
            Web sitemizi ziyaret etmeniz dolayısıyla elde edilen kişisel
            verileriniz, kişisel verilerinizin işlenme amaçları doğrultusunda,
            iş ortaklarımıza, tedarikçilerimize kanunen yetkili kamu kurumlarına
            ve özel kişilere Kanun’un 8. ve 9. maddelerinde belirtilen kişisel
            veri işleme şartları ve amaçları kapsamında aktarılabilmektedir.
          </p>
        </li>
      </ol>

      <ol>
        <li>Kişisel Verilerin Toplanma Yöntemi</li>
        <p>
          Çerezler, ziyaret edilen internet siteleri tarafından tarayıcılar
          aracılığıyla cihaza veya ağ sunucusuna depolanan küçük metin
          dosyalarıdır. Web sitemiz ziyaret edildiğinde, ziyaretçinin izniyle
          web sitemize ek olarak google.com, facebook.com, twitter.com,
          instagram.com, linkedin.com, youtube.com alanlarına da çerezler
          uygulanmaktadır.
        </p>
      </ol>

      <ol>
        <li>Çerezleri Kullanım Amacı</li>
        <p>
          Web sitemiz birinci ve üçüncü taraf çerezleri kullanır. Birinci taraf
          çerezleri çoğunlukla web sitesinin doğru şekilde çalışması için
          gereklidir, kişisel verilerinizi tutmazlar. Üçüncü taraf çerezleri,
          web sitemizin performansını, etkileşimini, güvenliğini, reklamları ve
          sonucunda daha iyi bir hizmet sunmak için kullanılır. Kullanıcı
          deneyimi ve web sitemizle gelecekteki etkileşimleri hızlandırmaya
          yardımcı olur. Bu kapsamda çerezler;
        </p>
        <p>
          İstatistikler: Bu çerezler, web sitesine gelen ziyaretçi sayısı,
          benzersiz ziyaretçi sayısı, web sitesinin hangi sayfalarının ziyaret
          edildiği, ziyaretin kaynağı vb. bilgileri depolar. Bu veriler, web
          sitesinin ne kadar iyi performans gösterdiğini ve analiz etmemize
          yardımcı olur.
        </p>
        <p>
          Pazarlama: Web sitemiz reklam veriyor. Bu çerezler, size gösterdiğimiz
          reklamları sizin için anlamlı olacak şekilde kişiselleştirmek için
          kullanılır. Bu çerezler ayrıca bu reklam kampanyalarının verimliliğini
          takip etmemize yardımcı olur. Bu çerezlerde depolanan bilgiler, üçüncü
          taraf reklam sağlayıcıları tarafından size tarayıcıdaki diğer web
          sitelerinde reklam göstermek için de kullanılabilir.
        </p>
        <p>
          İşlevsel: Bunlar, web sitemizdeki bazı önemli olmayan işlevlere
          yardımcı olan çerezlerdir. Bu işlevler arasında videolar gibi içerik
          yerleştirme veya web sitesindeki içerikleri sosyal medya
          platformlarında paylaşma yer alır.
        </p>
        <p>
          Tercihler: Bu çerezler ayarlarınızı kaydetmemize ve dil tercihleri
          gibi tarama tercihlerinizi belirlememize yardımcı olur, böylece web
          sitesine gelecekteki ziyaretlerinizde daha iyi ve verimli bir deneyime
          sahip olursunuz.
        </p>
      </ol>

      <h4>
        Teknik olarak web sitemizde kullanılan çerez türleri aşağıdaki tabloda
        gösterilmektedir.
      </h4>
      <table class="custom-table">
        <tbody>
          <tr>
            <td>Oturum Çerezleri(Session Cookies)</td>
            <td>
              Oturum çerezleri ziyaretçilerimizin web sitemizi ziyaretleri
              süresince kullanılan, tarayıcı kapatıldıktan sonra silinen geçici
              çerezlerdir. Amacı ziyaretiniz süresince İnternet Sitesinin düzgün
              bir biçimde çalışmasının teminini sağlamaktır.
            </td>
          </tr>
          <tr>
            <td>Kalıcı Çerezler(Persistent Cookies)</td>
            <td>
              Kalıcı çerezler web sitesinin işlevselliğini artırmak,
              ziyaretçilerimize daha hızlı ve iyi bir hizmet sunmak amacıyla
              kullanılan çerez türleridir. Bu tür çerezler tercihlerinizi
              hatırlamak için kullanılır ve tarayıcılar vasıtasıyla cihazınızda
              depolanır.
            </td>
          </tr>
          <tr>
            <td>Teknik Çerezler(Technical Cookies)</td>
            <td>
              Teknik çerezler ile web sitesinin çalışması sağlanmakta, internet
              sitesinin çalışmayan sayfaları ve alanları tespit edilmektedir.
            </td>
          </tr>
          <tr>
            <td>Otantikasyon Çerezleri(Authentication Cookies)</td>
            <td>
              Ziyaretçiler, şifrelerini kullanarak internet sitesine giriş
              yapmaları durumunda, ziyaret ettiği her bir sayfada site
              kullanıcısı olduğu belirlenerek, her sayfada şifresini yeniden
              girmesi önlenir.
            </td>
          </tr>
          <tr>
            <td>Flash Çerezleri(Flash Cookies)</td>
            <td>
              İnternet sitesinde yer alan görüntü veya ses içeriklerini
              etkinleştirmek için kullanılan çerez türleridir.
            </td>
          </tr>
          <tr>
            <td>Kişiselleştirme Çerezleri(Customization Cookies)</td>
            <td>
              Kullanıcıların dil gibi tercihlerini farklı internet sitesinin
              farklı sayfalarını ziyarette de hatırlamak için kullanılan
              çerezlerdir.{" "}
            </td>
          </tr>
          <tr>
            <td>Analitik Çerezler(Analytical Cookies)</td>
            <td>
              Web sitesini ziyaret edenlerin sayıları, görüntülenen sayfaların
              tespiti, ziyaret saatleri, sayfaları kaydırma hareketleri gibi
              analitik sonuçları izleyen çerezlerdir.
            </td>
          </tr>
        </tbody>
      </table>

      <span>
        Web sitemizde çerez kullanılmasının başlıca amaçları aşağıda
        sıralanmaktadır:
      </span>

      <ul>
        <li>
          İnternet sitesinin işlevselliğini ve performansını arttırmak yoluyla
          sizlere sunulan hizmetleri geliştirmek,
        </li>
        <li>
          İnternet Sitesini iyileştirmek ve İnternet Sitesi üzerinden yeni
          özellikler sunmak ve sunulan özellikleri sizlerin tercihlerine göre
          kişiselleştirmek,
        </li>
        <li>
          İnternet Sitesinin, Sizin ve Mevlana Petrol Ürünleri Turizm
          Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi ’ın hukuki ve
          ticari güvenliğinin teminini sağlamak.
        </li>
      </ul>

      <ol>
        <li>Çerez Tercihlerini Kontrol Etme</li>
        <p>
          Farklı tarayıcılar web siteleri tarafından kullanılan çerezleri
          engellemek ve silmek için farklı yöntemler sunar. Çerezleri engellemek
          / silmek için tarayıcı ayarları değiştirilmelidir. Tanımlama
          bilgilerinin nasıl yönetileceği ve silineceği hakkında daha fazla
          bilgi edinmek için www.allaboutcookies.org adresini ziyaret
          edilebilir. Ziyaretçi, tarayıcı ayarlarını değiştirerek çerezlere
          ilişkin tercihlerini kişiselleştirme imkânına sahiptir.{" "}
        </p>
      </ol>

      <ol>
        <li>Veri Sahiplerinin Hakları</li>
        <p>
          Kanunun “ilgili kişinin haklarını düzenleyen” 11. maddesi kapsamındaki
          talepleri, Politika’da düzenlendiği şekilde, ayrıntısını
          http://www.karatascam.com/kisisel-verilerin-korunmasi adresinden
          ulaşabileceğiniz Başvuru Formunu’nu Karataş Cam’a ileterek yapabilir.
          Talebin niteliğine göre en kısa sürede ve en geç otuz gün içinde
          başvuruları ücretsiz olarak sonuçlandırılır; ancak işlemin ayrıca bir
          maliyet gerektirmesi halinde Kişisel Verileri Koruma Kurulu tarafından
          belirlenecek tarifeye göre ücret talep edilebilir.
        </p>
      </ol>

      <ol>
        <li>Politika’nın Yürürlüğü</li>
        <p>
          Bu Politika yayınlandığı tarihte yürürlüğe girer. Politika’nın tümünün
          veya belirli maddelerinin yenilenmesi halinde Politika’nın yürürlük
          tarihi revize edilir.
        </p>
      </ol>

      <span>
        Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret
        Limited Şirketi Kişisel Verilerin Korunması ve İşlenmesi Politikası,
        Kişisel Veri Saklama ve İmha Politikası, Başvuru Formu için “Mevlana
        Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited
        Şirketi ” adresinden ulaşabilirsiniz.
      </span>
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
