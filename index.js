const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const mongoose = require("mongoose");
const fs = require('fs');
const profileModel = require('./models/profileSchema');

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

const Topgg = require("@top-gg/sdk");
const express = require("express");

const AutoPoster = require('topgg-autoposter')

const ap = AutoPoster(process.env.TOPGG_TOKEN, client)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})

const app = express();

const webhook = new Topgg.Webhook(process.env.PASSWORD);

app.post("/dblwebhook", webhook.middleware(), async (req, res) => {
  // req.vote will be your vote object, e.g
  console.log(req.vote.user); // 395526710101278721 < user who voted
  try{
    const randomNumber = Math.floor(Math.random() * 10000) + 1000;
    const player = req.vote.user
    await profileModel.findOneAndUpdate({
        userID: player
    }, {
        $inc: {
            bank: randomNumber,
        }
    } 
  );

  await client.users.cache.get(player).send(`Thank you for voting. Here is **${randomNumber} coins** as a reward. I have deposited it into your bank`);
  }catch(err){
    console.log(err)
  }
});

app.listen(process.env.PORT);

client.login(process.env.TOKEN);