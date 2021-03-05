module.exports = {
    name: 'suggestion',
    aliases: ['suggest', 'suggestions'],
    description: "creates a suggestion!",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle("Help")
        .setDescription("c!suggestion [suggestion]")

        const member = "384571447496146955"

        const sugchannel = member.guild.channels.cache.find("813916514901295124")
        if(!sugchannel) return message.channel.send("Suggestion channel does not exsit");
        if(!args[0]) return message.channel.send(newEmbed)

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setDescription(messageArgs);

        sugchannel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        })

        message.channel.send("Your suggestion has been sent")
    }
}