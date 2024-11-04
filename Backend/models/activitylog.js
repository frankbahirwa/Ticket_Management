const mongoose = require('mongoose');

const activityLogSchema = new mongoose.Schema({
    ticket_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    action: { type: String, enum: ['Created', 'Updated', 'Closed', 'Paid'], required: true },
    timestamp: { type: Date, default: Date.now }
});

const ActivityLog = mongoose.model('ActivityLog', activityLogSchema);
module.exports = ActivityLog;
