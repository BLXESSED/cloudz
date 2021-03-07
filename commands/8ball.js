module.exports = {
    name: '8ball',
    description: "Question the 8Ball Oracle",
    async execute(message, args, cmd, client, Discord){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#1E90FF')
        .setTitle("Help")
        .setDescription("`!8ball [question]`")
        if(!args[0]) return message.channel.send(helpEmbed)
        const randomNumber = Math.floor(Math.random() * 11) + 1;
        if(randomNumber == "1"){
            const newEmbed = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("🎉 Fun")
            .setDescription("Don't count on it")
        message.channel.send(newEmbed)
        return
        }
        if(randomNumber == "2"){
            const newEmbed = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("🎉 Fun")
            .setDescription("Concentrate and ask again")
        message.channel.send(newEmbed)
        return
        }
        if(randomNumber == "3"){
            const newEmbed = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("🎉 Fun")
            .setDescription("Most likely")
        message.channel.send(newEmbed)
        return
        }
        if(randomNumber == "4"){
            const newEmbed = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("🎉 Fun")
            .setDescription("Reply hazy, try again")
        message.channel.send(newEmbed)
        return
        }
        if(randomNumber == "5"){
            const newEmbed = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("🎉 Fun")
            .setDescription("My sources say no")
        message.channel.send(newEmbed)
        return
        }
        if(randomNumber == "6"){
            const newEmbed = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("🎉 Fun")
            .setDescription("Very doubtful")
        message.channel.send(newEmbed)
        return
        }
        if(randomNumber == "7"){
            const newEmbed = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("🎉 Fun")
            .setDescription("Outlook good")
        message.channel.send(newEmbed)
        return
        }
        if(randomNumber == "8"){
            const newEmbed = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("🎉 Fun")
            .setDescription("Outlook not so good")
        message.channel.send(newEmbed)
        return
        }
        if(randomNumber == "9"){
            const newEmbed = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("🎉 Fun")
            .setDescription("My reply is no")
        message.channel.send(newEmbed)
        return
        }
        if(randomNumber == "10"){
            const newEmbed = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("🎉 Fun")
            .setDescription("Signs point to yes")
        message.channel.send(newEmbed)
        return
        }
        if(randomNumber == "11"){
            const newEmbed = new Discord.MessageEmbed()
            .setColor("#1E90FF")
            .setTitle("🎉 Fun")
            .setDescription("Most likely")
        message.channel.send(newEmbed)
        return
        }
    }
}