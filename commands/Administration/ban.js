const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "ban",
    category: "Administration",
    aliases: ["bab", "1"],
    cooldown: 1,
    usage: "ban <USER> <REASON>",
    description: "Bans a user",
    run: async (client, message, args, user, text, prefix) => {
      try{
        if(!args[0])
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | You did not specify somebody to ban!`)
            .setDescription(`Usage: \`${prefix}ban <USER> <REASON>\``)
        );
      const guild_member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
      const reason = args[1]
      guild_member.ban()
      if(!args[1])
      return message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setFooter(ee.footertext, ee.footericon)
        .setTitle(`Banned ${guild_member}`)
        .setDescription('Reason: No reason')
      );
      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setFooter(ee.footertext, ee.footericon)
        .setTitle(`Banned ${guild_member}`)
        .setDescription(`Reason: ${reason}`)
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
