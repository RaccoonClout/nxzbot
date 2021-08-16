const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "yep",
    category: "Information",
    aliases: ["yepcock"],
    cooldown: 2,
    usage: "yep",
    description: ":YEP: cock",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send(new MessageEmbed()
            .setColor(ee.color)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(":YEP: COCK")
            .setDescription(":YEP: COCK")
            .setImage("https://cdn.discordapp.com/emojis/721116772434051092.png?v=1")
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
