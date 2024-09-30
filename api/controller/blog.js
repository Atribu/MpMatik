import Blog from "../models/blog.js";

export const yeniBlog = async (request, response, next) => {
    try {
        const blog = await Blog.create(request.body);
        return response.status(201).json(blog)
    } catch (error) {
        next(error)
    }
}