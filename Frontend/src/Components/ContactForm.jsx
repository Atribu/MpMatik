import React, { useState }  from 'react'
import "../Styles/ContactForm.scss";

const ContactForm = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    const [selectedCity, setSelectedCity] = useState('Şehir Seçiniz*');
    const [isOpen, setIsOpen] = useState(false);
    const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya','İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya' ];
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
    <form className='form'>
      <div className='div'>
        <p className='h2'>BP TAŞITMATİK</p>
        <p className='h3'>kurumsal başvuru formu</p>
      </div>
      <section className='input-section'>
        <input className='inputForm' type="text" id="name" name="name" required placeholder='İsim-Soyisim*' />
        <input className='inputForm' type="text" id="firmaname" name="firmaname" placeholder='Firma Adı*' required />
      </section>
      <section className='input-section'>
        <input className='inputForm' type="text" id="name" name="name" placeholder='Telefon*' required />
        <input className='inputForm' type="text" id="firmaname" name="firmaname" placeholder='Email*' required />
      </section>
      <section className='input-section'>
      <div className="city-select">
      <div 
        className={`city-select__input ${selectedCity === 'Şehir Seçiniz*' ? 'placeholder' : ''}`} 
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
              className="city-select__option" 
              onClick={() => handleSelect(city)}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>

    {/* product */}
    <div className="city-select">
      <div 
       className={`city-select__input ${selectedProduct === 'Ürün Seçiniz*' ? 'placeholder' : ''}`} 
        onClick={() => setIsOpenProduct(!isOpenProduct)}
      >
        {selectedProduct}
        <span className="arrow"></span>
      </div>
      {isOpenProduct && (
        <div className="city-select__dropdown">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="city-select__option" 
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
      <section className='input-section'>
      <div className="city-select">
      <div 
        className={`city-select__input ${selectedTuketim === 'Aylık Tüketim*' ? 'placeholder' : ''}`} 
        onClick={() => setIsOpenTuketim(!isOpenTuketim)}
      >
        {selectedTuketim}
        <span className="arrow"></span>
      </div>
      {isOpenTuketim && (
        <div className="city-select__dropdown">
          {tuketims.map((tuketim, index) => (
            <div 
              key={index} 
              className="city-select__option" 
              onClick={() => handleSelectTuketim(tuketim)}
            >
              {tuketim}
            </div>
          ))}
        </div>
      )}
    </div>

    {/* araç sayısı */}
    <div className="city-select">
      <div 
        className={`city-select__input ${selectedVehicle === 'Araç Sayısı*' ? 'placeholder' : ''}`} 
        onClick={() => setIsOpenVehicle(!isOpenVehicle)}
      >
        {selectedVehicle}
        <span className="arrow"></span>
      </div>
      {isOpenVehicle && (
        <div className="city-select__dropdown">
          {vehicles.map((vehicle, index) => (
            <div 
              key={index} 
              className="city-select__option" 
              onClick={() => handleSelectVehicle(vehicle)}
            >
              {vehicle}
            </div>
          ))}
        </div>
      )}
    </div>
      </section>

      <label className="checkbox-label">
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handleCheckboxChange} 
          className="checkbox-input"
        />
        <span className="checkbox-custom"></span>
        Ben robot değilim
      </label>
      
      <button className='green-button '><p>Gönder</p></button>
      
    </form>
  )
}

export default ContactForm
