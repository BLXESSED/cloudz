const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'admingive',
    description: "give a memeber coins",
    async execute(message, args, cmd, client, Discord, profileData){

        const newEmbed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Help")
        .setDescription("`c!admingive [@username] [amount]`")

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("Economy")
        .setDescription("That user does not exist")

        const newEmbed3 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("Economy")
        .setDescription("You can only give a whole number")

        const newEmbed4 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Help")
        .setDescription("You need specify the amount of coins you would like to give")

        if(message.member.roles.cache.has('796623792200744963')){
        if(!args[0]) return message.channel.send(newEmbed1)
        if(!args[1]) return message.channel.send(newEmbed4)
        const amount = args[1]
        const target = message.mentions.users.first();
        if(!target) return message.channel.send(newEmbed2)

        if(isNaN(args[1])) return message.channel.send(newEmbed3);
        if(args[1] < 1) return message.channel.send(newEmbed3);

        try{
            const targetData = await profileModel.findOne({ userID: target.id })
            if(!targetData) return message.channel.send(newEmbed2)

            await profileModel.findOneAndUpdate(
                {
                userID: target.id
            }, 
            {
                $inc: {
                    coins: amount,
                },
            }
            );

            const newEmbed5 = new Discord.MessageEmbed()
            .setColor("#008000")
            .setTitle("Economy")
            .setDescription(`You have given ${target} **${amount} coins**`)

            return message.channel.send(newEmbed5)
        }catch(err){
            console.log(err);
        }
    
    } else {
        const newEmbed100 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("Economy")
        .setDescription("You do not have permission to use this command")
        message.channel.send(newEmbed100)
    }
    }
}
