// index.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";  
import dotenv from "dotenv";

import loginRegister from "./routes/loginRegister.js";
import blogRoute from "./routes/blog.js";
import userRoute from "./routes/user.js";
import pageRouter from "./routes/page.js";
import odemeRouter from "./routes/odeme.js"; 

dotenv.config(); // .env dosyasını kullanabilmek için

// MongoDB bağlantısı
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Bağlandı, sorun yok...");
  })
  .catch((db_error) => {
    console.log(db_error);
  });

const app = express();
app.use(express.json());
app.use(cors()); // CORS middleware'i kullanıldı

// Route'ları ekleme
app.use("/api/giris", loginRegister);
app.use("/api/blog", blogRoute);
app.use("/api/user", userRoute);
app.use("/api/page", pageRouter);
app.use("/api/odeme", odemeRouter); // Ödeme route'u burada kullanıldı

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
