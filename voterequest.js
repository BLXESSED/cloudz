const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const profileModel = require('./models/profileSchema');

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

  client.users.cache.get(player).send(`Thank you for voting. Here is **${randomNumber} coins** as a reward. I have deposited it into your bank`);
  }catch(err){
    console.log(err)
  }
});

app.listen(process.env.PORT);