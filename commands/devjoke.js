const Joke = require('awesome-dev-jokes');
module.exports = {
    name: 'devjoke',
    description: "returns awesome dev jokes",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(Joke.getRandomJoke())

        message.channel.send(newEmbed)

    }
}