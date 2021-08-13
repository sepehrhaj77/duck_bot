const dadJoke = require('give-me-a-joke')

exports.dadJoke = () => {
	dadJoke.getRandomDadJoke(function (joke) {
		return joke
	})
}
