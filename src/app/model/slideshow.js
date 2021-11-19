const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema;

const slideshow = new Schema({
    image: { type: String },
    name: { type: String },
    description: { type: String },
    deleteAt: { type: Date },
    classify: {type: String},
    slug: {type: String, slug: 'name', unique: true }
}, {
    timestamps: true,
});

// custom query helpers
slideshow.query.sortable = function(req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidtype = ['asc', 'desc'].includes(req.query.type)
        return this.sort({ 
            [req.query.column]: isValidtype ? req.query.type : 'desc'
        })
    }
    return this
}

// add plugin
mongoose.plugin(slug)
slideshow.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
})

module.exports = mongoose.model('slideshow', slideshow);
