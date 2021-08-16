const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "slap",
    category: "Cute",
    aliases: ["smack"],
    cooldown: 2,
    usage: "slap <USER>",
    description: "Slaps a user, ouch!",
    run: async (client, message, args, user, text, prefix) => {
    try{
      if(!args[0])
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | You didn't provide a user to slap... You can't slap yourself!`)
            .setDescription(`Usage: \`${prefix}slap <USER>\``)
        );

        slap_array = ["https://c.tenor.com/Ws6Dm1ZW_vMAAAAC/girl-slap.gif", "https://c.tenor.com/BYu41fLSstAAAAAC/when-you-cant-accept-reality-slap.gif", "https://c.tenor.com/E3OW-MYYum0AAAAC/no-angry.gif", "https://c.tenor.com/PeJyQRCSHHkAAAAS/saki-saki-mukai-naoya.gif", "https://c.tenor.com/Sp7yE5UzqFMAAAAS/spank-slap.gif"]

        title_array = ["Ouch!!", "*SMACK*", "That looks like it hurt..."]

        message.channel.send(`${message.author} slapped ${message.mentions.members.first()}!`)
        message.channel.send(new MessageEmbed()
            .setColor(ee.color)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(title_array[Math.floor(Math.random() * title_array.length)])
            .setImage(slap_array[Math.floor(Math.random() * slap_array.length)])
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
