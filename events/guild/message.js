const profileModel = require('../../models/profileSchema');
const { findOneAndDelete } = require('../../models/profileSchema');
const cooldowns = new Map();

module.exports = async (Discord, client, message) => {

    const prefix = process.env.PREFIX;

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.substring(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    let profileData;
    try{
        profileData = await profileModel.findOne({ userID: message.author.id });
        if(!profileData){
                let profile = await profileModel.create({
                    userID: message.author.id,
                    serverID: message.guild.id,
                    coins: 100,
                    bank: 0
                });
                profile.save();
            }
        }catch(err){
        console.log(err);
    }
    
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

    try {
        command.execute(message, args, cmd, client, Discord, Pro);
    } catch (err) {
        console.log(err);
    }
}