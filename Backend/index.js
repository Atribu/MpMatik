import express, { request } from "express";
import mongo from "mongoose";

mongo.connect("mongodb+srv://seo4dgtlface:8ie5pSIEzzeqlaFS@mpmatik.6o7id.mongodb.net/MPmatik?retryWrites=true&w=majority&appName=MPmatik")
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

exp.use((error, request, response, next) => {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Kaynağı belli olmayan bir sorun var!";
    return response.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});