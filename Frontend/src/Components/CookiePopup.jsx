import React, { useState } from "react";
import "../Styles/CookiePopup.scss";
import { Link } from "react-router-dom";

const CookiePopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };
//   left: 50%;
//   transform: translateX(-50%);
  return (
    isVisible && (
      <section className="cookie-sec">
        <div className="cookie-div">
          <p className="cookie-text">
          Çerezleri kullanıyoruz: İçeriği kişiselleştirmek ve web trafiğini analiz etmek için kendi çerezlerimizi ve üçüncü taraf çerezlerini kullanıyoruz. Çerezler hakkında daha fazla bilgi edinin
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
                    <h4>Çerez Tercihlerini Yönetin</h4>
                    <div className="manage-text-icdiv">
                      <p>
                      Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi
                        (“Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret Limited Şirketi ”)
                         tarafından işletilen (“Mevlana Petrol Ürünleri Turizm Taşımacılık Pazarlama İnşaat Ticaret
                          Limited Şirketi ”) web sitesini ziyaret edenlerin (“ziyaretçi”) kişisel verilerini 6698
                           sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca işlemekte ve gizliliğini
                            korumaktayız. Bu Web Sitesi Gizlilik ve Çerez Politikası (“Politika”) ile ziyaretçilerin
                             kişisel verilerinin işlenmesi, çerez politikası ve internet sitesi gizlilik ilkeleri
                              belirlenmektedir. 
                      </p>

                     <div className="toggle-text-div">
                     <p>
                     Web sitemizin ziyaretçiler tarafından en verimli şekilde faydalanılması için çerezler
                      kullanılmaktadır. Çerezler tercih edilmemesi halinde tarayıcı ayarlarından silinebilir ya da
                       engellenebilir. Ancak bu web sitemizin performansını olumsuz etkileyebilir. Ziyaretçi tarayıcıdan
                        çerez ayarlarını değiştirmediği sürece bu sitede çerez kullanımını kabul ettiği varsayılır.
                      </p>


                      <div
                        className={`toggle-container ${
                          isChecked ? "active" : ""
                        }`}>
                        <div
                          className={`toggle-circle ${
                            isChecked ? "checked" : ""
                          }`}
                          onClick={handleChange}
                        />
                      </div>
                     </div>

                          <Link className="link-cookie" to="/gizlilik-politikasi"> 
                          <button onClick={handleModalToggle} className="cookie-buttons">Detaylı Bilgi</button>
                          </Link>


                      <div className="manage-buttons-div">
                        <button className="cookie-buttons">
                          Confirm My Choices
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
