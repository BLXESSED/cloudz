module.exports = {
    name: 'say',
    description: "make the bot say something",
    execute(message, args, cmd, client, Discord, profileData){

        const newEmbed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Help")
        .setDescription(`c!say [anything]`)

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor("#FF0000")
        .setTitle("🎉 Fun")
        .setDescription("You can not send more than 100 words")

        if(!args[0]) return message.channel.send(newEmbed1)
        if(args[100]) return message.channel.send(newEmbed2)

        let messageArgs = args.join(' ');

        message.channel.send(`${messageArgs}\n\n**${message.author.tag}**`)
    }
}