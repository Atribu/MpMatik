// models/paymentModel.js
import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    companyname: { type: String, required: true },
    amount: { type: Number, required: true },
    name: { type: String, required: true },
    number: { type: String, required: true },
    dateM: { type: String, required: true },
    dateY: { type: String, required: true },
});

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;
