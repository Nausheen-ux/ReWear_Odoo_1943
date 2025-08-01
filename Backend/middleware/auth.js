const jwt = require('jsonwebtoken');
exports.auth = (req, res, next) => {
const token = req.header('Authorization');
if (!token) return res.status(401).json({ msg: 'No token' });
try {
const decoded = jwt.verify(token, process.env.JWT_SECRET);
req.user = decoded;
next();
} catch {
res.status(400).json({ msg: 'Invalid token' });
}
};
exports.admin = (req, res, next) => {
if (!req.user?.isAdmin) return res.status(403).json({ msg: 'Admin only' });
next();
};
