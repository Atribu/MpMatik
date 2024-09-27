import React, { useState } from "react";
import "../../Styles/Questions.scss";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

const Questions = () => {
  const [activeContent, setActiveContent] = useState(null);

  const handleClick = (id) => {
    setActiveContent(activeContent === id ? null : id);
  };

  return (
    <section className="mainDivQuestions">
      <div className="divQue-gray">
        <h2>SİZDEN GELEN SORULAR</h2>
        <div className="line-div"></div>

        <div>
          <div className="question-container">
            <button
              className={`questionGray ${
                activeContent === "content1" ? "active" : ""
              }`}
              onClick={() => handleClick("content1")}
            >
             {activeContent ==="content1" ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20}/>}
              BP Taşıtmatik Nedir?
            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content1" ? "open" : ""
              }`}
              id="content1"
            >
              <p>
                BP Taşıtmatik, sürücülere akaryakıt alımlarını kolaylaştıran ve
                avantajlı hale getiren bir hizmettir. Taşıtmatik kart sahipleri,
                BP istasyonlarında ödeme yapabilir ve özel indirimlerden
                yararlanabilirler.
              </p>
            </div>
          </div>
          <div className="question-container">
            <button
              className={`questionGray ${
                activeContent === "content2" ? "active" : ""
              }`}
              onClick={() => handleClick("content2")}
            >
               {activeContent ==="content2" ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20}/>}
              BP Taşıtmatik Kart Nasıl Alınır?
            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content2" ? "open" : ""
              }`}
              id="content2"
            >
              <p>
                BP Taşıtmatik kartınızı mptasitmatik.com üzerinden hızlı ve
                kolay bir şekilde başvuru yaparak alabilirsiniz. Başvuru işlemi
                sonrasında kartınızı hemen kullanmaya başlayabilirsiniz.
              </p>
            </div>
          </div>
          <div className="question-container">
            <button
              className={`questionGray ${
                activeContent === "content3" ? "active" : ""
              }`}
              onClick={() => handleClick("content3")}
            >
                {activeContent ==="content3" ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20}/>}
              BP Taşıtmatik Kartı Nerede Kullanabilirim?
            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content3" ? "open" : ""
              }`}
              id="content3"
            >
              <p>
                BP Taşıtmatik kartınızı Türkiye genelindeki BP istasyonlarında
                kullanabilirsiniz. Kartınızı kullanabileceğiniz BP
                istasyonlarının listesine mptasitmatik.com üzerinden
                ulaşabilirsiniz.
              </p>
            </div>
          </div>

          <div className="question-container">
            <button
              className={`questionGray ${
                activeContent === "content4" ? "active" : ""
              }`}
              onClick={() => handleClick("content4")}
            >
             {activeContent ==="content4" ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20}/>}
              BP Taşıtmatik Kartı ile Hangi Avantajları Elde Edebilirim?
            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content4" ? "open" : ""
              }`}
              id="content4"
            >
              <p>
              BP Taşıtmatik kart sahipleri özel indirimlerden ve kampanyalardan yararlanır. Ayrıca, akaryakıt harcamalarını daha iyi yönetme fırsatına sahiptirler.
              </p>
            </div>
          </div>

          <div className="question-container">
            <button
              className={`questionGray ${
                activeContent === "content5" ? "active" : ""
              }`}
              onClick={() => handleClick("content5")}
            >
               {activeContent ==="content5" ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20}/>}
              Kartımı Kaybedersem Ne Yapmalıyım?
            </button>
            <div className="line-div"></div>
            <div
              className={`content ${
                activeContent === "content5" ? "open" : ""
              }`}
              id="content5"
            >
              <p>
                BP Taşıtmatik kartınızı kaybederseniz, kayıp kartı mptasitmatik.com üzerinden hemen bildirebilirsiniz. Ekip, kayıp kartınızı kapatmanız ve yeni bir kart temin etmeniz konusunda size yardımcı olacaktır.BP Taşıtmatik kartınızı kaybederseniz, kayıp kartı mptasitmatik.com üzerinden hemen bildirebilirsiniz. Ekip, kayıp kartınızı kapatmanız ve yeni bir kart temin etmeniz konusunda size yardımcı olacaktır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
