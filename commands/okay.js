exports.okay = async message => {
	const channel = message.member.voice.channel
	if (channel) {
		const connection = await message.member.voice.channel.join()
		const dispatcher = connection.play('./hi-okay.mp3')
		dispatcher.on('start', () => {
			dispatcher.setVolume(1.0)
		})
		dispatcher.on('finish', () => {
			connection.disconnect()
		})
		// Always remember to handle errors appropriately!
		dispatcher.on('error', console.error)
	} else {
		message.reply('You must be in a voice channel to use this command!')
	}
}
