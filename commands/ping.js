module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(client, message, args, Discord){
        console.log('recieved command')

        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Pong! Took ${sent.createdTimestamp - message.createdTimestamp}ms`);
        });
    }
}
//i didn't copy this from the main bot :p