const { Client, GatewayIntentBits, Partials } = require('discord.js')

const { getRandomFact } = require('./commands/facts')
const { getRandomInsult } = require('./commands/insults')
const { commands } = require('./commands/commandList')
const { getRandomAdvice } = require('./commands/advice')
const { OpusEncoder } = require('@discordjs/opus')
const { sion } = require('./commands/sion')
const { dadJoke } = require('./commands/dadJoke')
const { imBack } = require('./commands/imBack')
const { bruh } = require('./commands/bruh')
const { playSound } = require('./commands/playSoundTemplate')

const client = new Client({
	intents: [
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildBans,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildVoiceStates,
	],
	partials: [Partials.Channel],
})

var prefix = process.env.prefix
var lastSound = null

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!')
})

// Create the encoder.
// Specify 48kHz sampling rate and 2 channel size.
const encoder = new OpusEncoder(48000, 2)

// login to Discord with your app's token
if (process.env.TOKEN) {
	client.login(process.env.TOKEN)
} else {
	const { prefixLocal, TOKEN } = require('./config.json')
	client.login(TOKEN)
	prefix = prefixLocal
}

// whenever a message is sent
client.on('messageCreate', async message => {
	if (message.author.username.toLowerCase().includes('rye')) {
		message.channel.send("you're stupid. stop spamming me")
	}
	//if the message doesn't begin with '!' or it is from a bot account, do not consider it as a possible command
	if (!message.content.startsWith(prefix) || message.author.bot) return

	//store the users command as an array of strings in 'args'
	const args = message.content.slice(prefix.length).trim().split(/ +/)
	//take the first element to determine how to handle the command
	const command = args.shift().toLowerCase()

	//COMMANDS
	//help
	if (command === 'help') {
		message.channel.send('List of commands')
		message.channel.send(commands)
	}
	//server info
	else if (command === 'server') {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`)
	}
	//fact
	else if (command === 'fact') {
		message.channel.send(getRandomFact())
	}
	//insult
	else if (command === 'insult') {
		//figure out which user was mentioned
		const user = message.mentions.users.first()
		message.channel.send(user.username + getRandomInsult())
	}

	//lolAdvice
	else if (command === 'loladvice') {
		message.channel.send(getRandomAdvice())
	}

	//sion ult
	else if (command === 'sion') {
		sion(message)
	}

	//dad joke
	else if (command === 'dadjoke') {
		dadJoke().then(data => message.channel.send(data))
	}

	//im back baby
	else if (command === 'imback') {
		lastSound = await imBack(message, lastSound)
	}

	//just play sound file
	else {
		playSound(message, './sounds/' + command + '.mp3', 1)
	}
})
