const Discord = require("discord.js");
const crono = new Discord.Client();
const marle = new Discord.Client();
const lucca = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.crono/marle/lucca.token contains the given bot's token
// config.crono/marle/lucca.prefix contains the message prefix. -- OVERRIDE THIS WITH @MENTIONS!!

// --

marle.on('ready', () => {
	// console.log(`Marle logged in as ${marle.user.tag}!`);
	console.log(`Marle fugiu do castelo, está tretando com ${marle.users.size} usuários, em ${marle.channels.size} canais de ${marle.guilds.size} servidores\\guilds.`);
	// Alterar Now Playing...
	marle.user.setGame('saving the World!');
});

marle.on('message', async message => {
	// It's good practice to ignore other bots. This also makes your bot ignore itself
	// and not get into a spam loop (we call that "botception").
	if(message.author.bot) return;
	
	// Also good practice to ignore any message that does not mention the bot.
	if (!message.isMentioned(marle.user)) return;
	
	// Here we separate our "command" name, and our "arguments" for the command. 
	// e.g. if we have the message "+say Is this the real life?" , we'll get the following:
	// command = say
	// args = ["Is", "this", "the", "real", "life?"]
	const prefix = `<@${marle.user.id}>`;
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	// Let's go with a few common example commands! Feel free to delete or change those.

	if(command === "ping") {
	// Calculates ping between sending a message and editing it, giving a nice round-trip latency.
	// The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
	const m = await message.channel.send("Ping?");
	m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(marle.ping)}ms`);
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
	if (msg.author != lucca.user && msg.isMentioned(lucca.user))
	{
		console.log(msg.content);
		msg.reply('Yes?');
	}
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
	marle.channels.get(msg.channel.id).send("Ele não responde...");
	lucca.channels.get(msg.channel.id).send("Só nós...!");
  }
});

crono.login(config.crono.token);