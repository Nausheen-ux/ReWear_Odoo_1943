const Item = require('../models/Item');
const User = require('../models/User');

exports.getPendingItems = async (req, res) => {
const items = await Item.find({ status: 'pending' });
res.json(items);
};

exports.approveItem = async (req, res) => {
const item = await Item.findById(req.params.id);
if (!item) return res.status(404).json({ msg: 'Item not found' });
item.status = 'approved';
await item.save();

const uploader = await User.findById(item.uploader);
uploader.points += 10;
await uploader.save();

res.json({ msg: 'Approved', item });
};

exports.rejectItem = async (req, res) => {
const item = await Item.findById(req.params.id);
if (!item) return res.status(404).json({ msg: 'Item not found' });
item.status = 'rejected';
await item.save();
res.json({ msg: 'Rejected', item });
};