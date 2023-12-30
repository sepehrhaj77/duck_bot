const { Client, GatewayIntentBits, Partials } = require('discord.js')

const { getRandomFact } = require('./commands/facts')
const { getRandomInsult } = require('./commands/insults')
const { commands } = require('./commands/commandList')
const { getRandomAdvice } = require('./commands/advice')
const { msgCount } = require('./commands/msgCount')
//const { OpusEncoder } = require('@discordjs/opus')
const { sion } = require('./commands/sion')
const { dadJoke } = require('./commands/dadJoke')
const { imBack } = require('./commands/imBack')
const { fifty } = require('./commands/fiftyFifty')
const { playSound } = require('./commands/playSoundTemplate')

const { nicknameGen, incMsgCount } = require('./utilities.js')

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
var lastSound = ''

// Set volume of each file
var soundVols = new Map()
soundVols.set('quack', 1)
soundVols.set('coming', 0.9)
soundVols.set('crickets', 0.5)
soundVols.set('faker', 0.9)
soundVols.set('gay', 0.7)
soundVols.set('hydration', 0.6)
soundVols.set('jeff', 1)
soundVols.set('kys', 0.5)
soundVols.set('mana', 0.1)
soundVols.set('nice', 2)
soundVols.set('ok', 2)
soundVols.set('ornn', 0.1)
soundVols.set('quadra', 2)
soundVols.set('wideputin', 0.3)
soundVols.set('thinputin', 0.3)
soundVols.set('everyone', 0.7)
soundVols.set('sadtrombone', 0.6)
soundVols.set('max', 0.3)

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!')
})

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
	//if the message doesn't begin with '!' or it is from a bot account, do not consider it as a possible command
	if (!message.content.startsWith(prefix) || message.author.bot) return

	//deal with riley
	/* if (message.author.username.toLowerCase().includes('rye')) {
		//message.channel.send('Rye' + getRandomInsult())
		totalMsgs++
		message.channel.send('' + totalMsgs)
	} */

	try {
		//store the users command as an array of strings in 'args'
		const args = message.content.slice(prefix.length).trim().split(/ +/)
		//take the first element to determine how to handle the command
		let command = args.shift().toLowerCase()

		command = nicknameGen(command)
		success = true

		//COMMANDS
		switch (command) {
			//help
			case 'help':
				message.channel.send(commands.join('\n'))
				break
			//server info
			case 'server':
				message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`)
				break
			//fact
			case 'fact':
				message.channel.send(getRandomFact())
				break
			//insult
			case 'insult':
				//figure out which user was mentioned
				const user = message.mentions.users.first()
				message.channel.send(user.username + getRandomInsult())
				break

			//lolAdvice
			case 'loladvice':
				message.channel.send(getRandomAdvice())
				break

			//dad joke
			case 'dadjoke':
				dadJoke().then(data => message.channel.send(data))
				break

			//message count
			case 'msgcount':
				let outputString = msgCount()

				if (outputString) message.channel.send(outputString)
				else message.channel.send('log file likely empty. no entries to display')

				break

			//sion ult
			case 'sion':
				success = await sion(message)
				break

			//im back baby
			case 'imback':
				success = await imBack(message)
				break
			//50/50 good/bad with my voice
			case 'fifty':
				success = await fifty(message)
				break
			//just play sound file
			default:
				success = await playSound(message, './sounds/' + command + '.mp3', soundVols.get(`${command}`))
				break
		}

		// if success, add to the user's log count
		if (success) {
			incMsgCount(message.author.username.toLowerCase())
		}
	} catch (err) {
		console.log(err.name)
		console.log(err.message)
		return
	}
})
