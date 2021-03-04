const profileModel = require('../../models/profileSchema');

module.exports = async(client, discord, member) =>{

const channel = member.guild.channels.cache.find(channel => channel.name === "assholes");

channel.send(`${member.tag} has left the server`)

let profile = await profileModel.findOneAndDelete({
    userID: member.id
});
}