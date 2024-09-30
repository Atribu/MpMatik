import exp from "express";
import { duzenleBlog, listeleBlog, yeniBlog } from "../controller/blog.js";

const router = exp.Router();

router.post("/yeni", yeniBlog);
router.get("/duzenle", duzenleBlog);
router.get("/liste", listeleBlog);

export default router;