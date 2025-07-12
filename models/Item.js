const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
title: String,
description: String,
category: String,
size: String,
condition: String,
tags: [String],
images: [String],
status: { type: String, enum: ['pending', 'approved', 'rejected', 'swapped'], default: 'pending' },
uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Item', itemSchema);