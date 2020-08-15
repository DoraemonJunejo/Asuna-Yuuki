const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../config.json");

module.exports = {
  name: "np",
  description: "Get the name of current playing song",
  execute (client, message, args) {
    let embed = new MessageEmbed()
.setColor(COLOR)
      
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor(" Error")
      embed.setDescription ("<a:ss_Hunter:742982140672606300>YOU NEED TO BE IN VOICE CHANNEL ")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor(" Error")
      embed.setDescription ("<a:ss_Hunter:742982140672606300> Bot is not playing anything")
      return message.channel.send(embed);
    }
    
    embed.setDescription(`<a:ss_Dhun:740907768747393034>**NOW PLAYING** - ${serverQueue.songs[0].title}`)
    .setThumbnail(serverQueue.songs[0].thumbnail)
    message.channel.send(embed)

    
    
    
  }
}