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

setInterval(async function(){
  
ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})

}, 1200000);

const app = express();

const webhook = new Topgg.Webhook(process.env.PASSWORD);

app.post("/dblwebhook", webhook.middleware(), async (req, res) => {
  console.log(req.vote.user);
  try{
    const randomNumber = Math.floor(Math.random() * 10000) + 1000;
    await profileModel.findOneAndUpdate({
        userID: req.vote.user
    }, {
        $inc: {
            coins: randomNumber,
        }
    } 
  );

  }catch(err){
    console.log(err)
  }
});

app.listen(process.env.PORT);