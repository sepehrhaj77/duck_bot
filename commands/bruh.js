const { playSound } = require('./playSoundTemplate.js')

exports.bruh = async message => {
	playSound(message, './bruh.mp3', 0.5)
}
