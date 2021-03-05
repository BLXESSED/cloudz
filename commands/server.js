module.exports = {
    name: 'server',
    description: "gives you an invite code to the server",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Click me to join!")
        .setURL('https://discord.gg/WuKeMFyhaB')
        .setDescription("Please use the link above to join out official discord server!\n\nUse this link if you can't use the one above:\nhttps://discord.gg/WuKeMFyhaB")

        message.channel.send(newEmbed)
    }
}