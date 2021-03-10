const profileModel = require('../models/profileSchema');
module.exports = {
    name: 'beg',
    cooldown: 30,
    description: "beg for coins",
    async execute(message, args, cmd, client, Discord, profileData){
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const response = await profileModel.findOneAndUpdate({
            userID: message.author.id
        }, {
            $inc: {
                coins: randomNumber,
            }
        });
        return message.reply(`you begged and received **${randomNumber} coins**`);
    }
}