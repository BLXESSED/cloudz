const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

const mongoose = require("mongoose");
const profileModel = require('./models/profileSchema');

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindandModify: false
}).then(()=>{
    console.log('Web: Connected to the database!');
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
  console.log(req.vote.user);
  const userid = req.vote.user
  try{
    const randomNumber = Math.floor(Math.random() * 10000) + 1000;
    await profileModel.findOneAndUpdate({
        userID: req.vote.user
    }, {
        $inc: {
            bank: randomNumber,
        }
    } 
  );

  let player = await client.users.fetch(userid).catch(() => null);
  if(!player) console.log("*** NO PLAYER ***")
  console.log(player)
  player.send(`Thank you for voting. Here is **${randomNumber} coins** as a reward. I have deposited it into your bank`);
  }catch(err){
    console.log(err)
  }
});

app.listen(process.env.PORT);