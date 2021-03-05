const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'give',
    description: "give others for coins",
    async execute(message, args, cmd, client, Discord, profileData){

        const newEmbed1 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription("That user does not exist")

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Help")
        .setDescription("c!give [@username] [amount]")

        const newEmbed3 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription("You can only give a whole number")


        if(!args[0]) return message.channel.send(newEmbed2)
        if(!args[1]) return message.channel.send(newEmbed2)
        const amount = args[1]
        if(args[1] % 1 != 0 || amount <= 0) return message.channel.send(newEmbed3);

        const target = message.mentions.users.first();
        if(!target) return message.channel.send(newEmbed1)

        const targetData = await profileModel.findOne({ userID: target.id })
        if(!targetData) return message.channel.send(newEmbed1)

        try{
            if(amount > profileData.coins) return message.channel.send(newEmbed2);
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: -amount,
                }
            } 
          );

            await profileModel.findOneAndUpdate({
            userID: target.id
        }, {
            $inc: {
                coins: amount,
            }
        } 
      );

        const newEmbed5 = new Discord.MessageEmbed()
        .setColor("#008000")
        .setTitle("💵 Economy")
        .setDescription(`You gave ${target} **${amount} coins**`)

        message.channel.send(newEmbed5)

        }catch(err){
            console.log(err)
        }
    }
}
