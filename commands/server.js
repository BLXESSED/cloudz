module.exports = {
    name: 'server',
    description: "gives you an invite code to the server",
    execute(message, args, cmd, client, Discord){

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle("Click me to join!")
        .setURL('https://discord.gg/WuKeMFyhaB')
        .setDescription("Please use the link above to join out official discord server!")

        message.channel.send("newEmbed")
    }
}