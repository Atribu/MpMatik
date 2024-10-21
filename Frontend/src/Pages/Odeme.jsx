import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Odeme() {
  const navigate = useNavigate();
  const invoiceId = `ORDER_${Date.now()}`;
  const merchantKey = process.env.REACT_APP_MERCHANT_KEY;

  const [formData, setFormData] = useState({
    companyname: '',
    amount: '',
    cc_holder_name: '',
    cc_no: '',
    expiry_month: '',
    expiry_year: '',
    cvv: '',
    name: '',
    surname: '',
    merchant_key: '',
    invoice_id: '',
  });

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      merchant_key: merchantKey,
      invoice_id: invoiceId,
    }));
  }, [merchantKey, invoiceId]);

  useEffect(() => {
    console.log('Form Data Güncellendi:', formData);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'amount' ? parseFloat(value) : value,
    });
    // console.log('Form Data:', formData); // Bu satırı isterseniz kullanabilirsiniz
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/odeme/yeni', formData);
      console.log('Ödeme Başarılı:', response.data);
      alert('Ödeme başarılı!');
      navigate('/odeme-basarili'); // Başarılı ödeme sayfasına yönlendirme
    } catch (error) {
      console.error('Ödeme Hatası:', error);
      alert('Ödeme sırasında bir hata oluştu.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form input alanları */}
    </form>
  );
}

export default Odeme;
