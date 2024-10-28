import React, { useState } from "react";
import "../Styles/CookiePopup.scss";

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
            We use Cookies: We use our own and third-party cookies to
            personalize content and to analyze web traffic. Read more about
            cookies
          </p>
          <div className="cookie-buttons-div">
            <button className="cookie-buttons" onClick={handleClose}>
              Deny All Cookies
            </button>

            <button onClick={handleModalToggle} className="cookie-buttons">
              Manage Cookie Preferences
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
                    <h4>Manage Cookie Preferences</h4>
                    <div className="manage-text-icdiv">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempore non sapiente itaque adipisci explicabo sed,
                        debitis magnam animi nulla sunt saepe delectus! Quis
                        culpa sunt corrupti quisquam accusamus. Quod, fugit?
                      </p>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Expedita quaerat reiciendis et obcaecati magnam,
                        voluptates necessitatibus, architecto consequuntur quas
                        facilis maiores quos. Delectus, accusamus aliquam? Culpa
                        consectetur voluptates asperiores corrupti facilis
                        quisquam dolore, voluptatum vero deleniti optio libero
                        rerum iusto.
                      </p>
                     <div className="toggle-text-div">
                     <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Distinctio commodi illo labore omnis et
                        voluptatibus consectetur aliquam sint voluptates sequi!
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


                      <div className="manage-buttons-div">
                        <button className="cookie-buttons">
                          Confirm My Choices
                        </button>
                        <button className="cookie-buttons">
                          Accept All Cookies
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            )}

            <button className="cookie-buttons">Accept All Cookies</button>
          </div>
        </div>
      </section>
    )
  );
};

export default CookiePopup;
