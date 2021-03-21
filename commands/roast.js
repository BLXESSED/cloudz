const Memer = require("random-jokes-api");
module.exports = {
    name: 'roast',
    description: "makes a roast",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(Memer.roast())

        message.channel.send(newEmbed)

    }
}