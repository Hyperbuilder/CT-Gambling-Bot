const ProfileSchema = require("../../ProfileSchema");

module.exports = async (client, discord, member) => {
    let profile = await profileModel.create({
        userID: member.id,
        guildID: member.guild.id,
        brass: 1000,
        bank: 0,
    });
    profile.save();
}