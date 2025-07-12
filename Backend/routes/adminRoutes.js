//const router = require('express').Router();
// const express = require('express');
// const router = express.Router();
// const { auth, admin } = require('../middleware/auth');
// const { getPendingItems, approveItem, rejectItem } = require('../controllers/adminController');
// router.get('/pending', auth, admin, getPendingItems);
// router.put('/approve/:id', auth, admin, approveItem);
// router.put('/reject/:id', auth, admin, rejectItem);
// module.exports = router;



const express = require('express');
const router = express.Router();  // ✅ This is correct

const { auth, admin } = require('../middleware/auth');
const {
  getPendingItems,
  approveItem,
  rejectItem,
} = require('../controllers/adminController');

router.get('/pending', auth, admin, getPendingItems);
router.put('/approve/:id', auth, admin, approveItem);
router.put('/reject/:id', auth, admin, rejectItem);

module.exports = router;

