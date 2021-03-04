module.exports = {
    name: 'help',
    description: "gives you a list of commands",
    execute(message, args, cmd, client, Discord){
      
        if(!args[0]){
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#1E90FF")
        .setTitle("Help")
        .setDescription("Here's a list of some useful commands\n\n")
        .addFields(
            {name: '**⚙️ Miscellaneous**', value: "`c!help miscellaneous`", inline: true},
        )
        message.channel.send(newEmbed)
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