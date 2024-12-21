const Discord = require('discord.js');
require("dotenv").config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const mongoose = require("mongoose");
const fs = require('fs');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

client.once('ready', () => {
    client.user.setActivity('c!help', {type: 'LISTENING'});
    console.log(`cloudz has ${client.users.cache.size} users, in ${client.guilds.cache.size} servers!`);
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

const AutoPoster = require('topgg-autoposter')

setInterval(async function(){
const ap = AutoPoster(process.env.TOPGG_TOKEN, client)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})
}, 3600000);

client.login(process.env.TOKEN);