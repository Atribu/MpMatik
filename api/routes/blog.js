import exp from "express";
import { blogGetir, blogSil, duzenleBlog, listeleBlog, yeniBlog } from "../controller/blog.js";

const router = exp.Router();

router.post("/yeni", yeniBlog);
router.put("/duzenle/:id", duzenleBlog);
router.get("/liste", listeleBlog);
router.get("/:url", blogGetir);
router.delete("/delete/:id", blogSil)

export default router;