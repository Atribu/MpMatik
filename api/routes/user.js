import exp from "express";
import { getirUsers, silUsers, getUserInfo,duzenleUser,userIdGetir} from "../controller/user.js";

const router = exp.Router();

router.get("/getir", getirUsers);
router.delete("/delete/:id", silUsers);
router.get("/:id",userIdGetir);
router.put("/duzenle/:id", duzenleUser);
router.get("/me",getUserInfo);

export default router;
