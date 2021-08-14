const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "addrole",
    category: "Administration",
    aliases: [""],
    cooldown: 1,
    usage: "addrole <USER> <ROLE>",
    description: "Adds a role to a user",
    run: async (client, message, args, user, text, prefix) => {
      try{
        if(!args[0])
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | You did not specify somebody to add a role to!`)
            .setDescription(`Usage: \`${prefix}addrole <USER> <ROLE>\``)
        );
        const role = args[1]
        const member = args[0]
        member.roles.add(role);
      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setFooter(ee.footertext, ee.footericon)
        .setTitle(`Added ${member} to the ${role} role`)
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
