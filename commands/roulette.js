const { split } = require('ffmpeg-static');
const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'roulette',
    description: "play roulette",
    async execute(message, args, cmd, client, Discord, profileData){
        
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Help")
        .setDescription("`c!roulette [amount] [color]`")

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
        if(!args[1]) return message.channel.send(newEmbed1)
        if(args[0] % 1 != 0 || amount <= 0) return message.channel.send(newEmbed2);
        if(amount > profileData.coins) return message.channel.send(newEmbed3);

        const spin = Math.floor(Math.random() * 35) + 1;

        const player = message.author.tag
        
        message.channel.send(spin)

        if(spin % 2 == 0){
            const color = "red"
            const winning_amount = amount * 2
            if(args[1] = "red"){
                await profileModel.findOneAndUpdate({
                    userID: message.author.id
                }, {
                    $inc: {
                        coins: winning_amount,
                    }
                } 
            );
    
            const newEmbed4 = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle("💵 Economy")
            .setDescription(`You won **${winning_amount} coins**\n`)
            .addFields(
                {name: `${player}`, value: `Picked ${args[1]}`, inline: true},
                {name: "BLESSED's Utilities", value: `Spined ${color}`, inline: true},
            )
            return
            }else{
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
            .setDescription(`You lost **${amount} coins**\n`)
            .addFields(
                {name: `${player}`, value: `Picked ${args[1]}`, inline: true},
                {name: "BLESSED's Utilities", value: `Spined ${color}`, inline: true},
            )
            }
            return
            }
        else if(spin === "35"){
                const color = "green"
                const winning_amount = amount * 35
                if(args[1] = "green"){
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id
                    }, {
                        $inc: {
                            coins: winning_amount,
                        }
                    } 
                );
        
                const newEmbed4 = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("💵 Economy")
                .setDescription(`You won **${winning_amount} coins**\n`)
                .addFields(
                    {name: `${player}`, value: `Picked ${args[1]}`, inline: true},
                    {name: "BLESSED's Utilities", value: `Spined ${color}`, inline: true},
                )
                return
                }else{
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
                .setDescription(`You lost **${amount} coins**\n`)
                .addFields(
                    {name: `${player}`, value: `Picked ${args[1]}`, inline: true},
                    {name: "BLESSED's Utilities", value: `Spined ${color}`, inline: true},
                )
                }
                return
        }else{
            const color = "black"
            const winning_amount = amount * 2
            if(args[1] = "black"){
                await profileModel.findOneAndUpdate({
                    userID: message.author.id
                }, {
                    $inc: {
                        coins: winning_amount,
                    }
                } 
            );
    
            const newEmbed4 = new Discord.MessageEmbed()
            .setColor("#FF0000")
            .setTitle("💵 Economy")
            .setDescription(`You won **${winning_amount} coins**\n`)
            .addFields(
                {name: `${player}`, value: `Picked ${args[1]}`, inline: true},
                {name: "BLESSED's Utilities", value: `Spined ${color}`, inline: true},
            )
            return
            }else{
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
            .setDescription(`You lost **${amount} coins**\n`)
            .addFields(
                {name: `${player}`, value: `Picked ${args[1]}`, inline: true},
                {name: "BLESSED's Utilities", value: `Spined ${color}`, inline: true},
            )
            }
            return
        }
    }
}