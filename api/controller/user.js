import user from "../models/user.js"

export const getirUsers = async (request, response, next) => {
    try {
        const users = await user.find();
        return response.status(201).json(users)
    } catch (error) {
        next(error)
    }
}

export const silUsers = async (request, response, next) => {
    try {
        const user = await user.findByIdAndDelete(request.params.id);
        response.status(201).json("Başarıyla Silindi");
    } catch (error) {
        next (error)
    }
}