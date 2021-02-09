module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, commandArgs, command, Tags, MessageEmbed, Discord, client){
        //message.channel.send('pong!');
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
        });
    }
}
//i didn't copy this from the main bot :p