module.exports = {
    name: 'ping',
    description: "gives you the server ping",
    execute(message, args, cmd, client, Discord, profileData){
        message.channel.send(`Pong! Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}