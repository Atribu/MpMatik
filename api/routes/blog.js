import exp from "express";
import { blogById, blogSil, duzenleBlog, listeleBlog, yeniBlog } from "../controller/blog.js";

const router = exp.Router();

router.post("/yeni", yeniBlog);
router.get("/duzenle", duzenleBlog);
router.get("/liste", listeleBlog);
router.get("/:id", blogById);
router.delete("/delete/:id", blogSil)

export default router;