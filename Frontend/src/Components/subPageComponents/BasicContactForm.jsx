import React, { useState }  from 'react'
import "../../Styles/BasicContactForm.scss"

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
        // İlk API çağrısı (basic-contact)
        const dbRes = await fetch('/api/basic-contact/yeni', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
    
        // İkinci API çağrısı (Node.js sunucusu)
        const mailRes = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
    
        // Her iki yanıtın da başarılı olup olmadığını kontrol et
        if (dbRes.ok && mailRes.ok) {
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
    <form className='formContactForm' onSubmit={handleSubmit}>
      <div className='divContactForm'>
        <p className='h2'>BP TAŞITMATİK</p>
        <span className='h3'>İLETİŞİM formu</span>
      </div>
      <section className='input-section'>
        <input className='inputForm' type="text" id="name" name="name" required placeholder='İsim-Soyisim*'  value={formData.name}  onChange={handleChange}/>
        <input className='inputForm' type="email" id="email" name="email" placeholder='Email*' required value={formData.email}  onChange={handleChange}/>
      </section>
      <section className='input-section'>
        <input className='inputForm' type="text" id="phone" name="phone" placeholder='Telefon*' required  value={formData.phone}  onChange={handleChange}/>
        <div className="city-select-basic">
      <div 
        className={`city-select-basic__input ${formData.selectedCity === 'Şehir Seçiniz*' ? 'placeholder' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {formData.selectedCity}
        <span className="arrow"></span>
      </div>
      {isOpen && (
        <div className="city-select-basic__dropdown">
          {cities.map((city, index) => (
            <div 
              key={index} 
              className="-basic__option" 
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
        <textarea className='inputFormMessage' type="text" id="mesaj" name="mesaj" required placeholder='Mesaj*' value={formData.mesaj}
          onChange={handleChange}/>
      </section>
      <button className='submitButton'><p>Gönder</p></button>
      
    </form>
  )
}

export default BasicContactForm
