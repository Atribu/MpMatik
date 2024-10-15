// routes/form.js
import express from "express";
import { yeniForm,listeleForm,formSil} from "../controller/form.js";

const router = express.Router();

router.post("/yeni", yeniForm);
router.get("/liste", listeleForm);
router.delete("/delete/:id", formSil)

export default router;
