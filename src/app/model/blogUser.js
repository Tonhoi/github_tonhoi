const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const blogUser = new Schema({
    username: { type: String },
    tittle: { type: String },
    description: { type: String },
    image: { type: String },
    slug: {type: String, slug: 'tittle', unique: true }
}, {
    timestamps: true,
});

module.exports = mongoose.model('blogUser', blogUser);
