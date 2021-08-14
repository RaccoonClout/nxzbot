const {
    MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
    name: "unban",
    category: "Administration",
    aliases: ["unbab"],
    cooldown: 1,
    usage: "unban <ID>",
    description: "Unbans a user",
    run: async (client, message, args, user, text, prefix) => {
        try {
            const user_to_unban = args[0]
            if (!args[0])
                return message.channel.send(new MessageEmbed()
                    .setColor(ee.wrongcolor)
                    .setFooter(ee.footertext, ee.footericon)
                    .setTitle(`❌ ERROR | You did not specify somebody to unban!`)
                    .setDescription(`Usage: \`${prefix}unban <ID>\``)
                );
            message.channel.send(new MessageEmbed()
                .setColor(ee.color)
                .setFooter(ee.footertext, ee.footericon)
                .setTitle(`Unbanned ${user_to_unban}`)
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