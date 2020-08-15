const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../config.json");

module.exports = {
  name: "pause",
  description: "Pause the current playing Song",
  execute (client, message, args) {
  const { channel } = message.member.voice;
   let embed = new MessageEmbed()
.setColor(COLOR);

    
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("Error")
      embed.setDescription ("<a:ss_KhelneDe:740938516288110643>YOU NEED TO BE IN VOICE CHANNEL ")
      return message.channel.send(embed);
    }
    
    
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Error")
      embed.setDescription ("<a:ss_KhelneDe:740938516288110643> There is nothing playing that i could pause")
      return message.channel.send(embed);
    }
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      embed.setDescription("<a:ss_Dhun:740907768747393034>| Paused The Current Playing Song")
      embed.setThumbnail(client.user.displayAvatarURL())
      return message.channel.send(embed)
  }  
  }
}