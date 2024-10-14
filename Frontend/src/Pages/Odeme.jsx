import React, { useState } from 'react';
import axios from 'axios';

function Odeme() {
  const [formData, setFormData] = useState({
    companyname: '',
    amount: '',
    name: '',
    number: '',
    dateM: '',
    dateY: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/odeme/yeni', formData);
      console.log('Ödeme Başarılı:', response.data);
    } catch (error) {
      console.error('Ödeme Hatası:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="companyname" placeholder="Şirket Adı" onChange={handleChange} required />
      <input type="number" name="amount" placeholder="Tutar" onChange={handleChange} required />
      <input type="text" name="name" placeholder="Kart Sahibi Adı" onChange={handleChange} required />
      <input type="text" name="number" placeholder="Kart Numarası" onChange={handleChange} required />
      <input type="text" name="dateM" placeholder="Ay (MM)" onChange={handleChange} required />
      <input type="text" name="dateY" placeholder="Yıl (YY)" onChange={handleChange} required />
      <button type="submit">Ödeme Yap</button>
    </form>
  );
}

export default Odeme;
