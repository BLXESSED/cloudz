const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const fs = require('fs'); 

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

client.once('ready', () => {
    client.user.setActivity('c!help | Beta Version | Full Release Upcoming |  Streams High Quality Music with Surround Sound | Low Latency and 100% Free!!! | Type c!invite to invite the bot to your server today | Created by BLXESSED#3960', {type: 'LISTENING'});
    console.log(`cloudz has ${client.users.cache.size} users, in ${client.guilds.cache.size} servers!`);
});

client.login(process.env.TOKEN);