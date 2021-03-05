const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'withdraw',
    aliases: ["wd"],
    description: "withdraw coins into your bank",
    async execute(message, args, cmd, client, Discord, profileData){
        
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription("You can only withdraw a whole number")

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription("You can only withdraw the coins in your bank")

        const newEmbed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Help")
        .setDescription(`c!withdraw [amount]`)

        if(!args[0]) return message.channel.send(newEmbed2);
        const amount = args[0];
        if(!args[1]) return message.channel.send(newEmbed3)
        if(args % 1 != 0 || amount <= 0) return message.channel.send(newEmbed1);
        try{
            if(amount > profileData.bank) return message.channel.send(newEmbed2);
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: amount,
                    bank: -amount,
                }
            } 
          );

          const newEmbed4 = new Discord.MessageEmbed()
          .setColor("#008000")
          .setTitle("💵 Economy")
          .setDescription(`You withdrawn **${amount} coins** from your bank account`)

          return message.channel.send(newEmbed4)
        }catch(err){
            console.log(err)
        }
    }
}
