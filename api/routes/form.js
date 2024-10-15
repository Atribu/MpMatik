// routes/form.js
import express from "express";
import { yeniForm,listeleForm,formSil,formGetir} from "../controller/form.js";

const router = express.Router();

router.post("/yeni", yeniForm);
router.get("/liste", listeleForm);
router.delete("/delete/:id", formSil);
router.get("/:id",formGetir);

export default router;
