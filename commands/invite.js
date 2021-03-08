module.exports = {
    name: 'invite',
    description: "gives you an invite code to the server",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription("Click [here](https://discord.com/oauth2/authorize?client_id=809138212488478730&scope=bot&permissions=-9) to invite me to your server!\n\nUse this link if you can't use the one above:\nhttps://discord.com/oauth2/authorize?client_id=809138212488478730&scope=bot&permissions=-9")

        message.channel.send(newEmbed)
    }
}