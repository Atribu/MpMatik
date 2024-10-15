import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../Styles/FormDetay.scss";

const FormDetay = () => {
  const { id } = useParams();  // URL'den id parametresini alıyoruz
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await fetch(`/api/form/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Form verisi alınamadı');
        }

        setForm(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchForm();
  }, [id]);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <form className='formCarousel'>
      <div className='divcontact'>
        <p className='h2'>Form Detay</p>
      </div>
      <section className='input-section'>
        <div className='input-label'>
        <label>Name</label>
        <input 
          className='inputForm' 
          type="name" 
          placeholder={form.name} 
          value={form.name} readOnly
        />
        </div>
        <div className='input-label'>
            <label>E-mail</label>
        <input 
          className='inputForm' 
          type="email" 
          placeholder={form.email} 
          value={form.email} readOnly
        />
        </div>
      </section>
      <section className='input-section'>
        <input 
          className='inputForm' 
          type="text" 
          value={form.phone} readOnly
          placeholder={form.phone}
        />
        <input 
          className='inputForm' 
          type="text" 
          value={form.phone} readOnly
          placeholder={form.phone} 
          required 
        />
      </section>
      <section className='input-section'>
        <input className='city-select__input' type="city" value={form.selectedCity} placeholder={form.selectedCity} readOnly />
        <input className='city-select__input' type="product" value={form.selectedProduct} placeholder={form.selectedProduct} readOnly />
      </section>

      <section className='input-section'>
        <input className='city-select__input' type="tuketim" value={form.selectedTuketim} placeholder={form.selectedTuketim} readOnly />

        <input className='city-select__input' type="vehicle" value={form.selectedVehicle} placeholder={form.selectedVehicle} readOnly />

      </section>

    </form>
  );
};

export default FormDetay;
