const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.login("NDYwODU0NjE3OTU4NTE0Njkw.XKEBGw.MJhSC2ahhYZe1xQuTyw7UxW4ge0");

bot.on('ready', function() {
    bot.user.setActivity("Command: *help");
    console.log("Started");
});

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help \n -*createur");
    }

    if (message.content === prefix + "createur"){
        message.channel.send("Création du bot par GaetanJeff");
        console.log("Commande createur Effectué");
    }
});
