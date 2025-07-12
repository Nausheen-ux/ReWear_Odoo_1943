const router = require('express').Router();
const { auth } = require('../middleware/auth');
const { addItem, getItems, getItemById } = require('../controllers/itemController');
router.post('/add', auth, addItem);
router.get('/', getItems); // for browsing
router.get('/:id', getItemById);
module.exports = router;

