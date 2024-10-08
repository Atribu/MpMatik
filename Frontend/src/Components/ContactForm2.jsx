import React, { useState,useEffect }  from 'react'
import "../Styles/ContactFormGray.scss";

const ContactForm = () => {
  useEffect(() => {
    // kayarak gelme
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    // Gözlemlemek istediğiniz elemanları seçin
    const hiddenElements = document.querySelectorAll('.slide-upSatis');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup işlemi: Bileşen kaldırıldığında gözlemlemeyi bırakır
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); 
  
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const [selectedCity, setSelectedCity] = useState('Şehir Seçiniz*');
    const [isOpen, setIsOpen] = useState(false);
    const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya'];
    const handleSelect = (city) => {
      setSelectedCity(city);
      setIsOpen(false);
    };

    const [selectedProduct, setSelectedProduct] = useState('Ürün Seçiniz*');
    const [isOpenProduct, setIsOpenProduct] = useState(false);
    const products = ['Taşıtmatik', 'Toptan'];
    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
        setIsOpenProduct(false);
    };

    const [selectedTuketim, setSelectedTuketim] = useState('Aylık Tüketim*');
    const [isOpenTuketim, setIsOpenTuketim] = useState(false);
    const tuketims = ['10.000-50.000', '50.000-100.000','100.000-250.000','250.000 ve üzeri'];
    const handleSelectTuketim = (tuketim) => {
        setSelectedTuketim(tuketim);
        setIsOpenTuketim(false);
    };

    const [selectedVehicle, setSelectedVehicle] = useState('Araç Sayısı*');
    const [isOpenVehicle, setIsOpenVehicle] = useState(false);
    const vehicles = ['10-20', '20-30','30-40','40 ve üzeri'];
    const handleSelectVehicle = (vehicle) => {
        setSelectedVehicle(vehicle);
        setIsOpenVehicle(false);
    };

  return (
    <form id="basvuru" className='formGray'>
      <div className='divGray slide-upSatis'>
        <p className='h2Gray'>TEKLİF AL</p>
        <section className='input-sectionGray'>
        <input type="text" id="name" name="name" required placeholder='İsim-Soyisim*' />
        <input type="text" id="firmaname" name="firmaname" placeholder='Firma Adı*' required />
      </section>
      <section className='input-sectionGray'>
        <input type="text" id="name" name="name" placeholder='Telefon*' required />
        <input type="text" id="firmaname" name="firmaname" placeholder='Email*' required />
      </section>
      <section className='input-sectionGray'>
      <div className="city-selectGray">
      <div 
        className={`city-selectGray__input ${selectedCity === 'Şehir Seçiniz*' ? 'placeholder' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCity}
        <span className="arrow"></span>
      </div>
      {isOpen && (
        <div className="city-select__dropdown">
          {cities.map((city, index) => (
            <div 
              key={index} 
              className="city-selectGray__option" 
              onClick={() => handleSelect(city)}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>

    {/* product */}
    <div className="city-selectGray">
      <div 
       className={`city-selectGray__input ${selectedProduct === 'Ürün Seçiniz*' ? 'placeholder' : ''}`} 
        onClick={() => setIsOpenProduct(!isOpenProduct)}
      >
        {selectedProduct}
        <span className="arrow"></span>
      </div>
      {isOpenProduct && (
        <div className="city-selectGray__dropdown">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="city-selectGray__option" 
              onClick={() => handleSelectProduct(product)}
            >
              {product}
            </div>
          ))}
        </div>
      )}
    </div>
      </section>

{/* aylık tüketim */}
      <section className='input-sectionGray'>
      <div className="city-selectGray">
      <div 
        className={`city-selectGray__input ${selectedTuketim === 'Aylık Tüketim*' ? 'placeholder' : ''}`} 
        onClick={() => setIsOpenTuketim(!isOpenTuketim)}
      >
        {selectedTuketim}
        <span className="arrow"></span>
      </div>
      {isOpenTuketim && (
        <div className="city-selectGray__dropdown">
          {tuketims.map((tuketim, index) => (
            <div 
              key={index} 
              className="city-selectGray__option" 
              onClick={() => handleSelectTuketim(tuketim)}
            >
              {tuketim}
            </div>
          ))}
        </div>
      )}
    </div>

    {/* araç sayısı */}
    <div className="city-selectGray">
      <div 
        className={`city-selectGray__input ${selectedVehicle === 'Araç Sayısı*' ? 'placeholder' : ''}`} 
        onClick={() => setIsOpenVehicle(!isOpenVehicle)}
      >
        {selectedVehicle}
        <span className="arrow"></span>
      </div>
      {isOpenVehicle && (
        <div className="city-selectGray__dropdown">
          {vehicles.map((vehicle, index) => (
            <div 
              key={index} 
              className="city-selectGray__option" 
              onClick={() => handleSelectVehicle(vehicle)}
            >
              {vehicle}
            </div>
          ))}
        </div>
      )}
    </div>
      </section>
      
      <button className='green-buttonGray '><p>Gönder</p></button>
      </div>
      
      
    </form>
  )
}

export default ContactForm
