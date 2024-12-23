const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'diceroll',
    aliases: ["dr"],
    description: "roll a dice and the higher number wins",
    async execute(message, args, cmd, client, Discord, profileData){

        const newEmbed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Help")
        .setDescription("`c!diceroll [amount]`")

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription("You can only gamble a whole number of coins")

        const newEmbed3 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription("You do not have enough money in your wallet to gamble")

        if(!args[0]) return message.channel.send(newEmbed1)
        const amount = args[0]
        if(args % 1 != 0 || amount <= 0) return message.channel.send(newEmbed2);
        if(amount > profileData.coins) return message.channel.send(newEmbed3);

        const player = message.author.tag

        const botRoll = Math.floor(Math.random() * 10) + 2;
        const playerRoll = Math.floor(Math.random() * 10) + 2;

        try{
            if(botRoll > playerRoll){
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: -amount,
                }
            } 
        );

        const coins = profileData.coins - amount

        const newEmbed4 = await new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription(`You lost **${amount} coins**\n`)
        .addFields(
            {name: `${player}`, value: `Rolled ${playerRoll}`, inline: true},
            {name: "cloudz", value: `Rolled ${botRoll}`, inline: true},
        )
        .setFooter(`You now have ¢${coins.toLocaleString()}`)

        message.channel.send(newEmbed4)
        return
    }else{
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            }, {
                $inc: {
                    coins: amount,
                }
            } 
        );

        const coins = profileData.coins + amount

        const newEmbed5 = await new Discord.MessageEmbed()
        .setColor("#008000")
        .setTitle("💵 Economy")
        .setDescription(`You won **${amount} coins**\n`)
        .addFields(
            {name: `${player}`, value: `Rolled ${playerRoll}`, inline: true},
            {name: "cloudz", value: `Rolled ${botRoll}`, inline: true},
        )
        .setFooter(`You now have ¢${coins.toLocaleString()}`)

        message.channel.send(newEmbed5)
                }
            }catch(err){
                console.log(err)
        }
    }
}

