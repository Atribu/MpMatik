// controllers/paymentController.js
import Payment from '../models/paymentModel.js';
import crypto from 'crypto';

const app_secret = process.env.APP_SECRET;
const merchant_key = process.env.MERCHANT_KEY;

// Hash key oluşturma fonksiyonu
function generateHashKey(total, installment, currency_code, merchant_key, invoice_id, app_secret) {
    const data = `${total}|${installment}|${currency_code}|${merchant_key}|${invoice_id}`;
    const iv = crypto.randomBytes(8).toString('hex');
    const password = crypto.createHash('sha1').update(app_secret).digest('hex');
    const salt = crypto.randomBytes(2).toString('hex');
    const saltWithPassword = crypto.createHash('sha256').update(password + salt).digest('hex');

    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(saltWithPassword, 'hex'), Buffer.from(iv, 'hex'));
    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    return `${iv}:${salt}:${encrypted}`.replace(/\//g, '__');
}

// Yeni ödeme işlemini işleyen fonksiyon
export const createPayment = async (req, res) => {
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
        items: JSON.stringify([{ name: "Item3", price: amount, quantity: 1, description: "item3 description" }]),
        name: companyname,
        surname: 'WEB ÖDEMESİ',
        cancel_url: `https://3dstatus.mpmatik.com/fail.html?name=${companyname}&platform=WEB`,
        return_url: `https://3dstatus.mpmatik.com/success.html?name=${companyname}&platform=WEB`,
        hash_key,
        bill_email: ''
    };

    try {
        const response = await fetch('https://provisioning.sipay.com.tr/ccpayment/api/paySmart3D', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data),
        });

        const responseData = await response.json();
        res.send(responseData);
    } catch (error) {
        console.error(error);
        res.status(500).redirect('https://3dstatus.mpmatik.com/fail.html');
    }
};
