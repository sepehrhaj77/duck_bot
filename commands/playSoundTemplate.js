const { joinVoiceChannel, createAudioPlayer, createAudioResource, entersState, StreamType, AudioPlayerStatus, VoiceConnectionStatus } = require('@discordjs/voice')

async function connectToChannel(message) {
	const connection = joinVoiceChannel({
		channelId: message.member.voice.channelId,
		guildId: message.guild.id,
		adapterCreator: message.guild.voiceAdapterCreator,
	})

	try {
		await entersState(connection, VoiceConnectionStatus.Ready, 5e3)
		return connection
	} catch (error) {
		connection.destroy()
		throw error
	}
}
exports.playSound = async (message, fileName, volume) => {
	const channel = message.member?.voice.channel
	if (channel) {
		try {
			const connection = await connectToChannel(message)
			const player = createAudioPlayer({})
			const resource = createAudioResource(fileName)
			player.play(resource)
			connection.subscribe(player)
		} catch (error) {
			console.error(error)
		}
	} else {
		message.reply('You must be in a voice channel to use this command!')
	}
}
