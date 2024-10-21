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
  const data = `${total}|${installment}|${currency_code}|${merchant_key}|${invoice_id}`;

  const iv = crypto.randomBytes(16); // 16 byte IV
  const password = crypto.createHash('sha1').update(app_secret).digest('hex');

  const salt = crypto.randomBytes(4).toString('hex'); // 4 byte salt
  const saltWithPassword = crypto.createHash('sha256').update(password + salt).digest();

  // Şifreleme işlemi
  const cipher = crypto.createCipheriv('aes-256-cbc', saltWithPassword, iv);
  let encrypted = cipher.update(data, 'utf8', 'base64');
  encrypted += cipher.final('base64');

  // IV ve salt'ı hex formatında string'e çevir
  const ivHex = iv.toString('hex').slice(0, 16); // İlk 16 karakter
  const saltHex = salt; // 4 karakter

  // Mesajı oluştur
  let msgEncryptedBundle = `${ivHex}:${saltHex}:${encrypted}`;
  msgEncryptedBundle = msgEncryptedBundle.replace(/\//g, '__');

  return msgEncryptedBundle;
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
