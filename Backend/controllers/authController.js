const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup Controller
exports.signup = async (req, res) => {
try {
console.log("Signup body:", req.body); // Add this line
const { name, email, password } = req.body;
if (!name || !email || !password) {
  return res.status(400).json({ msg: "All fields are required" });
}

const existing = await User.findOne({ email });
if (existing) return res.status(400).json({ msg: 'Email already in use' });

const hashedPassword = await bcrypt.hash(password, 10);
const user = await User.create({ name, email, password: hashedPassword });

res.status(201).json({ msg: 'User registered successfully' });
} catch (err) {
console.error('Signup Error:', err);
res.status(500).json({ msg: 'Server error during signup' });
}
};



// Login Controller
exports.login = async (req, res) => {
try {
const { email, password } = req.body;


// Find user by email
const user = await User.findOne({ email });
if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

// Compare passwords
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

// Generate JWT token
const token = jwt.sign(
  { id: user._id, isAdmin: user.isAdmin },
  process.env.JWT_SECRET,
  { expiresIn: '1d' }
);

// Send response
res.json({
  token,
  user: {
    id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    points: user.points || 0,
  },
});
} catch (err) {
console.error('Login Error:', err);
res.status(500).json({ msg: 'Server error during login' });
}
};
