const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'rob',
    cooldown: 60,
    description: "rob others for money",
    async execute(message, args, cmd, client, Discord, profileData){

        const newEmbed1 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription("That user does not exist")

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription("You can't rob someone who has barely anything in their pockets")

        const newEmbed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Help")
        .setDescription("c!rob [@username]")

        const newEmbed4 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription("You have to have ¢1000 in order to rob someone")

        if(!args[0]) return message.channel.send(newEmbed3)

        const target = message.mentions.users.first();
        if(!target) return message.channel.send(newEmbed1)

        const targetData = await profileModel.findOne({ userID: target.id })
        if(!targetData) return message.channel.send(newEmbed1)

        if(profileData.coins < 1000) return message.channel.send(newEmbed4)

        if(targetData.coins < 1000) return message.channel.send(newEmbed2)

        const amount = Math.floor(Math.random() * `${targetData.coins}`) + 1;

            try{
                if(amount > targetData.coins) return message.channel.send("Couldn't rob this player, please try again later")
                await profileModel.findOneAndUpdate({
                    userID: message.author.id
                }, {
                    $inc: {
                        coins: amount,
                    }
                } 
              );

              await profileModel.findOneAndUpdate({
                userID: target.id
            }, {
                $inc: {
                    coins: -amount,
                }
            } 
          );

          const coins = profileData.coins + amount

          const newEmbed5 = await new Discord.MessageEmbed()
          .setColor("#008000")
          .setTitle("💵 Economy")
          .setDescription(`You sucessfully robbed ${target} for **${amount} coins**`)
          .setFooter(`You now have ¢${coins.toLocaleString()}`)

          message.channel.send(newEmbed5)

        }catch(err){
            console.log(err)
        }
    }
}
