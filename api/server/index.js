const express = require('express');
const crypto = require('crypto');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const app_secret = '57ac329abd93878015ec0b3bcaffe141';
const merchant_key = '$2y$10$kSoPazASw7ocrE6CJtOQg.Git4V0itjGN6LxBnR1dce.ENTND0yAa';

// Hash key oluşturma fonksiyonu
function generateHashKey(total, installment, currency_code, merchant_key, invoice_id, app_secret) {
    const data = `${total}|${installment}|${currency_code}|${merchant_key}|${invoice_id}`;

    const iv = crypto.randomBytes(8).toString('hex'); // 16 byte IV
    const password = crypto.createHash('sha1').update(app_secret).digest('hex');

    const salt = crypto.randomBytes(2).toString('hex'); // 4 karakterli salt
    const saltWithPassword = crypto.createHash('sha256').update(password + salt).digest('hex');

    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(saltWithPassword, 'hex'), Buffer.from(iv, 'hex'));
    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    const msg_encrypted_bundle = `${iv}:${salt}:${encrypted}`.replace(/\//g, '__');
    return msg_encrypted_bundle;
}

// Ödeme isteğini işleyen API route'u
app.post('/api/odeme/yeni', async (req, res) => {
    const { companyname, amount, name, number, dateM, dateY } = req.body;

    const expiry_month = dateM;
    const expiry_year = `20${dateY}`;
    const installments_number = 1;
    const currency_code = 'TRY';
    const invoice_id = Math.floor(1000 + Math.random() * 9000);
    const hash_key = generateHashKey(amount, installments_number, currency_code, merchant_key, invoice_id, app_secret);

    const data = {
        cc_holder_name: name,
        cc_no: number.replace(/\s/g, ''),
        expiry_month,
        expiry_year,
        currency_code,
        installments_number,
        invoice_id,
        invoice_description: `${invoice_id} Faturası`,
        total: amount,
        merchant_key,
        items: JSON.stringify([
            { name: "Item3", price: amount, quantity: 1, description: "item3 description" }
        ]),
        name: companyname,
        surname: 'WEB ÖDEMESİ',
        cancel_url: `https://3dstatus.mpmatik.com/fail.html?name=${companyname}&platform=WEB`,
        return_url: `https://3dstatus.mpmatik.com/success.html?name=${companyname}&platform=WEB`,
        hash_key,
        bill_email: ''
    };

    try {
        const response = await axios.post('https://provisioning.sipay.com.tr/ccpayment/api/paySmart3D', new URLSearchParams(data));
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).redirect('https://3dstatus.mpmatik.com/fail.html');
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
