const Memer = require("random-jokes-api");
module.exports = {
    name: 'quote',
    description: "gives some quote",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(Memer.quotes())

        message.channel.send(newEmbed)

    }
}