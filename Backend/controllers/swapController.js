const Swap = require('../models/Swap');
const Item = require('../models/Item');
const User = require('../models/User');

// Request a swap with another item
exports.requestSwap = async (req, res) => {
  try {
    const { targetItemId, offeredItemId } = req.body;
    const swap = await Swap.create({
      requester: req.user.id,
      targetItem: targetItemId,
      offeredItem: offeredItemId,
      type: 'swap',
    });
    res.status(201).json(swap);
  } catch (err) {
    res.status(500).json({ msg: 'Error requesting swap' });
  }
};

// Redeem an item via points
exports.redeemItem = async (req, res) => {
  try {
    const { targetItemId } = req.body;
    const item = await Item.findById(targetItemId);
    if (!item || item.status !== 'approved') {
      return res.status(400).json({ msg: 'Item not available' });
    }

    const buyer = await User.findById(req.user.id);
    const seller = await User.findById(item.uploader);

    if (buyer.points < 10) {
      return res.status(400).json({ msg: 'Not enough points' });
    }

    // Deduct and add points
    buyer.points -= 10;
    seller.points += 10;

    await buyer.save();
    await seller.save();

    // Update item status
    item.status = 'swapped';
    await item.save();

    // Log the swap
    const swap = await Swap.create({
      requester: req.user.id,
      targetItem: targetItemId,
      type: 'points',
      status: 'accepted',
    });

    res.json({ msg: 'Item redeemed using points', swap });
  } catch (err) {
    res.status(500).json({ msg: 'Error redeeming item' });
  }
};
