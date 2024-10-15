import express from "express";
import { yeniIletisim,listeleBasicForm } from "../controller/basicContact.js";

const router = express.Router();

router.post("/yeni", yeniIletisim);
router.get("/liste", listeleBasicForm);

export default router;
