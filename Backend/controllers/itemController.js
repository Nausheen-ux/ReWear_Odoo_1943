const Item = require('../models/Item');

// Add a new item
exports.addItem = async (req, res) => {
  try {
    const { title, description, category, size, condition, tags, images } = req.body;
    const item = await Item.create({
      title,
      description,
      category,
      size,
      condition,
      tags,
      images,
      uploader: req.user.id
    });
    res.status(201).json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error adding item' });
  }
};

// Get all approved items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find({ status: 'approved' }).populate('uploader', 'name');
    res.json(items);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching items' });
  }
};

// Get item by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id).populate('uploader', 'name');
    if (!item) return res.status(404).json({ msg: 'Item not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ msg: 'Error retrieving item' });
  }
};
