const Memer = require("random-jokes-api");
module.exports = {
    name: 'meme',
    description: "gives a meme",
    execute(message, args, cmd, client, Discord, profileData){

        let meme = Memer.meme()

        let newEmbed = new Discord.MessageEmbed()
        .setTitle(meme.title)
        .setImage(meme.url)
        .setFooter(`Categroy: ${meme.category}`)

        message.channel.send(newEmbed)

    }
}