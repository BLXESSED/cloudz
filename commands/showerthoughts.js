const Memer = require("random-jokes-api");
module.exports = {
    name: 'showerthoughs',
    description: "gives a showerthoughs",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(Memer.showerThought())

        message.channel.send(newEmbed)

    }
}