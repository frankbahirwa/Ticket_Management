const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    ticket_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true },
    amount: { type: Number, required: true },
    payment_method: { type: String, enum: ['MTN MoMo'], required: true },
    status: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
    transaction_id: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
