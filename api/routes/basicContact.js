import express from "express";
import { yeniIletisim,listeleBasicForm, basicFormSil,basicFormGetir } from "../controller/basicContact.js";

const router = express.Router();

router.post("/yeni", yeniIletisim);
router.get("/liste", listeleBasicForm);
router.delete("/delete/:id", basicFormSil)
router.get("/:id",basicFormGetir);

export default router;
