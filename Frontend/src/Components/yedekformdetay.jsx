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
    <div className='mainForm'>
     <div className='sectionForm'>
     <h1>Form Detayları</h1>
      <form className="divForm">
        <div className="itemForm">
          <label>İsim:</label>
          <input type="name" value={form.name} readOnly />
        </div>

        <div className="form-group">
          <label>E-mail</label>
          <input type="email" value={form.email} readOnly />
        </div>


        <div className="form-group">
          <label>Telefon</label>
          <input type="phone" value={form.phone} readOnly />
        </div>

        <div className="form-group">
          <label>Şehir</label>
          <input type="city" value={form.selectedCity} readOnly />
        </div>


        <div className="form-group">
          <label>Ürün</label>
          <input type="text" value={form.selectedProduct} readOnly />
        </div>

        <div className="form-group">
          <label>Tüketim</label>
          <input type="text" value={form.selectedTuketim} readOnly />
        </div>

        <div className="form-group">
          <label>Araç</label>
          <input type="text" value={form.selectedVehicle} readOnly />
        </div>

        <div className="form-group">
          <label>Zaman</label>
          <input type="text" value={form.createdAt} readOnly />
        </div>
      </form>
     </div>
    </div>
  );
};

export default FormDetay;
