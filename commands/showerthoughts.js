const Memer = require("random-jokes-api");
module.exports = {
    name: 'showerthoughts',
    description: "gives a showerthoughts",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(Memer.showerThought())

        message.channel.send(newEmbed)

    }
}