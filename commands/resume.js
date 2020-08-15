const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../config.json");


module.exports = {
  name: "resume", 
  description: "Resume the current Playing Song",
  execute (client, message, args) {
    let embed = new MessageEmbed()
.setColor(COLOR);

      const { channel } = message.member.voice;
      
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor(" Error ")
      embed.setDescription ("<a:ss_Dhun:740907768747393034>YOU NEED TO BE IN VOICE CHANNEL")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume()
  embed.setAuthor("Task done ")
  embed.setDescription ("a:ss_tickneon:722351722961305610>| Resumed the Paused Song")
   embed.setThumbnail(client.user.displayAvatarURL())
  return message.channel.send(embed)
 }
    embed.setDescription("<a:ss_KhelneDe:740938516288110643>There is nothing paused that i can resume")
    message.channel.send(embed)
    
  }
}