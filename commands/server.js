module.exports = {
    name: 'server',
    description: "gives you an invite code to the server",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription("Click [here](https://discord.gg/hg8thzYUk4) to join out official discord server!\n\nUse this link if you can't use the one above:\nhttps://discord.gg/hTsyPtUQsr")

        message.channel.send(newEmbed)
    }
}