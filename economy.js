const mongo = require('./mongo');
const ProfileSchema = require('./ProfileSchema')

module.exports = (client) => {}

module.exports.getcoins = async (guildID, userID) => {
    return await mongo().then(async (mongoose) => {
        try {
            console.log('Running: Findone()')

            const result = await ProfileSchema.findOne({
                guildID,
                userID
            })

            console.log('Result:', result);

            let brass = 0;
            if (result) {
                brass = result.brass
            } else {
                console.log('Inserting a Document')
                await new ProfileSchema({
                    guildID,
                    userID,
                    brass
                }).save()

                return brass
            }
        } finally {
            mongoose.connection.close()
        }
    })
}