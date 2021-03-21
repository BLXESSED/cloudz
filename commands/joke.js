const Memer = require("random-jokes-api");
module.exports = {
    name: 'joke',
    description: "makes a joke",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(Memer.joke())

        message.channel.send(newEmbed)

    }
}