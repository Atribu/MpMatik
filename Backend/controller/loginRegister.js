import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { errorHandler } from "../Utils/error.js";

export const girisYap = async (request, response, next) => {
    const {username, password} = request.body;
    try {
        const validate = await User.findOne({username, password});
        if(!validate){
            return next(errorHandle(404, "Kullanıcı adı veya şifre hatalı"));
        }
        const token = jwt.sign({id:validate.id},"DGTLFACE");
        response.cookie("token", token, {expired: new Date(Date.now()+24*60*60*1000), httpOnly: true}).status(201).json(validate);
    } catch (error) {
        next(error);
    }
}