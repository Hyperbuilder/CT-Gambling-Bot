const mongo = require("../../mongo")

module.exports = async () => {
    console.log(`CT Gamble bot is running`)

    await mongo().then(mongoose => {
        try {
            console.log('Connected to MongoDB')
        } finally {
            mongoose.connection.close()
        }
    })
}