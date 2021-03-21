const yourmama = require('yourmama')
module.exports = {
    name: 'yourmama',
    description: "makes a your mama joke",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(yourmama.getRandom())

        message.channel.send(newEmbed)

    }
}