// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import paymentRoutes from './routes/payment.js';
import loginRegister from "./routes/loginRegister.js";
import blogRoute from "./routes/blog.js";
import userRoute from "./routes/user.js";
import pageRouter from "./routes/page.js";
import formRouter from "./routes/form.js";
import basicContactRouter from "./routes/basicContact.js";
import metricRoute from "./routes/metric.js";
import Metric from "./models/metric.js";

dotenv.config(); // .env dosyasını yükle

const app = express();
// CORS Ayarları
app.use(cors({
  origin: 'http://localhost:5173', // Frontend'in adresi
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json()); // JSON verilerini parse et
app.use(express.urlencoded({ extended: true })); // URL-encoded verilerini parse et

app.use(express.static('public'));

// MongoDB bağlantısı (Gerekirse)
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB'ye bağlandı.");
  })
  .catch((error) => {
    console.error("MongoDB bağlantı hatası:", error);
  });

// Route'ları ekle
app.use("/api/giris", loginRegister);
app.use("/api/blog", blogRoute);
app.use("/api/user", userRoute);
app.use("/api/page", pageRouter);
app.use("/api/form", formRouter);
app.use("/api/basic-contact", basicContactRouter);
app.use('/api/payment', paymentRoutes);
app.use('/api/metric', metricRoute);

// Hata middleware'i
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Bir hata oluştu!";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Sunucu başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});

// Seed işlemi: Veritabanına başlangıç verisi ekleme
const seedMetrics = async () => {
  try {
    const existingMetrics = await Metric.find();
    if (existingMetrics.length === 0) {
      await Metric.insertMany([
        {
          name: "network.bytesIn",
          dataPoints: [
            { timestamp: new Date(), value: 120 },
            { timestamp: new Date(), value: 150 },
          ],
        },
        {
          name: "connections.current",
          dataPoints: [
            { timestamp: new Date(), value: 10 },
            { timestamp: new Date(), value: 15 },
          ],
        },
      ]);
      console.log("Başlangıç verileri başarıyla eklendi.");
    } else {
      console.log("Veriler zaten mevcut, ekleme yapılmadı.");
    }
  } catch (error) {
    console.error("Seed verisi ekleme hatası:", error);
  }
};
