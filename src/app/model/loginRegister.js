const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const loginRegister = new Schema({
    fullname: { type: String },
    username: { type: String },
    password: { type: String },
}, {
    timestamps: true,
});

module.exports = mongoose.model('loginRegister', loginRegister);
