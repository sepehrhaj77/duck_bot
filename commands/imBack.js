const soundNames = [
	'imBack1.mp3',
	'imBack2.mp3',
	'imBack3.mp3',
	'imBack4.mp3',
	'imBack5.mp3',
	'imBack6.mp3',
	'imBack7.mp3',
	'imBack8.mp3',
	'imBack9.mp3',
	'imBack10.mp3',
	'imBack11.mp3',
	'imBack12.mp3',
]

exports.imBack = async (message, lastSound) => {
	const channel = message.member.voice.channel
	if (channel) {
		const connection = await message.member.voice.channel.join()

		var soundName = soundNames[Math.floor(Math.random() * soundNames.length)]

		while (soundName == lastSound) {
			soundName = soundNames[Math.floor(Math.random() * soundNames.length)]
		}

		const dispatcher = connection.play(`./commands/benderSounds/${soundName}`)
		dispatcher.on('start', () => {
			dispatcher.setVolume(0.35)
		})
		dispatcher.on('finish', () => {
			connection.disconnect()
		})
		// Always remember to handle errors appropriately!
		dispatcher.on('error', console.error)

		return soundName
	} else {
		message.reply('You must be in a voice channel to use this command!')
	}
}
