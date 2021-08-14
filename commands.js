/*

*/


const Commando = require('discord.js-commando');
const path = require("path")
const client = new Commando.Client({
    owner: '208026791749746690'
});

const info = {
    name: "ping",
    group: "misc",
    memberName: "ping",
    description: "pings to the server"
}
const cmd = new Commando.Command(client, info);

client.registry.registerGroup("misc").registerCommand(cmd);
// Registers all built-in groups, commands, and argument types

client.login("")
