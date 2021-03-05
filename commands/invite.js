module.exports = {
    name: 'invite',
    description: "gives you an invite code to the server",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Click here to invite me!")
        .setURL('https://discord.com/oauth2/authorize?client_id=809138212488478730&scope=bot')
        .setDescription("Please use the link above to invite me to your server!\n\nUse this link if you can't use the one above:\nhttps://discord.com/oauth2/authorize?client_id=809138212488478730&scope=bot")

        message.channel.send(newEmbed)
    }
}