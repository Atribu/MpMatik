import express from 'express';
import axios from 'axios';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

const appKey = process.env.APP_ID;
const appSecret = process.env.APP_SECRET;
const merchantKey = process.env.MERCHANT_KEY;

router.post('/', async (req, res) => {
  const paymentData = req.body;

  let paymentRequest; // Değişkeni burada tanımlıyoruz

  try {
    // Sipay Token Al
    const sipayToken = await getSipayToken();

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
      cc_holder_name: paymentData.cardHolderName,
      cc_no: paymentData.cardNumber,
      expiry_month: paymentData.expiryMonth,
      expiry_year: paymentData.expiryYear,
      cvv: paymentData.cvv,
      currency_code: 'TRY',
      installments_number: 1,
      invoice_id: invoiceId,
      invoice_description: 'Sipariş Açıklaması',
      name: paymentData.firstName,
      surname: paymentData.lastName,
      total: parseFloat(paymentData.amount),
      items: JSON.stringify([
        {
          name: 'Ürün Adı',
          price: paymentData.amount,
          quantity: 1,
          description: 'Ürün Açıklaması',
        },
      ]),
      hash_key: hash_key,
      ip: req.ip,
      cancel_url: 'https://localhost:3000/hakkimizda', // Ödeme başarısız olduğunda yönlendirilecek URL
      return_url: 'https://localhost:3000/',   // Ödeme başarılı olduğunda yönlendirilecek URL
    };

    // Ödeme işlemi
    const response = await axios.post('https://provisioning.sipay.com.tr/ccpayment/api/paySmart3D', paymentRequest, {
      headers: {
        Authorization: `Bearer ${sipayToken}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    res.json({ success: true, data: response.data });
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

async function getSipayToken() {
  try {
    const response = await axios.post('https://provisioning.sipay.com.tr/ccpayment/api/token', {
      app_id: appKey,
      app_secret: appSecret,
    });
    return response.data.token;
  } catch (error) {
    console.error('Sipay Token Alınamadı:', error.response?.data || error.message);
    throw new Error('Sipay Token Alınamadı');
  }
}

// Hash Key oluşturma fonksiyonu
function generateHashKey(total , installment , currency_code , merchant_key , invoice_id , app_secret) {
    var data = total + "|" + installment + "|" + currency_code + "|" + merchant_key + "|" + invoice_id;

    var randNumIv = Math.floor(Math.random() * (99999999999999999 - 10000000000000000) + 10000000000000000);
    var hashNumIv = sha1(randNumIv);
    hashNumIv = hashNumIv.create();
    var iv = hashNumIv.slice(0,16);

    var hashPass = sha1(app_secret);
    hashPass = hashPass.create();
    var password = hashPass.hex();

    var randNumSalt = Math.floor(Math.random() * (99999999999999999 - 10000000000000000) + 10000000000000000);
    var hashNumSalt = sha1(randNumIv);
    hashNumSalt = hashNumSalt.create();
    var salt = hashNumSalt.hex();

    var strPassSalt = password + salt;
    var hashStr = sha1(strPassSalt);
    strPassSalt.create();
    var saltWithPassword = strPassSalt.hex();

    var encrypted = "";

    var msg_encrypted_bundle = iv + ":" + salt + ":" + encrypted;
    msg_encrypted_bundle = msg_encrypted_bundle.replaceAll("/" , "_");

    return msg_encrypted_bundle;
}


export default router;
