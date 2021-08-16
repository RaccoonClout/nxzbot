const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "josh",
    category: "Fun",
    aliases: [""],
    cooldown: 2,
    usage: "josh",
    description: "he likes wolf",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send(new MessageEmbed()
            .setColor(ee.color)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle("Hi guys my name is Joshua, welcome to my ted talk.")
            .setDescription("balls in yo jaws")
            .setImage("https://cdn.discordapp.com/emojis/708475779192717312.png?v=1")
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
