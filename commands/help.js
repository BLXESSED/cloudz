module.exports = {
    name: 'help',
    description: "gives you a list of commands",
    execute(message, args, cmd, client, Discord){
      
        if(!args[0]){
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Help")
        .setDescription("Here's some useful commands\n\n")
        .addFields(
            {name: '**💵 Economy**', value: "`!help Economy`", inline: true},
            {name: '**🎶 Music**', value: "`c!help music`", inline: true},
            {name: '**⚙️ Miscellaneous**', value: "`c!help miscellaneous`", inline: true},
        )
        message.channel.send(newEmbed)
        }

        if(args[0] ==  "economy"){
            const newEmbedEconomy = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("💵 Economy")
            .setDescription("`!balance [@username (optional)], !beg, !deposit, !withdraw, !diceroll, !rob, !give`")
            .setFooter("More commands are coimg soon!")
            message.channel.send(newEmbedEconomy)
        }

        if(args[0] == "music"){
            const newEmbedMusic = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("🎶 Music")
            .setDescription("`c!play [song name/youtube url], c!skip, c!stop`")
            .setFooter("More commands are coimg soon!")
            message.channel.send(newEmbedMusic)
        }

        if(args[0] == "miscellaneous"){
            const newEmbedMiscellaneous = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("⚙️ Miscellaneous")
            .setDescription("`c!help, c!creator, c!server, c!ping, c!invite, c!suggestion`")
            message.channel.send(newEmbedMiscellaneous)
        }
    }
}