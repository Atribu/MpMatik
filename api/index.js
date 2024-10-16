// index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import loginRegister from "./routes/loginRegister.js";
import blogRoute from "./routes/blog.js";
import userRoute from "./routes/user.js";
import pageRouter from "./routes/page.js";
import formRouter from "./routes/form.js";
import basicContactRouter from "./routes/basicContact.js"
import paymentRoutes from './payment.js'


dotenv.config(); // .env dosyasını kullanabilmek için

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log("Bağlandı, sorun yok...");
  })
  .catch((db_error) => {
    console.log(db_error);
  });


const app = express();
app.use(express.json());


// Route'ları ekleme
app.use("/api/giris", loginRegister);
app.use("/api/blog", blogRoute);
app.use("/api/user", userRoute);
app.use("/api/page", pageRouter);
app.use("/api/form", formRouter);
app.use("/api/basic-contact", basicContactRouter);
app.use('/api/payment', paymentRoutes);

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
