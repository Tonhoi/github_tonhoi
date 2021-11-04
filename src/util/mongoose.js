module.exports = {
    multipleMongooseToObject: function (mongooses) {
        var text =  mongooses.map(mongooses => mongooses.toObject())

        return text
    },
    MongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}
