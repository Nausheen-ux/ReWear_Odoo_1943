const mongoose = require('mongoose');
const swapSchema = new mongoose.Schema({
requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
targetItem: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' },
offeredItem: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' }, // optional
type: { type: String, enum: ['swap', 'points'] },
status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Swap', swapSchema);