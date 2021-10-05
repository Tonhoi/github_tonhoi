module.exports = {
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongooses => mongooses.toObject())
    },
    MongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}
