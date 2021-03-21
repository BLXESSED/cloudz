const Memer = require("random-jokes-api");
module.exports = {
    name: 'chuck',
    description: "chuckNorris",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(Memer.compliement())

        message.channel.send(newEmbed)

    }
}