import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // CORS paketini içe aktarın
import loginRegister from "./routes/loginRegister.js";
import blogRoute from "./routes/blog.js";
import userRoute from "./routes/user.js";
import pageRouter from "./routes/page.js";
import formRouter from "./routes/form.js";
import basicContactRouter from "./routes/basicContact.js";
import paymentRoutes from './payment.js';
import metricRoute from "./routes/metric.js";
import Metric from "./models/metric.js";

dotenv.config(); // .env dosyasını kullanabilmek için

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Bağlandı, sorun yok...");
    seedMetrics();
  })
  .catch((db_error) => {
    console.log("DB bağlantı hatası: ", db_error);
  });

const app = express();

// CORS middleware'ini ekleyin
app.use(cors());

app.use(express.json());

// Route'ları ekleme
app.use("/api/giris", loginRegister);
app.use("/api/blog", blogRoute);
app.use("/api/user", userRoute);
app.use("/api/page", pageRouter);
app.use("/api/form", formRouter);
app.use("/api/basic-contact", basicContactRouter);
app.use('/api/payment', paymentRoutes);
app.use('/api/metric', metricRoute);

// Hata middleware'i
app.use((error, request, response, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Kaynağı belli olmayan bir sorun var!";
  return response.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Sunucu başlatma
app.listen(3000, () => {
  console.log("Server çalışıyor: http://localhost:3000");
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
