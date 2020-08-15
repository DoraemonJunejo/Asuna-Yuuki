const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "invite",
  description: "invite the bot in your server",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Do it just do it ")
  .setColor("RED")
  .setDescription(`<a:ss_Gucha:740937158310887455> [CLICK ME](${inviteURL}) OR **I will never talk to you again**`); //Looks Cool
    
    
    return message.channel.send(embed)
  
}
}