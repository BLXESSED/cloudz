module.exports = {
    name: 'help',
    description: "gives you a list of commands",
    execute(message, args, cmd, client, Discord, profileData){
      
        if(!args[0]){
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Help")
        .setDescription("Here're some useful commands\n\nUse `c!vote` and recieve some special reward\n\n")
        .addFields(
            {name: '**💵 Economy**', value: "`c!help economy`", inline: true},
            {name: '**🎶 Music**', value: "`c!help music`", inline: true},
            {name: '**🎉 Fun**', value: "`c!help fun`", inline: true},
            {name: '**⚙️ Utilities**', value: "`c!help utilities`", inline: true},
        )
        .setFooter("Use `c!invite` to invite cloudz to your server")
        message.channel.send(newEmbed)
        }

        if(args[0] ==  "economy" || "e"){
            const newEmbedEconomy = new Discord.MessageEmbed()
            .setColor("#FFFFFF")
            .setTitle("💵 Economy")
            .setDescription("`c!balance [@username (optional)], c!beg, c!deposit, c!withdraw, c!diceroll, c!rob, c!give, c!coinflip, c!work, c!daily, c!vote, c!slots`")
            message.channel.send(newEmbedEconomy)
        }

        if(args[0] == "music" || "m"){
            const newEmbedMusic = new Discord.MessageEmbed()
            .setColor("#FFFFFF")
            .setTitle("🎶 Music")
            .setDescription("`c!play [song name/youtube url], c!skip, c!stop, c!join, c!leave`")
            message.channel.send(newEmbedMusic)
        }

        if(args[0] == "utilities" || "u"){
            const newEmbedMiscellaneous = new Discord.MessageEmbed()
            .setColor("#FFFFFF")
            .setTitle("⚙️ Utilities")
            .setDescription("`c!help, c!creator, c!server, c!ping, c!invite, c!suggestion`")
            message.channel.send(newEmbedMiscellaneous)
        }

        if(args[0] == "fun" || "f"){
            const newEmbedFun = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("🎉 Fun")
            .setDescription("`c!meme, c!8ball, c!say, c!joke, c!pun, c!roast, c!antijoke, c!quote, c!web, c!showerthoughts, c!devjoke`")
            message.channel.send(newEmbedFun)
          }
        
    }
}