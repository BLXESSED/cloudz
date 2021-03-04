const profileModel = require('../../models/profileSchema');
const { findOneAndDelete } = require('../../models/profileSchema');
const cooldowns = new Map();

module.exports = async (Discord, client, message) => {

    const prefix = process.env.PREFIX;

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.substring(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            return message.reply(`You can use .${command.name} in ${time_left.toFixed(1)} seconds`);
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount)

    const channel = member.guild.channels.cache.find(channel => channel.name === "🤖bot-commands");
    if(!channel) return client.channels.cache.get(message.channel.id).send(`${message.author.tag}, I could not find the #🤖bot-commands channel`)
    const channel2 = '799439732823294033';
    const testchannel = '808182511255027765';
    if (message.channel.id == channel) {
    try {
        command.execute(message, args, cmd, client, Discord, profileData);
    } catch (err) {
        console.log(err);
    }
    } else {
        if(message.channel.id == channel2) {
            try {
                command.execute(message, args, cmd, client, Discord, profileData);
            } catch (err) {
                console.log(err);
        }
    } else {
        if(message.channel.id == testchannel) {
            try {
                command.execute(message, args, cmd, client, Discord, profileData);
            } catch (err) {
                console.log(err);
            }
        } else {
            if(message.member.roles.cache.has('796623792200744963')) { 
                try {
                    command.execute(message, args, cmd, client, Discord, profileData);
                } catch (err) {
                    message.reply("Error404");
                    console.log(err);
                }
            } else {
        message.reply("you can't use that here. You can only use commands in #🤖bot-commands")
        }
    }
}
}
}