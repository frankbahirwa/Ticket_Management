const mongoose = require('mongoose');

const attachmentSchema = new mongoose.Schema({
    ticket_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true },
    file_path: { type: String, required: true },
    uploaded_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now }
});

const Attachment = mongoose.model('Attachment', attachmentSchema);
module.exports = Attachment;
