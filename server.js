const express = require('express');
const app = express();
const cors = require('cors'); 
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/items', require('./routes/itemRoutes'));
app.use('/api/swaps', require('./routes/swapRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

app.listen(process.env.PORT || 5000, () => {
console.log('Server running');
});
