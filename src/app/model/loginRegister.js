const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')


const Schema = mongoose.Schema;

const loginRegister = new Schema({
    fullname: { type: String },
    email: { type: String },
    username: { type: String},
    password: { type: String },
    password2: { type: String },
    image: { type: String },
    infoUser: {type: String, slug: 'email', unique: true }
}, {
    timestamps: true,
});

// custom query helpers
loginRegister.query.sortable = function(req) {
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
loginRegister.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
})

module.exports = mongoose.model('loginRegister', loginRegister);
