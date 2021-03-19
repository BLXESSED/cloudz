const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'balance',
    aliases: ["bal", "bl"],
    description: "give you ur balance",
    async execute(message, args, cmd, client, Discord, profileData){
        
        if(args[0]){

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("💵 Economy")
        .setDescription("That user does not exist")

        const target = message.mentions.users.first();
        if(!target) return message.channel.send(newEmbed2)

        const targetData = await profileModel.findOne({ userID: target.id })
        if(!targetData) return message.channel.send(newEmbed2)

        const newEmbed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setAuthor(target.tag + "'s balance", target.displayAvatarURL({ dynamic: true}))
        .setDescription(`Wallet: ¢${targetData.coins.toLocaleString()}\nBank: ¢${targetData.bank.toLocaleString()}`)

        message.channel.send(newEmbed3)
        return
        }else{
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setAuthor(message.author.tag + "'s balance", message.author.displayAvatarURL({ dynamic: true}))
        .setDescription(`Wallet: ¢${profileData.coins.toLocaleString()}\nBank: ¢${profileData.bank.toLocaleString()}`)
        message.channel.send(newEmbed1)
        }
    }
}