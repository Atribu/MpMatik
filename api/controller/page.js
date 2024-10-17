import Page from "../models/page.js"

export const yeniSayfa = async (request, response, next) => {
    try {
      const page = await Page.create(request.body);
      return response.status(201).json({ success: true, page });
    } catch (error) {
      console.error("Sunucu hatası:", error.message);
      return response.status(500).json({ success: false, message: error.message });
    }
  };

  export const pageGetir = async (request, response, next) => {
    try {
      const page = await Page.findOne({url:request.params.url});
      if (!page) {
        return response.status(404).json({ success: false, message: 'Page bulunamadı' });
      }
      return response.status(200).json(page);
    } catch (error) {
      next(error);
    }
  };
  