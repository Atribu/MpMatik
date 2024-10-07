import exp from "express";
import { getirUsers, silUsers } from "../controller/user.js";

const router = exp.Router();

router.get("/getir", getirUsers);
router.delete("/delete/:_id", silUsers)

export default router;
