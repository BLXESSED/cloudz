module.exports = {
    name: 'ping',
    description: "gives you the server ping",
    execute(message, args, cmd, client, Discord, profileData){
        message.channel.send(`Pong! Client ping is ${Math.round(client.ws.ping)}ms`); 
    }
}