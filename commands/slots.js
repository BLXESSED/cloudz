const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'slots',
    description: "play a slots machine",
    async execute(message, args, cmd, client, Discord, profileData){
        const getSomeCoolEmojis = require("get-some-cool-emojis");
        
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Help")
        .setDescription("`c!slots [amount]`")

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
        const winning_amount = amount * 3

        const player = message.author.tag

        const RandomNumber = Math.floor(Math.random() * 4) + 1;

        if(RandomNumber == 2){

        try{
            await profileModel.findOneAndUpdate({
                    userID: message.author.id
                }, {
                    $inc: {
                        coins: winning_amount,
                    }
                } 
            );

        const coins = profileData.coins + winning_amount

        const emoji = getSomeCoolEmojis(1)

        const newEmbed4 = await new Discord.MessageEmbed()
        .setColor("#008000")
        .setTitle(`💵 Economy`)
        .setDescription(`**${player}'s slots machine**\n\n>${emoji} ${emoji} ${emoji}<\n\nYou Won **${winning_amount} coins**`)
        .setFooter(`You now have ¢${coins.toLocaleString()}`)

        message.channel.send(newEmbed4)

    }catch(err){
        console.log(err)
        }

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
        .setTitle(`💵 Economy`)
        .setDescription(`**${player}'s slots machine**\n\n>${getSomeCoolEmojis(1)} ${getSomeCoolEmojis(1)} ${getSomeCoolEmojis(1)}<\n\nYou Lost **${amount} coins**`)
        .setFooter(`You now have ¢${coins.toLocaleString()}`)

        message.channel.send(newEmbed4)

    }catch(err){
        console.log(err)
        }

        }

    }
}