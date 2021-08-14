const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "kiss",
    category: "Cute",
    aliases: ["smooch"],
    cooldown: 2,
    usage: "kiss <USER>",
    description: "Kisses a user, cute!",
    run: async (client, message, args, user, text, prefix) => {
    try{
      if(!args[0])
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | You didn't provide a user to kiss... You can't smooch yourself!`)
            .setDescription(`Usage: \`${prefix}kiss <USER>\``)
        );

        kiss_array = ["https://c.tenor.com/hK8IUmweJWAAAAAC/kiss-me-люблю.gif", "https://c.tenor.com/_ttVgUDKJL0AAAAS/anime-couple.gif", "https://c.tenor.com/dp6A2wF5EKYAAAAC/anime-love.gif", "https://c.tenor.com/16MBIsjDDYcAAAAC/love-cheek.gif", "https://c.tenor.com/RoPwXL4U5UAAAAAS/sakura-trick-yuu.gif", "https://c.tenor.com/TWbZjCy8iN4AAAAC/girl-anime.gif"]

        title_array = ["Awhhh! Cute!!!", "So sweet!! <3", "Adorable >w<"]

        message.channel.send(`${message.author} kissed ${message.mentions.members.first()}!`)
        message.channel.send(new MessageEmbed()
            .setColor(ee.color)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(title_array[Math.floor(Math.random() * title_array.length)])
            .setImage(kiss_array[Math.floor(Math.random() * kiss_array.length)])
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
