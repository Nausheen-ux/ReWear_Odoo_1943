const router = require('express').Router();
const { auth } = require('../middleware/auth');
const { requestSwap, redeemItem } = require('../controllers/swapController');
router.post('/request', auth, requestSwap);
router.post('/redeem', auth, redeemItem);
module.exports = router;



