const profileModel = require('../../models/profileSchema');

module.exports = async(client, discord, member) =>{
    let profile = await profileModel.findOneAndDelete({
        userID: member.id
    });
}