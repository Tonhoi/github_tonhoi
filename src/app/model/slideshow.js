const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const slideshow = new Schema({
    image: { type: String},
    name: { type: String},
    description: { type: String },
    slug: {type: String},
    CreatedAt: { type: Date, default: Date.now },
    UpdateAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('slideshow', slideshow);
