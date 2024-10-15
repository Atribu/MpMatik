// routes/odeme.js
import express from 'express';
import { createPayment } from '../controllers/paymentController.js';

const router = express.Router();

router.post('/yeni', createPayment);

export default router;
