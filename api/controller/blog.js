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

export const blogById = async (request, response, next) => {
    try {
      const blog = await Blog.findById(request.params.id);
      if (!blog) {
        return response.status(404).json({ success: false, message: 'Blog bulunamadı' });
      }
      return response.status(200).json(blog);
    } catch (error) {
      next(error);
    }
  };

  export const blogSil = async (request, response, next) => {
    try {
        const blog = await Blog.findByIdAndDelete(request.params.id);
        response.status(200).json("Başarıyla Silindi");
    } catch (error) {
        next(error);
    }
}