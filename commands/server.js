module.exports = {
    name: 'server',
    description: "gives you an invite code to the server",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription("Click [here](https://discord.gg/hg8thzYUk4) to join out official discord server!")

        message.channel.send(newEmbed)
    }
}