const Discord = require("discord.js");
const crono = new Discord.Client();
const marle = new Discord.Client();
const lucca = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.crono/marle/lucca.token contains the given bot's token
// config.crono/marle/lucca.prefix contains the message prefix.

// --

marle.on('ready', () => {
  // console.log(`Marle logged in as ${marle.user.tag}!`);
  console.log(`Marle fugiu do castelo, está tretando com ${marle.users.size} usuários, em ${marle.channels.size} canais de ${marle.guilds.size} servidores\\guilds.`);
  // Alterar Now Playing...
  marle.user.setGame('saving the World!');
});

marle.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

marle.login(config.marle.token);

// --

lucca.on('ready', () => {
  // console.log(`Marle logged in as ${lucca.user.tag}!`);
  console.log(`Lucca foi à feira do milênio, está tretando com ${lucca.users.size} usuários, em ${lucca.channels.size} canais de ${lucca.guilds.size} servidores\\guilds.`);
  // Alterar Now Playing...
  lucca.user.setGame('saving the World!');
});

lucca.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

lucca.login(config.lucca.token);

// --

crono.on('ready', () => {
  // console.log(`Crono logged in as ${crono.user.tag}!`);
  console.log(`Crono acordou, está tretando com ${crono.users.size} usuários, em ${crono.channels.size} canais de ${crono.guilds.size} servidores\\guilds.`);
  // Alterar Now Playing...
  crono.user.setGame('saving the World!');
});

crono.on('message', msg => {
  if (msg.content === 'hei Crono') {
    //msg.reply('Pong!');
	marle.sendMessage(msg.channel, "Ele não responde...");
	lucca.sendMessage(msg.channel, "Só nós!");
  }
});

crono.login(config.crono.token);