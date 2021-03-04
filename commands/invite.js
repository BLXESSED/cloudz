module.exports = {
    name: 'invite',
    description: "gives you an invite code to the server",
    execute(message, args, cmd, client, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle("Here to invite me!")
        .setURL('https://discord.com/oauth2/authorize?client_id=809138212488478730&scope=bot')
        .setDescription("Please use the link below to invite me to your server!\n\nhttps://discord.com/oauth2/authorize?client_id=809138212488478730&scope=bot")

        message.channel.send(newEmbed)
    }
}