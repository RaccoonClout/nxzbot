const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "hug",
    category: "Cute",
    aliases: [""],
    cooldown: 2,
    usage: "hug <USER>",
    description: "Hugs a user, cute!",
    run: async (client, message, args, user, text, prefix) => {
    try{
      if(!args[0])
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | You didn't provide a user to hug... You can't hug yourself!`)
            .setDescription(`Usage: \`${prefix}hug <USER>\``)
        );

        hug_array = ["https://c.tenor.com/0vl21YIsGvgAAAAC/hug-anime.gif", "https://c.tenor.com/kP7ssdam30oAAAAC/love-hug.gif", "https://c.tenor.com/2bWwi8DhDsAAAAAC/hugs-and-love.gif", "https://c.tenor.com/epQeAT-abYgAAAAC/กอด.gif", "https://c.tenor.com/znURt9fG-KcAAAAC/anime-hug-anime-nekopara.gif", "https://c.tenor.com/nHkiUCkS04gAAAAC/anime-hug-hearts.gif"]

        title_array = ["Awhhh! Cute!!!", "So sweet!! <3", "Adorable >w<"]

        message.channel.send(`${message.author} hugged ${message.mentions.members.first()}!`)
        message.channel.send(new MessageEmbed()
            .setColor(ee.color)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(title_array[Math.floor(Math.random() * title_array.length)])
            .setImage(hug_array[Math.floor(Math.random() * hug_array.length)])
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
