const Memer = require("random-jokes-api");
module.exports = {
    name: 'pun',
    description: "makes a pun",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(Memer.pun())

        message.channel.send(newEmbed)

    }
}