const Discord = require("discord.js")
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]})
const config = require('./config.json')
const prefix = config.prefix

client.on('ready', () => {
    console.log("CT Gambling Bot started")
})