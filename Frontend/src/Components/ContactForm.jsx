import React, { useState }  from 'react';
import "../Styles/ContactForm.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    firmaname: '',
    phone: '',
    email: '',
    selectedCity: 'Şehir Seçiniz*',
    selectedProduct: 'Ürün Seçiniz*',
    selectedTuketim: 'Aylık Tüketim*',
    selectedVehicle: 'Araç Sayısı*',
  });

  const [isChecked, setIsChecked] = useState(false);


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [isOpen, setIsOpen] = useState(false);
  const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya'];
  
  const handleSelect = (city) => {
    setFormData({ ...formData, selectedCity: city });
    setIsOpen(false);
  };

  const [isOpenProduct, setIsOpenProduct] = useState(false);
  const products = ['Taşıtmatik', 'Toptan'];
  const handleSelectProduct = (product) => {
    setFormData({ ...formData, selectedProduct: product });
    setIsOpenProduct(false);
  };

  const [isOpenTuketim, setIsOpenTuketim] = useState(false);
  const tuketims = ['10.000-50.000', '50.000-100.000', '100.000-250.000', '250.000 ve üzeri'];
  const handleSelectTuketim = (tuketim) => {
    setFormData({ ...formData, selectedTuketim: tuketim });
    setIsOpenTuketim(false);
  };

  const [isOpenVehicle, setIsOpenVehicle] = useState(false);
  const vehicles = ['10-20', '20-30', '30-40', '40 ve üzeri'];
  const handleSelectVehicle = (vehicle) => {
    setFormData({ ...formData, selectedVehicle: vehicle });
    setIsOpenVehicle(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/form/yeni', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, isChecked }),
      });

      if (res.ok) {
        alert('Form başarıyla gönderildi!');
      } else {
        alert('Form gönderilirken hata oluştu.');
      }
    } catch (error) {
      console.error('Hata:', error);
      alert('Form gönderilemedi.');
    }
  };

  return (
    <form className='formCarousel-main' onSubmit={handleSubmit}>
      <div className='divcontact-main'>
        <p className='h2'>BP TAŞITMATİK</p>
        <p className='h3'>Kurumsal Başvuru Formu</p>
      </div>
      <section className='input-section'>
        <input 
          className='inputForm' 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          required 
          placeholder='İsim-Soyisim*' 
        />
        <input 
          className='inputForm' 
          type="text" 
          id="firmaname" 
          name="firmaname" 
          value={formData.firmaname}
          onChange={handleChange}
          placeholder='Firma Adı*' 
          required 
        />
      </section>
      <section className='input-section'>
        <input 
          className='inputForm' 
          type="text" 
          id="phone" 
          name="phone" 
          value={formData.phone}
          onChange={handleChange}
          placeholder='Telefon*' 
          required 
        />
        <input 
          className='inputForm' 
          type="text" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          placeholder='Email*' 
          required 
        />
      </section>
      <section className='input-section'>
        {/* Şehir seçimi */}
        <div className="city-select">
          <div 
            className={`city-select__input ${formData.selectedCity === 'Şehir Seçiniz*' ? 'placeholder' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
          >
            {formData.selectedCity}
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

        {/* Ürün seçimi */}
        <div className="city-select">
          <div 
            className={`city-select__input ${formData.selectedProduct === 'Ürün Seçiniz*' ? 'placeholder' : ''}`} 
            onClick={() => setIsOpenProduct(!isOpenProduct)}
          >
            {formData.selectedProduct}
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

      <section className='input-section'>
        {/* Aylık tüketim seçimi */}
        <div className="city-select">
          <div 
            className={`city-select__input ${formData.selectedTuketim === 'Aylık Tüketim*' ? 'placeholder' : ''}`} 
            onClick={() => setIsOpenTuketim(!isOpenTuketim)}
          >
            {formData.selectedTuketim}
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

        {/* Araç sayısı seçimi */}
        <div className="city-select">
          <div 
            className={`city-select__input ${formData.selectedVehicle === 'Araç Sayısı*' ? 'placeholder' : ''}`} 
            onClick={() => setIsOpenVehicle(!isOpenVehicle)}
          >
            {formData.selectedVehicle}
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
  );
};

export default ContactForm;
