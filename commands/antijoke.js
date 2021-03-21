const Memer = require("random-jokes-api");
module.exports = {
    name: 'antijoke',
    description: "makes an antijoke",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(Memer.antijoke())

        message.channel.send(newEmbed)

    }
}