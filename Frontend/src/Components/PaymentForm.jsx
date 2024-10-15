// src/PaymentForm.jsx
import React, { useState } from 'react';
import '../Styles/PaymentForm.scss';

function PaymentForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Verisi:', formData);
    // Burada API'ye gönderim işlemi yapılabilir
  };

  return (
    <div className="payment-form-container">
      <form onSubmit={handleSubmit} className="payment-form">
       <div className='divHeader'> <span>Kredi Kartı Bilgileriniz</span></div>

        <label>Firma Adı (Zorunlu Alan)</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        />

        <label>Ad Soyad</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <label>Kredi Kartı Numarası</label>
        <input
          type="text"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          required
          maxLength="16"
        />

        <div className="expiry-date">
          <div>
            <label>Son Kullanma Tarihi - Ay</label>
            <select name="expiryMonth" onChange={handleChange} required>
              <option value="">Ay</option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Son Kullanma Tarihi - Yıl</label>
            <select name="expiryYear" onChange={handleChange} required>
              <option value="">Yıl</option>
              {[...Array(10)].map((_, i) => (
                <option key={i} value={new Date().getFullYear() + i}>
                  {new Date().getFullYear() + i}
                </option>
              ))}
            </select>
          </div>
        </div>

        <label>CVC</label>
        <input
          type="text"
          name="cvc"
          value={formData.cvc}
          onChange={handleChange}
          required
          maxLength="3"
        />

        <label>Ödeme Miktarı</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        <button type="submit">ÖDE</button>
      </form>
    </div>
  );
}

export default PaymentForm;
