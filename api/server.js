// // server.js
// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const APP_SECRET = '57ac329abd93878015ec0b3bcaffe141';  // Sipay'den aldığın değer
// const MERCHANT_KEY = '$2y$10$kSoPazASw7ocrE6CJtOQg...';  // Sipay'den aldığın değer

// // Sipay için hash key oluşturma fonksiyonu
// function generateHashKey(total, invoice_id) {
//     const crypto = require('crypto');
//     const data = `${total}|1|TRY|${MERCHANT_KEY}|${invoice_id}`;

//     const salt = crypto.randomBytes(4).toString('hex');
//     const iv = crypto.randomBytes(16).toString('hex');
//     const password = crypto.createHash('sha1').update(APP_SECRET).digest('hex');

//     const key = crypto.createHash('sha256').update(password + salt).digest();
//     const cipher = crypto.createCipheriv('aes-256-cbc', key, Buffer.from(iv, 'hex'));

//     let encrypted = cipher.update(data, 'utf8', 'base64');
//     encrypted += cipher.final('base64');

//     const msgEncryptedBundle = `${iv}:${salt}:${encrypted}`.replace(/\//g, '__');
//     return msgEncryptedBundle;
// }

// // Sipariş bilgileriyle ödeme başlat
// app.post('/create-payment', async (req, res) => {
//     const { amount, name, invoiceId } = req.body;
//     const hashKey = generateHashKey(amount, invoiceId);

//     const paymentData = {
//         cc_holder_name: name,
//         total: amount,
//         currency_code: 'TRY',
//         merchant_key: MERCHANT_KEY,
//         invoice_id: invoiceId,
//         hash_key: hashKey,
//         return_url: 'https://seninsiten.com/success',
//         cancel_url: 'https://seninsiten.com/fail',
//     };

//     try {
//         const response = await axios.post(
//             'https://app.sipay.com.tr/ccpayment/api/paySmart3D',
//             new URLSearchParams(paymentData).toString()
//         );

//         // İframe URL'sini frontend'e döndür
//         res.json({ iframeUrl: response.data.payment_url });
//     } catch (error) {
//         console.error('Sipay API Error:', error);
//         res.status(500).send('Payment creation failed');
//     }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
