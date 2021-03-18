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

const app = express();

const webhook = new Topgg.Webhook(process.env.PASSWORD);

app.post("/dblwebhook", webhook.middleware(), async (req, res) => {
  console.log(req.vote.user);
  try{
    await profileModel.findOneAndUpdate({
        userID: req.vote.user
    }, {
        $inc: {
            coins: 5000,
        }
    } 
  );
  }catch(err){
    console.log(err)
  }
});

app.listen(process.env.PORT);



const wakeUpDyno = require("wokeDyno.js");

const PORT = process.env.PORT; 
const DYNO_URL = "https://cloudzthebot.herokuapp.com/"; 

app.listen(PORT, () => {
    wakeUpDyno(DYNO_URL); 
})