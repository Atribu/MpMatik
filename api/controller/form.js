import Form from "../models/form.js";

export const yeniForm = async (req, res, next) => {
  try {
    const form = await Form.create(req.body); // Form verilerini Mongo'ya ekler.
    return res.status(201).json({ success: true, form });
  } catch (error) {
    next(error); 
  }
};

export const listeleForm = async (request, response, next) => {
  try {
      const forms = await Form.find();
      return response.status(201).json(forms)
  } catch (error) {
      next(error)
  }
}
