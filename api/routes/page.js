import exp from "express"
import { yeniSayfa,pageGetir } from "../controller/page.js";

const router = exp.Router();

router.post("/yeni", yeniSayfa );
router.get("/:url", pageGetir);

export default router;