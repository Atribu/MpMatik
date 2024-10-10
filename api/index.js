import express, { request } from "express";
import mongo from "mongoose";
import loginRegister from "./routes/loginRegister.js";
import blogRoute from "./routes/blog.js"
import userRoute from "./routes/user.js"
import pageRouter from "./routes/page.js"

mongo.connect("mongodb+srv://seo4dgtlface:8ie5pSIEzzeqlaFS@mpmatik.6o7id.mongodb.net/mpmatik?retryWrites=true&w=majority&appName=mpmatik")
.then(()=>{
    console.log("Bağlandı sorun yok...");
})
.catch((db_error)=>{
    console.log(db_error);
})

const exp = express();
exp.use(express.json());

exp.listen(3000, () => {
    console.log("Port Açıldı. Sorun yok");
});

exp.use("/api/giris", loginRegister);
exp.use("/api/blog", blogRoute);
exp.use("/api/user", userRoute);
exp.use ("/api/page", pageRouter);


exp.use((error, request, response, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Kaynağı belli olmayan bir sorun var!";
    return response.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});