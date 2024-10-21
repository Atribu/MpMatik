// src/panelPages/Payment.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; // SweetAlert2 CSS'i eklemek için

function Payment() {
  const [formData, setFormData] = useState({
    companyname: '',
    name: '',
    number: '',
    'date-m': '',
    'date-y': '',
    cvc: '',
    amount: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'amount' ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Formun otomatik gönderimini engelle
    setLoading(true);

    // Form verilerini kontrol et
    if (!formData.companyname || !formData.name || !formData.number ||
        !formData['date-m'] || !formData['date-y'] || !formData.cvc || !formData.amount) {
      Swal.fire('Hata', 'Tüm alanları doldurun!', 'error');
      setLoading(false);
      return;
    }

    // Kredi kartı numarasının 16 hane olduğundan emin olun
    if (!/^\d{16}$/.test(formData.number.replace(/\s+/g, ''))) {
      Swal.fire('Hata', 'Kredi Kartı Numarası 16 hane olmalıdır!', 'error');
      setLoading(false);
      return;
    }

    // Son kullanma ayı ve yılı kontrol et
    if (!/^\d{2}$/.test(formData['date-m']) || !/^\d{2}$/.test(formData['date-y'])) {
      Swal.fire('Hata', 'Son Kullanma Tarihi formatı geçersiz!', 'error');
      setLoading(false);
      return;
    }

    // CVC kontrolü
    if (!/^\d{3,4}$/.test(formData.cvc)) {
      Swal.fire('Hata', 'CVC kodu 3 veya 4 haneli olmalıdır!', 'error');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/payment', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'text', // HTML yanıtı almak için
      });

      if (response.status === 200) {
        const contentType = response.headers['content-type'];
        if (contentType && contentType.includes('text/html')) {
          // HTML içeriğini kullanıcıya göstermek için yeni bir pencereye açın
          const newWindow = window.open('', '_blank');
          if (newWindow) {
            newWindow.document.write(response.data);
            newWindow.document.close();
          } else {
            Swal.fire('Hata', 'Yeni pencere açılamadı.', 'error');
          }
        } else {
          // JSON yanıtı işleme (bu durumda backend'iniz HTML döndürüyor)
          const result = JSON.parse(response.data);
          if (result.success) {
            Swal.fire('Başarılı', 'Ödeme işlemi başarıyla gerçekleştirildi.', 'success');
          } else {
            Swal.fire('Hata', `Ödeme başarısız: ${result.message}`, 'error');
          }
        }
      } else {
        Swal.fire('Hata', `İstek başarısız. Status Code: ${response.status}`, 'error');
      }
    } catch (error) {
      console.error('Ödeme İşleminde Hata:', error.response?.data || error.message);
      Swal.fire('Hata', 'Ödeme işlemi sırasında bir hata oluştu.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="companyname"
        placeholder="Firma Adı (Zorunlu Alan)"
        value={formData.companyname}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="name"
        placeholder="Ad Soyad"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="number"
        placeholder="Kredi Kartı Numarası"
        value={formData.number}
        onChange={handleChange}
        required
        pattern="\d{16}"
        title="16 haneli kart numarası girin"
      />

      <div>
        <label>Son Kullanma Tarihi</label>
        <select name="date-m" value={formData['date-m']} onChange={handleChange} required>
          <option value="">Ay</option>
          {[...Array(12)].map((_, i) => (
            <option key={i+1} value={(i+1).toString().padStart(2, '0')}>{(i+1).toString().padStart(2, '0')}</option>
          ))}
        </select>

        <select name="date-y" value={formData['date-y']} onChange={handleChange} required>
          <option value="">Yıl</option>
          {[...Array(10)].map((_, i) => (
            <option key={i+24} value={(24 + i).toString()}>{(24 + i).toString()}</option>
          ))}
        </select>
      </div>

      <input
        type="text"
        name="cvc"
        placeholder="CVC"
        value={formData.cvc}
        onChange={handleChange}
        required
        pattern="\d{3,4}"
        title="3 veya 4 haneli CVC kodu girin"
      />

      <input
        type="number"
        name="amount"
        placeholder="Ödeme Miktarı"
        value={formData.amount}
        onChange={handleChange}
        required
        min="0"
        step="0.01"
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Ödeme Yapılıyor...' : 'Ödeme Yap'}
      </button>
    </form>
  );
}

export default Payment;
