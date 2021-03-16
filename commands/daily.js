module.exports = {
    name: 'daily',
    aliases: ["vote"],
    description: "vote and get coins",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("💵 Economy")
        .setDescription(`Vote using one of the link below in order to gain up to **10,000 coins** every 12 hours`)
        .addFields(
            {name: `Top.gg`, value: `[Click here to vote](https://top.gg/bot/809138212488478730#/)`, inline: true},
        )
        .setFooter("Minumun 1,000 coins")

        message.channel.send(newEmbed)
    }
}