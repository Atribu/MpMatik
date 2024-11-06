// app/api/contact/route.js
import nodemailer from 'nodemailer';

// Nodemailer konfigürasyonu
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: true, // Genellikle port 465 için true
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// POST isteği işlemi
export default async function POST(req) {
  const { name, firmaname, phone, email, selectedCity,selectedProduct,selectedTuketim,selectedVehicle } = await req.json();
  
  const mailOptions = {
    from: email, // Formdan gelen email adresi
    to: 'mpmatik@dgtlface.com', // Hedef e-posta adresi
    subject: 'İletişim Formu Mesajı',
    text: `Ad: ${name}\nFirmaAdı: ${firmaname}\nEmail: ${email}\nTelefon: ${phone}\nŞehir: ${selectedCity},\nÜrün: ${selectedProduct},\nTüketim: ${selectedTuketim},\nAraç:${selectedVehicle}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Mesajınız başarıyla gönderildi!' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Mesaj gönderilirken bir hata oluştu.' }), { status: 500 });
  }
}