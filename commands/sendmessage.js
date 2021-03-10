module.exports = {
    name: 'sendmessage',
    description: "Send a message to a user",
    execute(message, args, cmd, client, Discord, profileData){
        if(message.member.roles.cache.has('796623792200744963')){

        client.users.cache.get(args[0]).send("Please do not use the suggestion command for inappropriate uses. If this persists you'll be banned from using our bot.");

        message.channel.send("sent")
        }
    }
}