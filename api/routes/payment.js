// routes/payment.js
import express from 'express';
import axios from 'axios';
import crypto from 'crypto';
import dotenv from 'dotenv';
import qs from 'qs'; // URL-encoded verileri oluşturmak için
import { Agent as HttpsAgent } from 'https'; // ES6 import for https Agent

dotenv.config();

const router = express.Router();

const appSecret = process.env.APP_SECRET;
const merchantKey = process.env.MERCHANT_KEY;

// Debug amaçlı loglar (Geliştirme aşamasında kullanın)
console.log('Merchant Key:', merchantKey);
console.log('App Secret:', appSecret);

// Hash Key oluşturma fonksiyonu
function generateHashKey(total, installment, currency_code, merchant_key, invoice_id, app_secret) {
  try {
      const data = total + '|' + installment + '|' + currency_code + '|' + merchant_key + '|' + invoice_id;
      console.log("Data:", data);

      const iv = crypto.createHash('sha1').update(String(Math.random())).digest('hex').slice(0, 16);
      console.log("IV:", iv);

      const password = crypto.createHash('sha1').update(app_secret).digest('hex');
      console.log("Password:", password);

      const salt = crypto.createHash('sha1').update(String(Math.random())).digest('hex').slice(0, 4);
      console.log("Salt:", salt);

      const salt_with_password = crypto.createHash('sha256').update(password + salt).digest('hex').slice(0, 32);
      console.log("Salt with Password:", salt_with_password);

      const cipher = crypto.createCipheriv('aes-256-cbc', salt_with_password, iv);


      const padded_data = data;
      console.log("Padded Data:", padded_data);

      let encrypted = cipher.update(padded_data, 'binary', 'base64');
      encrypted += cipher.final('base64');
      console.log("Encrypted:", encrypted);

      const msg_encrypted_bundle = iv + ':' + salt + ':' + encrypted;
      console.log("Message Encrypted Bundle:", msg_encrypted_bundle);

      const msg_encrypted_bundle_replaced = msg_encrypted_bundle.replace('/', '__');
      console.log("Replaced Bundle:", msg_encrypted_bundle_replaced);

      return msg_encrypted_bundle_replaced;
  } catch (error) {
      console.error("Hata:", error);
      return null;
  }
}

router.post('/', async (req, res) => {
  const paymentData = req.body;

  let paymentRequest;

  try {
    // Benzersiz sipariş numarası
    const invoiceId = `ORDER_${Date.now()}`;

    // Hash Key oluştur
    const hash_key = generateHashKey(
      parseFloat(paymentData.amount),
      1, // installments_number
      'TRY', // currency_code
      merchantKey,
      invoiceId,
      appSecret
    );

    // Ödeme İsteği Hazırla
    paymentRequest = {
      merchant_key: merchantKey,
      cc_holder_name: paymentData.name,
      cc_no: paymentData.number.replace(/\s+/g, ''), // Boşlukları kaldır
      expiry_month: paymentData['date-m'],
      expiry_year: `20${paymentData['date-y']}`,
      cvv: paymentData.cvc,
      currency_code: 'TRY',
      installments_number: 1,
      invoice_id: invoiceId,
      invoice_description: `${invoiceId} Faturası`,
      name: paymentData.companyname,
      surname: 'WEB ÖDEMESİ',
      total: parseFloat(paymentData.amount),
      items: JSON.stringify([
        {
          name: 'Item3',
          price: parseFloat(paymentData.amount),
          quantity: 1,
          description: 'item3 description'
        }
      ]),
      hash_key: hash_key,
      cancel_url: `https://3dstatus.mpmatik.com/fail.html?name=${encodeURIComponent(paymentData.companyname)}&platform=WEB`,
      return_url: `https://3dstatus.mpmatik.com/success.html?name=${encodeURIComponent(paymentData.companyname)}&platform=WEB`,
      bill_email: "", // Email boş bırakılmış
      ip: req.ip,
    };

    // paymentRequest'i konsola yazdırarak kontrol edin (hassas verileri maskeleyin)
    console.log('Payment Request:', {
      ...paymentRequest,
      cc_no: '**** **** **** ' + paymentRequest.cc_no.slice(-4),
      cvv: '***',
    });

    // Sipay API'sine POST isteği gönder
    const response = await axios.post(
      'https://app.sipay.com.tr/ccpayment/api/paySmart3D',
      qs.stringify(paymentRequest), // URL-encoded format
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'text/html', // HTML yanıt beklediğinizi belirtin
        },
        responseType: 'text', // Yanıtı metin olarak al
        timeout: 10000, // 10 saniye zaman aşımı
        httpsAgent: new HttpsAgent({ rejectUnauthorized: false }), // SSL doğrulamasını devre dışı bırak (sadece test amaçlı)
      }
    );

    // Sipay API'sinden gelen yanıtı loglayın
    console.log('Sipay API Response:', response.data);

    // Sipay API'sinden gelen yanıtın HTML olduğunu varsayarak gönder
    res.set('Content-Type', 'text/html');
    res.send(response.data);
  } catch (error) {
    console.error('Ödeme İşleminde Hata:', error.response?.data || error.message);

    res.status(500).json({
      success: false,
      message: error.response?.data?.status_description || 'Ödeme işlemi başarısız.',
      // Hata ayıklamak için paymentRequest'i buraya ekleyebilirsiniz
      // Ancak güvenlik açısından hassas verileri (kredi kartı bilgileri gibi) eklemeyin
    });
  }
});

export default router;
