module.exports = {
    name: 'daily',
    aliases: ["vote"],
    description: "vote and get coins",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("💵 Economy")
        .setDescription(`Vote using the link below in order to gain **5,000 coins** every 12 hours`)
        .addFields(
            {name: `top.gg`, value: `[Click here to vote!](https://top.gg/bot/809138212488478730/vote)`, inline: true},
        )
        .setFooter("Your coins will automatically be addded to your wallet as soon as you submit your vote")

        message.channel.send(newEmbed)
    }
}