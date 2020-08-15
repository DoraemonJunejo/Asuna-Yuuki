const { MessageEmbed } = require("discord.js")
const { readdirSync } = require("fs")
const { COLOR } = require("../config.json");
module.exports = {
  name: "help",
  description: "Get all commands name and description",
  execute (client, message, args) {
    
    
let embed = new MessageEmbed()
.setAuthor("HELP SECTION", client.user.displayAvatarURL())
.setThumbnail(client.user.displayAvatarURL())
.setColor(COLOR)
.setDescription(`<a:ss_hoihoi:721354613231714325>Hello my name is  ${client.user.username} and my work is to play music if you want to invite me  click the highlighted blue text, [CLICK HERE](https://discord.com/oauth2/authorize?client_id=727050520891621408&permissions=8&scope=bot).`)
let command = readdirSync("./commands")    

let i;
    for(i = 0; i < command.length; i++) {
      console.log(command[i])
      
      const cmd = client.commands.get(command[i].replace(".js", ""))
      embed.addField(` <a:ss_kiz:740911368374452234> **${cmd.name}**`, cmd.description, true)
      
    }
    
    message.channel.send(embed)
    
    

    
    
    
  }
}