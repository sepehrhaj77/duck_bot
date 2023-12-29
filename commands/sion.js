const soundNames = ['Sion_R1.mp3', 'Sion_R2.mp3', 'Sion_R3.mp3', 'Sion_R4.mp3', 'Sion_R5.mp3', 'Sion_R6.mp3', 'Sion_R7.mp3', 'Sion_R8.mp3', 'Sion_R9.mp3', 'Sion_R10.mp3']

const { playSound } = require('./playSoundTemplate')

exports.sion = async message => {
	var soundName = soundNames[Math.floor(Math.random() * soundNames.length)]
	return await playSound(message, './sounds/sionSounds/' + soundName, 0.1)
}
