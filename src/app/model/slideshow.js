const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)
const Schema = mongoose.Schema;

const slideshow = new Schema({
    image: { type: String },
    name: { type: String },
    description: { type: String },
    snippet:{ type: String },
    slug: {type: String, slug: 'name', unique: true }
}, {
    timestamps: true,
});


module.exports = mongoose.model('slideshow', slideshow);
