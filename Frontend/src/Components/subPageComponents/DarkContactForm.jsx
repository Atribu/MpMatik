import React, { useState }  from 'react'
import "../../Styles/DarkContactForm.scss"

const BasicContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mesaj: '',
    selectedCity: 'Şehir Seçiniz*',
  });

    const [selectedCity, setSelectedCity] = useState('Şehir Seçiniz*');
    const [isOpen, setIsOpen] = useState(false);
    const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya','İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya' ];

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSelect = (city) => {
      setFormData({ ...formData, selectedCity: city });
      setIsOpen(false);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch('/api/basic-contact/yeni', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
  
        if (res.ok) {
          alert('Form başarıyla gönderildi!');
          setFormData({
            name: '',
            email: '',
            phone: '',
            mesaj: '',
            selectedCity: 'Şehir Seçiniz*',
          });
        } else {
          alert('Form gönderilirken hata oluştu.');
        }
      } catch (error) {
        console.error('Hata:', error);
        alert('Form gönderilemedi.');
      }
    };

  return (
    <form className='darkContactForm' onSubmit={handleSubmit}>
      <div className='divDarkForm'>
        <p className='h2'>BP TAŞITMATİK</p>
        <span className='h3'>İLETİŞİM formu</span>
      </div>
      <section className='input-dark-section'>
        <input className='inputDarkForm' type="text" id="name" name="name" required placeholder='İsim-Soyisim*'  value={formData.name}  onChange={handleChange}/>
        <input className='inputDarkForm' type="email" id="email" name="email" placeholder='Email*' required value={formData.email}  onChange={handleChange}/>
      </section>
      <section className='input-dark-section'>
        <input className='inputDarkForm' type="text" id="phone" name="phone" placeholder='Telefon*' required  value={formData.phone}  onChange={handleChange}/>
        <div className="city-select-dark">
      <div 
        className={`city-select-dark__input ${formData.selectedCity === 'Şehir Seçiniz*' ? 'placeholder' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {formData.selectedCity}
        <span className="arrow"></span>
      </div>
      {isOpen && (
        <div className="city-select-dark__dropdown">
          {cities.map((city, index) => (
            <div 
              key={index} 
              className="-dark__option" 
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
        <textarea className='inputDarkMessage' type="text" id="mesaj" name="mesaj" required placeholder='Mesaj*' value={formData.mesaj}
          onChange={handleChange}/>
      </section>
      <button className='submitDarkButton'><p>Gönder</p></button>
      
    </form>
  )
}

export default BasicContactForm
