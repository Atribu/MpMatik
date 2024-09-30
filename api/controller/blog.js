import Blog from "../models/blog.js";

export const yeniBlog = async (request, response, next) => {
    try {
        const blog = await Blog.create(request.body);
        return response.status(201).json(blog)
    } catch (error) {
        next(error)
    }
}

export const duzenleBlog = async (request, response, next) => {
    try {
        const blog = await Blog.findByIdAndUpdate(request.body._id, {
            $set: request.body
        }, { new: true });
        return response.status(201).json(blog)
    } catch (error) {
        next(error)
    }
}

export const listeleBlog = async (request, response, next) => {
    try {
        const blogs = await Blog.find();
        return response.status(201).json(blogs)
    } catch (error) {
        next(error)
    }
}