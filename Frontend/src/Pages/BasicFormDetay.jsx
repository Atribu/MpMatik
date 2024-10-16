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
        const response = await fetch(`/api/basic-contact/${id}`);
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
   <main className='mainSection'>
     <form className='formCarousel'>
      <div className='divcontact'>
        <p className='h2'>Form Detay</p>
      </div>
      <section className='input-section'>
        <div className='input-label'>
        <label>Name</label>
        <input 
          className='inputDiv' 
          type="name" 
          placeholder={form.name} 
          value={form.name} readOnly
        />
        </div>
        <div className='input-label'>
            <label>E-mail</label>
        <input 
          className='inputDiv' 
          type="email" 
          placeholder={form.email} 
          value={form.email} readOnly
        />
        </div>
      </section>
 
      <section className='input-section'>
        <div className='input-label'>
          <label>Telefon</label>
        <input 
          className='inputDiv' 
          type="text" 
          value={form.phone} readOnly
          placeholder={form.phone}
        />
        </div>
        <div className='input-label'>
        <label>Şehir</label>
       <input className='inputDiv' type="city" value={form.selectedCity} placeholder={form.selectedCity} readOnly />
       </div>
      </section>
      <section className='input-section'>
        <div className='input-label'>
          <label>Mesaj</label>
        <textarea className='textareaDiv' type="message" value={form.mesaj} placeholder={form.mesaj} readOnly />
        </div>
      </section>

    </form>
   </main>
  );
};

export default FormDetay;
