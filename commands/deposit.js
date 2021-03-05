const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'deposite',
    aliases: ["dep"],
    description: "deposite coins into your bank",
    async execute(message, args, cmd, client, Discord, profileData){

        const newEmbed1 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription("You can only deposit a whole number")

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription("You can only deposit the coins in your wallet")

        if(!args[0]) return message.channel.send(newEmbed2);
        const amount = args[0];
        if(args % 1 != 0 || amount <= 0) return message.channel.send(newEmbed1);
        try{
            if(amount > profileData.coins) return message.channel.send(newEmbed2);
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: -amount,
                    bank: amount,
                }
            } 
          );

          const newEmbed4 = new Discord.MessageEmbed()
          .setColor("#008000")
          .setTitle("💵 Economy")
          .setDescription(`You deposited **${amount} coins** into your bank account`)

          return message.channel.send(newEmbed4)
        }catch(err){
            console.log(err)
        }
    }
}