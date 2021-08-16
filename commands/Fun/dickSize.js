const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const dickSizeArray = ["8=D", "8==D", "8===D", "8====D", "8=====D", "8=====D", "8======D", "8=======D", "8==================D"]

module.exports = {
    name: "dicksize",
    category: "Fun",
    aliases: ["cocksize"],
    cooldown: 2,
    usage: "dicksize <USER>",
    description: "Totally accurate dick size measurment tool",
    run: async (client, message, args, user, text, prefix) => {
    try{
      if(!args[0])
        return message.channel.send(`${message.author}'s dick size`) ,message.channel.send(new MessageEmbed()
            .setColor(ee.color)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`Totally accurate dick size measurment tool`)
            .setDescription(dickSizeArray[Math.floor(Math.random() * dickSizeArray.length)])
        );
        message.channel.send(`${message.author} measured ${message.mentions.members.first()}'s dick!`), message.channel.send(new MessageEmbed()
            .setColor(ee.color)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`Totally accurate dick size measurment tool`)
            .setDescription(dickSizeArray[Math.floor(Math.random() * dickSizeArray.length)])
        );
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}

/** Template by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template */
