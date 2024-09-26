import React, { useState,useEffect, useRef  } from "react";
import "../../Styles/Questions.scss";
import { MdArrowBackIosNew } from "react-icons/md";

const SSS = () => {
  const [activeContent, setActiveContent] = useState(null);

  const handleClick = (id) => {
    setActiveContent(activeContent === id ? null : id);
  };

  const [values, setValues] = useState({
    customer: 0,
    bpStation: 0,
    mpStation: 0,
});

const sectionRef = useRef(null);
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect(); // Sadece bir kez tetiklemek için
            }
        },
        { threshold: 0.5 } // Görünürlüğün %50'sinde tetikle
    );
    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }
}, []);

useEffect(() => {
    if (isVisible) {
        const increments = {
            customer: 11250,
            bpStation: 719,
            mpStation: 11,
        };

        const intervalTimes = {
            customer: 1, // Hızlı saymak için düşük değerler
            bpStation: 50,
            mpStation: 200,
        };

        const intervals = {};

        Object.keys(values).forEach((key) => {
            intervals[key] = setInterval(() => {
                setValues((prevValues) => {
                    const newValue = Math.min(
                        prevValues[key] + 1,
                        increments[key]
                    );
                    return { ...prevValues, [key]: newValue };
                });
            }, intervalTimes[key]);
        });

        return () => {
            Object.values(intervals).forEach(clearInterval);
        };
    }
}, [isVisible]);


  return (
    <section className="mainDivQuestions">
      <div className="divQue-gray">
        <h2>RAKAMLARLA MP TAŞITMATİK</h2>
        <div className="numerical-values" ref={sectionRef}>
            <div className="numerical-div">
                <span>{values.customer}+</span>
                <p>Mutlu Müşteri</p>
            </div>

            <div className="numerical-div">
                <span>{values.bpStation}</span>
                <p>BP İstasyon</p>
            </div>

            <div className="numerical-div">
                <span>{values.mpStation}</span>
                <p>MP İstasyon</p>
            </div>
        </div>
        <h2>SIK SORULAN SORULAR</h2>
        <div className="line-div"></div>

        <div>
          <div className="question-container">
            <button
              className={`questionGray ${
                activeContent === "content1" ? "active" : ""
              }`}
              onClick={() => handleClick("content1")}
            >
             {activeContent ==="content1" ? <MdArrowBackIosNew className="rotating-iconActive"/> : <MdArrowBackIosNew className="rotating-icon"/>}
             Taşıt akaryakıt tanıma sistemi nedir?
            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content1" ? "open" : ""
              }`}
              id="content1"
            >
              <p>
              Taşıt akaryakıt tanıma sistemi, araç sahiplerine ve işletmelere yakıt alım süreçlerini otomatikleştiren bir teknolojidir. Araçların plakalarını ve yakıt pompalarını tanıyarak, sürücülerin kart veya etiket kullanarak hızlıca yakıt almasını sağlar.
              </p>
            </div>
          </div>
          <div className="button-container">
            <button
              className={`questionGray ${
                activeContent === "content2" ? "active" : ""
              }`}
              onClick={() => handleClick("content2")}
            >
                {activeContent ==="content2" ? <MdArrowBackIosNew className="rotating-iconActive"/> : <MdArrowBackIosNew className="rotating-icon"/>}
                Bu sistem nasıl çalışır ve hangi teknolojileri kullanır?

            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content2" ? "open" : ""
              }`}
              id="content2"
            >
              <p>
              Görüntü işleme ve RFID teknolojileri kullanarak çalışır. Araçların plakalarını tanımlayarak veya önceden yüklenmiş etiketleri okuyarak aracın sahibini tespit eder. Bu sayede sürücüler yakıt pompasına gidip doğrudan işlemi gerçekleştirebilir.
              </p>
            </div>
          </div>
          <div className="button-container">
            <button
              className={`questionGray ${
                activeContent === "content3" ? "active" : ""
              }`}
              onClick={() => handleClick("content3")}
            >
                {activeContent ==="content3" ? <MdArrowBackIosNew className="rotating-iconActive"/> : <MdArrowBackIosNew className="rotating-icon"/>}
                Taşıt akaryakıt tanıma sistemi hangi avantajları sunar?
            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content3" ? "open" : ""
              }`}
              id="content3"
            >
              <p>
              Bu sistem, sürücülerin yakıt alımını hızlandırır ve kolaylaştırır. Nakit veya kart işlemleriyle uğraşma gerekliliğini ortadan kaldırarak zamandan tasarruf sağlar. İşletmeler için yakıt giderlerini daha iyi yönetmeyi ve izlemeyi mümkün kılar.
              </p>
            </div>
          </div>

          <div className="button-container">
            <button
              className={`questionGray ${
                activeContent === "content4" ? "active" : ""
              }`}
              onClick={() => handleClick("content4")}
            >
                {activeContent ==="content4" ? <MdArrowBackIosNew className="rotating-iconActive"/> : <MdArrowBackIosNew className="rotating-icon"/>}
                Nasıl bir kurulum süreci gereklidir?

            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content4" ? "open" : ""
              }`}
              id="content4"
            >
              <p>
          Kurulum, özel donanımın araçlara ve yakıt pompalarına entegre edilmesini içerir. Sürücüler ve işletmeler, sisteme kaydolarak plaka veya etiketlerini iliştirebilir.Kurulum, özel donanımın araçlara ve yakıt pompalarına entegre edilmesini içerir. Sürücüler ve işletmeler, sisteme kaydolarak plaka veya etiketlerini iliştirebilir.
              </p>
            </div>
          </div>

          <div className="button-container">
            <button
              className={`questionGray ${
                activeContent === "content5" ? "active" : ""
              }`}
              onClick={() => handleClick("content5")}
            >
                {activeContent ==="content1" ? <MdArrowBackIosNew className="rotating-iconActive"/> : <MdArrowBackIosNew className="rotating-icon"/>}
                Hangi tür araçlar için uygun bir çözümdür?
            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content5" ? "open" : ""
              }`}
              id="content5"
            >
              <p>
              Bu çözüm, bireysel araç sahiplerinin yanı sıra filo sahipleri ve işletmeler için de uygundur.
              </p>
            </div>
          </div>

          <div className="button-container">
            <button
              className={`questionGray ${
                activeContent === "content6" ? "active" : ""
              }`}
              onClick={() => handleClick("content6")}
            >
                {activeContent ==="content6" ? <MdArrowBackIosNew className="rotating-iconActive"/> : <MdArrowBackIosNew className="rotating-icon"/>}
                Sistem nasıl yakıt tasarrufu sağlar ve nasıl verimlilik artırır?
            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content6" ? "open" : ""
              }`}
              id="content6"
            >
              <p>
              Otomatik tanıma sayesinde işlem hızlanır ve hatalı işlemler azalır, bu da sürücülerin daha fazla zaman kazanmasını ve işletmelerin daha verimli çalışmasını sağlar.
              </p>
            </div>
          </div>

          <div className="button-container">
            <button
              className={`questionGray ${
                activeContent === "content7" ? "active" : ""
              }`}
              onClick={() => handleClick("content7")}
            >
                {activeContent ==="content7" ? <MdArrowBackIosNew className="rotating-iconActive"/> : <MdArrowBackIosNew className="rotating-icon"/>}
                Kullanıcılar nasıl kayıt olabilir ve sistemi nasıl kullanabilir?
            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content7" ? "open" : ""
              }`}
              id="content7"
            >
              <p>
              Kullanıcılar, firmadan temin edilen özel etiketleri veya kartları kullanarak sisteme kayıt olur. Ardından, yakıt alımı sırasında etiket veya kartlarını kullanarak işlemi gerçekleştirebilirler.
              </p>
            </div>
          </div>

          <div className="button-container">
            <button
              className={`questionGray ${
                activeContent === "content8" ? "active" : ""
              }`}
              onClick={() => handleClick("content8")}
            >
                {activeContent ==="content8" ? <MdArrowBackIosNew className="rotating-iconActive"/> : <MdArrowBackIosNew className="rotating-icon"/>}
                Akaryakıt tanıma sistemi ile ilgili güvenlik önlemleri nelerdir?
            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content8" ? "open" : ""
              }`}
              id="content8"
            >
              <p>
              Sistem, araç plakaları veya özel etiketler kullanarak kimlik doğrulaması yapar. Veriler şifrelenir ve yetkisiz erişimi önlemek için güvenlik protokolleri kullanılır.
              </p>
            </div>
          </div>

          <div className="button-container">
            <button
              className={`questionGray ${
                activeContent === "content9" ? "active" : ""
              }`}
              onClick={() => handleClick("content9")}
            >
                {activeContent ==="content9" ? <MdArrowBackIosNew className="rotating-iconActive"/> : <MdArrowBackIosNew className="rotating-icon"/>}
                Sistem arızaları veya kesintileri durumunda ne gibi önlemler alınmıştır?
            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content9" ? "open" : ""
              }`}
              id="content9"
            >
              <p>
              Sistem kesintilerine karşı yedekleme mekanizmaları ve teknik destek sağlanır. Kullanıcılar alternatif ödeme yöntemlerini kullanabilir.
              </p>
            </div>
          </div>

          <div className="button-container">
            <button
              className={`questionGray ${
                activeContent === "content10" ? "active" : ""
              }`}
              onClick={() => handleClick("content10")}
            >
                {activeContent ==="content10" ? <MdArrowBackIosNew className="rotating-iconActive"/> : <MdArrowBackIosNew className="rotating-icon"/>}
                Bu sistemle ilgili maliyetler ve geri dönüş süresi nedir?
            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content10" ? "open" : ""
              }`}
              id="content10"
            >
              <p>
              Kurulum ve işletme maliyetleri değişkenlik gösterir. Ancak, zaman ve işgücü tasarrufu, verimlilik artışı ve hatalı işlemlerin azalması gibi faktörler göz önüne alındığında genellikle kısa sürede geri dönüş sağlar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SSS;
