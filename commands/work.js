const profileModel = require('../models/profileSchema');
const scramble = require('scramble');
const randomWords = require('random-words');

module.exports = {
    name: 'work',
    description: "work for coins",
    cooldown: 60 * 15,
    async execute(message, args, cmd, client, Discord, profileData){

        const member = message.author.id

        scramble.attach();
         
        var inputString = randomWords();
        console.log(inputString)

        var scrambledword = inputString.scramble()

        const descramble = new Discord.MessageEmbed()
            .setColor("#FFFFFF")
            .setTitle("💵 Economy")
            .setDescription(`Descramble the word below for coins, you have 30 seconds`)
            .addFields(
            {name: "cloudz", value: `Descramble "${scrambledword}"`, inline: true},
            )

        message.channel.send(descramble)

        const newEmbed4 = new Discord.MessageEmbed()
            .setColor("#008000")
            .setTitle("💵 Economy")
            .setDescription(`Great job, I have you **1,000 coins** for your hard day at work`)
            .addFields(
            {name: "cloudz", value: `The word was "${inputString}"`, inline: true},
            )

        const newEmbed6 = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle("💵 Economy")
            .setDescription(`Horrible work, try again next time`)
            .addFields(
            {name: "cloudz", value: `The word was "${inputString}"`, inline: true},
            )

        const newEmbed5 = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle("💵 Economy")
            .setDescription(`Horrible work, try again next time`)
            .addFields(
                {name: "cloudz", value: `The word was "${inputString}"`, inline: true},
            )

        message.channel.awaitMessages(m => m.author.id == message.author.id,
            {max: 1, time: 30000}).then(async(collected) => {
            
                    if (collected.first().content.toLowerCase() == `${inputString}`) {

                        try{
                            await profileModel.findOneAndUpdate({
                                  userID: message.author.id
                            }, {
                                $inc: {
                                    coins: 1000,
                                    }
                                } 
                            );
                        }catch(err){
                            console.log(err)
                        }
                        
                        message.channel.send(newEmbed4)
                    }
                    else
                        message.channel.send(newEmbed6) 
            }).catch(() => {
                        message.channel.send(newEmbed5)  
            });

    }
}