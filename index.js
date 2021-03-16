const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const mongoose = require("mongoose");
const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

client.once('ready', () => {
    client.user.setActivity('c!help | Beta Version | Full Release Upcoming | use c!invite to invite me | Created by BLXESSED#3960', {type: 'LISTENING'});
    console.log(`cloudz has ${client.users.cache.size} users, in ${client.guilds.cache.size} servers!`);
    const startChannel = client.channels.cache.get('817565865343713292')
    startChannel.send('✅ Restart Complete!\n The new update has been recieved and deployed\n\nInvite me using the link below:\nhttps://discord.com/oauth2/authorize?client_id=809138212488478730&scope=bot')
});

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindandModify: false
}).then(()=>{
    console.log('Connected to the database!');
}).catch((err) =>{
    console.log(err);
})

client.login(process.env.TOKEN);