// controllers/basicContact.js
import BasicContact from "../models/basicContact.js";

export const yeniIletisim = async (req, res, next) => {
  try {
    const contact = await BasicContact.create(req.body); // Veriyi Mongo'ya ekler.
    return res.status(201).json({ success: true, contact });
  } catch (error) {
    next(error); // Hata middleware'i tetiklenir.
  }
};

export const listeleBasicForm = async (request, response, next) => {
  try {
      const forms = await BasicContact.find();
      return response.status(201).json(forms)
  } catch (error) {
      next(error)
  }
}

export const basicFormSil = async (request, response, next) => {
  try {
      const form = await BasicContact.findByIdAndDelete(request.params.id);
      response.status(200).json("Başarıyla Silindi");
  } catch (error) {
      next(error);
  }
}

export const basicFormGetir = async (request, response, next) => {
  try {
    const form = await BasicContact.findById(request.params.id);
    if (!form) {
      return response.status(404).json({ success: false, message: ' İletişim Form bulunamadı' });
    }
    return response.status(200).json(form);
  } catch (error) {
    next(error);
  }
};

