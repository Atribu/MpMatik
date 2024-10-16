import React, { useState,useEffect }  from 'react'
import "../Styles/ContactFormGray.scss";

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
    const tuketims = ['10.000-50.000', '50.000-100.000','100.000-250.000','250.000 ve üzeri'];
    const handleSelectTuketim = (tuketim) => {
      setFormData({ ...formData, selectedTuketim: tuketim });
        setIsOpenTuketim(false);
    };

   
    const [isOpenVehicle, setIsOpenVehicle] = useState(false);
    const vehicles = ['10-20', '20-30','30-40','40 ve üzeri'];
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
    <form id="basvuru" className='formGray' onSubmit={handleSubmit}>
      <div id="teklif" className='divGray slide-upSatis'>
        <p className='h2Gray'>TEKLİF AL</p>
        <section className='input-sectionGray'>
        <input type="text" id="name" name="name" required placeholder='İsim-Soyisim*' value={formData.name}
          onChange={handleChange}/>
        <input type="text" id="firmaname" name="firmaname" placeholder='Firma Adı*' required value={formData.firmaname}
          onChange={handleChange}/>
      </section>
      <section className='input-sectionGray'>
        <input type="text" id="phone" name="phone" placeholder='Telefon*' required value={formData.phone}
          onChange={handleChange}/>
        <input type="text" id="email" name="email" placeholder='Email*' required value={formData.email}
          onChange={handleChange}/>
      </section>
      <section className='input-sectionGray'>
      <div className="city-selectGray">
      <div 
        className={`city-selectGray__input ${formData.selectedCity === 'Şehir Seçiniz*' ? 'placeholder' : ''}`} 
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
       className={`city-selectGray__input ${formData.selectedProduct === 'Ürün Seçiniz*' ? 'placeholder' : ''}`} 
        onClick={() => setIsOpenProduct(!isOpenProduct)}
      >
        {formData.selectedProduct}
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
        className={`city-selectGray__input ${formData.selectedTuketim === 'Aylık Tüketim*' ? 'placeholder' : ''}`} 
        onClick={() => setIsOpenTuketim(!isOpenTuketim)}
      >
        {formData.selectedTuketim}
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
        className={`city-selectGray__input ${formData.selectedVehicle === 'Araç Sayısı*' ? 'placeholder' : ''}`} 
        onClick={() => setIsOpenVehicle(!isOpenVehicle)}
      >
       {formData.selectedVehicle}
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
