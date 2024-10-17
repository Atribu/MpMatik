import exp from "express";
import { getirUsers, silUsers } from "../controller/user.js";

const router = exp.Router();

router.get("/getir", getirUsers);
router.delete("/delete/:id", silUsers)

export default router;