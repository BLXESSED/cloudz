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

        if(!args[0] == "heads") return message.channel.send(newEmbed1)
        if(!args[0] == "tails") return message.channel.send(newEmbed1)
        if(!args[1]) return message.channel.send(newEmbed1)
        const amount = args[1]
        if(args[1] % 1 != 0 || amount <= 0) return message.channel.send(newEmbed2);
        if(amount > profileData.coins) return message.channel.send(newEmbed3);

        const player = message.author.tag

        const flip = Math.floor(Math.random() * 2) + 1;

        if(args[0] == "heads"){
            if(flip % 2 == 0){
                try{
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id
                    }, {
                        $inc: {
                            coins: amount,
                        }
                    } 
                );

                const coins = profileData.coins + amount

                const newEmbed4 = await new Discord.MessageEmbed()
                .setColor("#008000")
                .setTitle("💵 Economy")
                .setDescription(`You won **${amount} coins**`)
                .addFields(
                    {name: `${player}`, value: `Picked heads`, inline: true},
                    {name: "cloudz", value: `Fliped heads`, inline: true},
                )
                .setFooter(`You now have ¢${coins.toLocaleString()}`)
                
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

                const coins = profileData.coins - amount

                const newEmbed4 = await new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("💵 Economy")
                .setDescription(`You lost **${amount} coins**`)
                .addFields(
                    {name: `${player}`, value: `Picked heads`, inline: true},
                    {name: "cloudz", value: `Fliped tails`, inline: true},
                )
                .setFooter(`You now have ¢${coins.toLocaleString()}`)
                
                message.channel.send(newEmbed4)
                
            }catch(err){
                console.log(err)
                }
                return 
            }
        }

        else if(args[0] == "tails"){
            if(flip % 2 == 0){
                try{
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id
                    }, {
                        $inc: {
                            coins: amount,
                        }
                    } 
                );

                const newEmbed4 = await new Discord.MessageEmbed()
                .setColor("#008000")
                .setTitle("💵 Economy")
                .setDescription(`You won **${amount} coins**`)
                .addFields(
                    {name: `${player}`, value: `Picked tails`, inline: true},
                    {name: "cloudz", value: `Fliped tails`, inline: true},
                )
                .setFooter(`You now have ¢${profileData.coins.toLocaleString()}`)
                
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

                const newEmbed4 = await new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("💵 Economy")
                .setDescription(`You lost **${amount} coins**`)
                .addFields(
                    {name: `${player}`, value: `Picked tails`, inline: true},
                    {name: "cloudz", value: `Fliped heads`, inline: true},
                )
                .setFooter(`You now have ¢${profileData.coins.toLocaleString()}`)
                
                message.channel.send(newEmbed4)
                
            }catch(err){
                console.log(err)
                }
                return 
            }
        }else{
            channel.message.send(newEmbed1)
        }

    }
}