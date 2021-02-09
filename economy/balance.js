module.exports = {
commands : ['balance', 'bal'],
maxArgs: 1,
expectedArgs: "[Target user's @]",
callback:  (message) => {
const target = message.mentions.user.first() || message.author
const targetId = target.id
}
}