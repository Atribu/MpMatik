// routes/form.js
import express from "express";
import { yeniForm,listeleForm } from "../controller/form.js";

const router = express.Router();

router.post("/yeni", yeniForm);
router.get("/liste", listeleForm);

export default router;
