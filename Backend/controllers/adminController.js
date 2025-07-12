<<<<<<< HEAD
=======

>>>>>>> b95976e (dashboard)
const Item = require('../models/Item');

// Fetch all pending items
exports.getPendingItems = async (req, res) => {
  try {
    const { status } = req.query;
    const query = status ? { status } : {};
    const items = await Item.find(query);
    res.json(items);
  } catch (err) {
    console.error("Error fetching pending items:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

// Approve item
exports.approveItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, { status: "approved" }, { new: true });
    if (!item) return res.status(404).json({ msg: "Item not found" });
    res.json({ msg: "Item approved", item });
  } catch (err) {
    console.error("Error approving item:", err);
    res.status(500).json({ msg: "Server error" });
  }
};

// Reject item
exports.rejectItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, { status: "rejected" }, { new: true });
    if (!item) return res.status(404).json({ msg: "Item not found" });
    res.json({ msg: "Item rejected", item });
  } catch (err) {
    console.error("Error rejecting item:", err);
    res.status(500).json({ msg: "Server error" });
  }

}