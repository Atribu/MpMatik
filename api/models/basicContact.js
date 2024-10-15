import mongoose from "mongoose";

const basicContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    selectedCity: { type: String, required: true },
    mesaj: { type: String, required: true },
  },
  { timestamps: true }
);

const BasicContact = mongoose.model("BasicContact", basicContactSchema);
export default BasicContact;
