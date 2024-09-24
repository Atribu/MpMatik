import exp from "express";
import { girisYap } from "../controller/loginRegister";


const router = exp.Router();


router.post("/giris", girisYap)


export default router;