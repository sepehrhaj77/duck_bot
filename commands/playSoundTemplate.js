const { joinVoiceChannel, createAudioPlayer, createAudioResource, entersState, StreamType, AudioPlayerStatus, VoiceConnectionStatus } = require('@discordjs/voice')
const fs = require('fs')

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
exports.playSound = async (message, fileName, volume = 1) => {
	const channel = message.member?.voice.channel
	if (channel) {
		try {
			const connection = await connectToChannel(message)
			const player = createAudioPlayer({})
			const resource = createAudioResource(fileName, { inlineVolume: true })
			resource.volume.setVolume(volume)
			player.play(resource)
			connection.subscribe(player)

			if (fs.existsSync(fileName)) {
				console.log(fileName)
				return 1
			} else {
				return 0
			}
		} catch (error) {
			console.error(error)
			return 0
		}
	} else {
		message.reply('You must be in a voice channel to use this command!')
		return 0
	}
}
