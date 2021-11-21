const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')


const Schema = mongoose.Schema;

const blogUser = new Schema({
    username: { type: String },
    tittle: { type: String },
    description: { type: String },
    image: { type: String },
    classify: { type: String },
    slug: {type: String, slug: 'tittle', unique: true }
}, {
    timestamps: true,
});

// custom query helpers
blogUser.query.sortable = function(req) {
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
blogUser.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
})

module.exports = mongoose.model('blogUser', blogUser);
