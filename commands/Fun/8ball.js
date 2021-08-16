const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const eightBallArray = ["It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes","Don't count on it", "My reply is no","My sources say no", "Outlook not so good","Very doubtful", "Reply hazy, try again", "Ask again later", "Better not tell you now","Cannot predict now", "Concentrate and ask again"]

module.exports = {
    name: "8ball",
    category: "Fun",
    aliases: ["eightball"],
    cooldown: 2,
    usage: "8ball <QUESTION>",
    description: "Totally accurate dick size measurment tool",
    run: async (client, message, args, user, text, prefix) => {
    try{
        if(!args[0])
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | Please ask the 8ball a question!`)
            .setDescription(`Usage: \`${prefix}8ball <QUESTION>\``)
        );
        message.channel.send(`${message.author} asked: ${text}`)
        message.channel.send(new MessageEmbed()
            .setColor(ee.color)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`🎱 | Magic 8ball`)
            .setDescription(`${eightBallArray[Math.floor(Math.random() * eightBallArray.length)]}`)
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
