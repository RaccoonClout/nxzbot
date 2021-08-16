const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "chonk",
    category: "Cute",
    aliases: ["cate"],
    cooldown: 2,
    usage: "chonk",
    description: "oh lawd he comin",
    run: async (client, message, args, user, text, prefix) => {
    try{
        message.channel.send(new MessageEmbed()
            .setColor(ee.color)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle("OHHHHH LAWWWDDDDD HE COMMINNNNNN")
            .setDescription("mr chonk is on his way")
            .setImage("https://cdn.discordapp.com/attachments/585905156080664586/876861004137508884/2818fa7226bb6abf48697852e7b585ce.jpg")
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
