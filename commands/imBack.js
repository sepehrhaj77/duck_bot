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
const { playSound } = require('./playSoundTemplate')

var lastSound = ''

exports.imBack = async message => {
	var success
	var soundName = soundNames[Math.floor(Math.random() * soundNames.length)]
	if ((lastSound = '')) {
		success = await playSound(message, './sounds/benderSounds/' + soundName, 1)
	} else {
		while (soundName == lastSound) {
			soundName = soundNames[Math.floor(Math.random() * soundNames.length)]
		}
		success = await playSound(message, './sounds/benderSounds/' + soundName, 1)
	}

	lastSound = soundName
	return success
}
