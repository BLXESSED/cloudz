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

mongoose.connect("mongodb+srv://cloudz:f48txGv1gx8XdrlU@cloudz.w1qqn.mongodb.net/cloudz?retryWrites=true&w=majority", {
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
const ap = AutoPoster("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzMjA2MzcwNTAyMTI4NDM2MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjIxMjk0Mzk4fQ.IhCLvmjV97aMQzCw9k6FY_uYt0ZA3Bel-AH1Xl6CYFY", client)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})
}, 3600000);


client.login("ODMyMDYzNzA1MDIxMjg0MzYy.YHeVtg.BiUOKtG_Okm3hBC_gvxyNI_Md4s");