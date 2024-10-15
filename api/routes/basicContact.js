import express from "express";
import { yeniIletisim,listeleBasicForm, basicFormSil } from "../controller/basicContact.js";

const router = express.Router();

router.post("/yeni", yeniIletisim);
router.get("/liste", listeleBasicForm);
router.delete("/delete/:id", basicFormSil)

export default router;
