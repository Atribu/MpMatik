import React, { useState }  from 'react'
import "../../Styles/BasicContactForm.scss"

const BasicContactForm = () => {
    const [selectedCity, setSelectedCity] = useState('Şehir Seçiniz*');
    const [isOpen, setIsOpen] = useState(false);
    const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya','İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya' ];
    const handleSelect = (city) => {
      setSelectedCity(city);
      setIsOpen(false);
    };

  return (
    <form className='form'>
      <div className='div'>
        <p className='h2'>BP TAŞITMATİK</p>
        <p className='h3'>İLETİŞİM formu</p>
      </div>
      <section className='input-section'>
        <input className='inputForm' type="text" id="name" name="name" required placeholder='İsim-Soyisim*' />
        <input className='inputForm' type="email" id="email" name="email" placeholder='Email*' required />
      </section>
      <section className='input-section'>
        <input className='inputForm' type="text" id="phone" name="phone" placeholder='Telefon*' required />
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
      </section>
      <section className='input-section'>
        <textarea className='inputFormMessage' type="text" id="mesaj" name="mesaj" required placeholder='Mesaj*' />
      </section>
      <button className='submitButton'><p>Gönder</p></button>
      
    </form>
  )
}

export default BasicContactForm
