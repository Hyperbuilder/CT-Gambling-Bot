const mongoose = require('mongoose');
const { mongoPass } = require('./config.json');

module.exports = async () => {
    await mongoose.connect(mongoPass, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    return mongoose
}