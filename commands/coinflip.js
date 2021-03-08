const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'coinflip',
    aliases: ["cf"],
    description: "flip a coin for coins",
    async execute(message, args, cmd, client, Discord, profileData){
        
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Help")
        .setDescription("`c!coinflip <heads/tails> [amount]`")

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription("You can only gamble a whole number of coins")

        const newEmbed3 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription("You do not have enough money in your wallet to gamble")

        if(!args[1]) return message.channel.send(newEmbed1)
        const amount = args[1]
        if(args[1] % 1 != 0 || amount <= 0) return message.channel.send(newEmbed2);
        if(amount > profileData.coins) return message.channel.send(newEmbed3);

        const player = message.author.tag

        const flip = Math.floor(Math.random() * 2) + 1;

        const winning_amount = amount * 2

        if(args[1] = "heads"){
            if(flip % 2 == 0){
                try{
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id
                    }, {
                        $inc: {
                            coins: winning_amount,
                        }
                    } 
                );

                const newEmbed4 = new Discord.MessageEmbed()
                .setColor("#008000")
                .setTitle("💵 Economy")
                .setDescription(`You won **${winning_amount} coins**`)
                .addFields(
                    {name: `${player}`, value: `Picked heads`, inline: true},
                    {name: "BLESSED's Utilities", value: `Fliped heads`, inline: true},
                )
                
                message.channel.send(newEmbed4)

            }catch(err){
                console.log(err)
                }

            return
            }else{
                try{
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id
                    }, {
                        $inc: {
                            coins: -amount,
                        }
                    } 
                );

                const newEmbed4 = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("💵 Economy")
                .setDescription(`You lost **${amount} coins**`)
                .addFields(
                    {name: `${player}`, value: `Picked heads`, inline: true},
                    {name: "BLESSED's Utilities", value: `Fliped tails`, inline: true},
                )
                
                message.channel.send(newEmbed4)
                
            }catch(err){
                console.log(err)
                }
                return 
            }
        }

        if(args[1] = "tails"){
            if(!flip % 2 == 0){
                try{
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id
                    }, {
                        $inc: {
                            coins: winning_amount,
                        }
                    } 
                );

                const newEmbed4 = new Discord.MessageEmbed()
                .setColor("#008000")
                .setTitle("💵 Economy")
                .setDescription(`You won **${winning_amount} coins**`)
                .addFields(
                    {name: `${player}`, value: `Picked tails`, inline: true},
                    {name: "BLESSED's Utilities", value: `Fliped tails`, inline: true},
                )
                
                message.channel.send(newEmbed4)

            }catch(err){
                console.log(err)
                }

            return
            }else{
                try{
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id
                    }, {
                        $inc: {
                            coins: -amount,
                        }
                    } 
                );

                const newEmbed4 = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("💵 Economy")
                .setDescription(`You lost **${amount} coins**`)
                .addFields(
                    {name: `${player}`, value: `Picked tails`, inline: true},
                    {name: "BLESSED's Utilities", value: `Fliped heads`, inline: true},
                )
                
                message.channel.send(newEmbed4)
                
            }catch(err){
                console.log(err)
                }
                return 
            }
        }

    }
}