module.exports = {
    name: 'suggestion',
    aliases: ['suggest', 'suggestions'],
    description: "creates a suggestion!",
    execute(message, args, cmd, client, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle("Help")
        .setDescription("c!suggestion [suggestion]")

        const channel = "813916514901295124"
        if(!channel) return message.channel.send("Suggestion channel does not exsit");
        if(!args[0]) return message.channel.send(newEmbed)

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        })
    }
}