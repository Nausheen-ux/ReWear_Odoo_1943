const router = require('express').Router();
const { auth, admin } = require('../middleware/auth');
const { getPendingItems, approveItem, rejectItem } = require('../controllers/adminController');
router.get('/pending', auth, admin, getPendingItems);
router.put('/approve/:id', auth, admin, approveItem);
router.put('/reject/:id', auth, admin, rejectItem);
module.exports = router;
