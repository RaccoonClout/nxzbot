const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "kick",
    category: "Administration",
    aliases: ["kick"],
    cooldown: 1,
    usage: "kick <USER>",
    description: "Kicks a user",
    run: async (client, message, args, user, text, prefix) => {
      try{
        if(!args[0])
        return console.log(`Kick command failed: Did not specify a user to kick.`), message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | You did not specify somebody to kick!`)
            .setDescription(`Usage: \`${prefix}kick <USER>\``)
        );
      const guild_member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
      guild_member.kick()
      console.log(`Kicked ${guild_member}`)
      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setFooter(ee.footertext, ee.footericon)
        .setTitle(`Kicked ${guild_member}`)
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
