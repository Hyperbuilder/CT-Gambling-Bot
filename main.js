const Discord = require("discord.js")
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]})

const config = require('./config.json')
const prefix = config.prefix

const fs = require('fs')

client.command = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
const command = require(`./commands/${file}`);

client.command.set(command.name, command);
}


client.on('ready', () => {
    console.log("CT Gambling Bot started")
})

client.on('message', message =>{
if(!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

if(command === 'ping'){
client.commands.get('ping').execute(message, args);
}

})