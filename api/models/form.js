// models/form.js
import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    firmaname: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    selectedCity: { type: String, required: true },
    selectedProduct: { type: String, required: true },
    selectedTuketim: { type: String, required: true },
    selectedVehicle: { type: String, required: true },
    isChecked: { type: Boolean, required: true }
  },
  { timestamps: true }
);

const Form = mongoose.model("Form", formSchema);
export default Form;
