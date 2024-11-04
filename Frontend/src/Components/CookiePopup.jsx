import React, { useState } from "react";
import "../Styles/CookiePopup.scss";
import { Link } from "react-router-dom";
import logo from "../../public/Logo/mp-matik-favicon.png";
import { useNavigate } from 'react-router-dom';

const CookiePopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const [isChecked2, setIsChecked2] = useState(false);

  const handleChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const [isChecked3, setIsChecked3] = useState(false);

  const handleChange3 = () => {
    setIsChecked3(!isChecked3);
  };

  const [isChecked4, setIsChecked4] = useState(false);

  const handleChange4 = () => {
    setIsChecked4(!isChecked4);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleModalCloseToggle = () => {
    setIsModalOpen(!isModalOpen);
    setIsVisible(false);
  };


  return (
    isVisible && (
      <section className="cookie-sec">
        <div className="blur-div"></div>
        <div className="cookie-div">
          <p className="cookie-text">
            <span className="spanBold">Çerezleri kullanıyoruz:</span> İçeriği
            kişiselleştirmek ve web trafiğini analiz etmek için kendi
            çerezlerimizi ve üçüncü taraf çerezlerini kullanıyoruz. Çerezler
            hakkında <span className="spanunderline"> bilgi edinin.</span>
          </p>
          <div className="cookie-buttons-div">
            <button className="cookie-buttons" onClick={handleClose}>
              Tüm Çerezleri Reddet
            </button>

            <button onClick={handleModalToggle} className="cookie-buttons">
              Çerez Tercihlerini Yönetin
            </button>
            {isModalOpen && (
              <div className="cookie-manage-div">
                <div
                  className="cookie-manage-icdiv"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className="crossbutton" onClick={handleModalToggle}>
                    &times;
                  </button>
                  <div className="manage-text-disdiv">
                    <div className="logo-header">
                      <img src={logo} alt="logo" width={60} height={60}></img>
                      <h4>Çerez Tercihlerini Yönetin</h4>
                    </div>
                    <div className="manage-text-icdiv">
                      <div className="toggle-text-div">
                        <p>
                       <span className="spanBold"> İstatistikler:</span> Bu çerezler, web sitesine gelen ziyaretçi sayısı, benzersiz ziyaretçi sayısı, web sitesinin hangi sayfalarının ziyaret edildiği, ziyaretin kaynağı vb. bilgileri depolar. Bu veriler, web sitesinin ne kadar iyi performans gösterdiğini ve analiz etmemize yardımcı olur.
                        </p>

                        <div
                          className={`toggle-container ${
                            isChecked ? "active" : ""
                          }`}
                        >
                          <div
                            className={`toggle-circle ${
                              isChecked ? "checked" : ""
                            }`}
                            onClick={handleChange}
                          />
                        </div>
                      </div>


                      <div className="toggle-text-div">
                        <p>
                       <span className="spanBold"> Pazarlama:</span> Web sitemiz reklam veriyor. Bu çerezler, size gösterdiğimiz reklamları sizin için anlamlı olacak şekilde kişiselleştirmek için kullanılır. Bu çerezler ayrıca bu reklam kampanyalarının verimliliğini takip etmemize yardımcı olur. Bu çerezlerde depolanan bilgiler, üçüncü taraf reklam sağlayıcıları tarafından size tarayıcıdaki diğer web sitelerinde reklam göstermek için de kullanılabilir.
                        </p>

                        <div
                          className={`toggle-container ${
                            isChecked2 ? "active" : ""
                          }`}
                        >
                          <div
                            className={`toggle-circle ${
                              isChecked2 ? "checked" : ""
                            }`}
                            onClick={handleChange2}
                          />
                        </div>
                      </div>


                      <div className="toggle-text-div">
                        <p>
                       <span className="spanBold"> İşlevsel:</span> Bunlar, web sitemizdeki bazı önemli olmayan işlevlere yardımcı olan çerezlerdir. Bu işlevler arasında videolar gibi içerik yerleştirme veya web sitesindeki içerikleri sosyal medya platformlarında paylaşma yer alır.
                        </p>

                        <div
                          className={`toggle-container ${
                            isChecked3 ? "active" : ""
                          }`}
                        >
                          <div
                            className={`toggle-circle ${
                              isChecked3 ? "checked" : ""
                            }`}
                            onClick={handleChange3}
                          />
                        </div>
                      </div>


                      <div className="toggle-text-div">
                        <p>
                        <span className="spanBold">Tercihler:</span> Bu çerezler ayarlarınızı kaydetmemize ve dil tercihleri gibi tarama tercihlerinizi belirlememize yardımcı olur, böylece web sitesine gelecekteki ziyaretlerinizde daha iyi ve verimli bir deneyime sahip olursunuz.
                        </p>

                        <div
                          className={`toggle-container ${
                            isChecked4 ? "active" : ""
                          }`}
                        >
                          <div
                            className={`toggle-circle ${
                              isChecked4 ? "checked" : ""
                            }`}
                            onClick={handleChange4}
                          />
                        </div>
                      </div>

                      <p className="clicktext">
                        Detaylı Bilgi için {" "}
                        <Link
                          className="link-cookie"
                          to="/gizlilik-politikasi#cerez-politikasi"
                          onClick={handleModalCloseToggle}
                        >
                          tıklayın
                        </Link>
                      </p>

                      <div className="manage-buttons-div">
                        <button className="cookie-buttons">
                          Seçimlerimi Onayla
                        </button>
                        <button className="cookie-buttons">
                          Tüm Çerezleri Kabul Et
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button className="cookie-buttons">Tüm Çerezleri Kabul Et</button>
          </div>
        </div>
      </section>
    )
  );
};

export default CookiePopup;
