const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/doan2');
        console.log('connect successfully')
    } catch (error) {  
        console.log('connect falled')
    }
}

module.exports = { connect }
