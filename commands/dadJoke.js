let dadJoke = require('give-me-a-joke')

exports.dadJoke = () => {
	console.log('Starting dadjoke()...')
	dadJoke.getRandomDadJoke(function (joke) {
		console.log('calling joke()...')
		console.log(joke())
		return joke()
	})
}
