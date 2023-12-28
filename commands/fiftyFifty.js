const soundNames = ['filthyInter.mp3', 'licherallyPog.mp3', 'suckCawk.mp3', 'thatWasInsane.mp3']
const { playSound } = require('./playSoundTemplate')

exports.fifty = async message => {
	var soundName = soundNames[Math.floor(Math.random() * soundNames.length)]
	playSound(message, './sounds/fiftyFifty/' + soundName, 1.5)
}
