import React, { useState } from 'react';

function Payment({ onSubmit }) {
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      cardHolderName,
      cardNumber,
      expiryMonth,
      expiryYear,
      cvv,
      firstName,
      lastName,
      amount,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Kart Sahibinin Adı"
        value={cardHolderName}
        onChange={(e) => setCardHolderName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Kart Numarası"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Son Kullanma Ayı (MM)"
        value={expiryMonth}
        onChange={(e) => setExpiryMonth(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Son Kullanma Yılı (YYYY)"
        value={expiryYear}
        onChange={(e) => setExpiryYear(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Müşteri Adı"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Müşteri Soyadı"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Tutar"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <button type="submit">Ödeme Yap</button>
    </form>
  );
}

export default Payment;
