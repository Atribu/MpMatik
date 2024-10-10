import exp from "express"
import { yeniSayfa } from "../controller/page.js";

const router = exp.Router();

router.post("/yeni", yeniSayfa )

export default router;