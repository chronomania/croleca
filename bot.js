const Discord = require("discord.js");
const crono = new Discord.Client();
const marle = new Discord.Client();
const lucca = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.crono/marle/lucca.token contains the given bot's token
// config.crono/marle/lucca.prefix contains the message prefix.

crono.on('ready', () => {
  console.log(`Crono logged in as ${client.user.tag}!`);
});

crono.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

crono.login(config.crono.token);

// --

marle.on('ready', () => {
  console.log(`Marle logged in as ${client.user.tag}!`);
});

marle.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

marle.login(config.marle.token);

// --

lucca.on('ready', () => {
  console.log(`Marle logged in as ${client.user.tag}!`);
});

lucca.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

lucca.login(config.lucca.token);