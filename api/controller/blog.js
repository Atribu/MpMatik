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
        // URL parametresinden blog url'sini alıyoruz
        const blogUrl = request.params.url;

        // Blogu url'ye göre bulup güncelliyoruz
        const blog = await Blog.findOneAndUpdate(
            { url: blogUrl },  // URL'ye göre bulma
            { $set: request.body },  // Güncellenecek veriler
            { new: true }  // Güncellenmiş dokümanı döndür
        );

        // Blog başarıyla güncellendiyse 200 durum kodu ile birlikte gönderiyoruz
        return response.status(200).json(blog);
    } catch (error) {
        // Hata durumunda next fonksiyonu ile error middleware'ine geçiyoruz
        next(error);
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

export const blogGetir = async (request, response, next) => {
    try {
      const blog = await Blog.findOne({url:request.params.url});
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