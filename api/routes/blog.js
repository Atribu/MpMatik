import exp from "express";
import { yeniBlog } from "../controller/blog.js";

const router = exp.Router();

router.post("/yeni", yeniBlog)

export default router;