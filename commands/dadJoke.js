const fetch = require('node-fetch')

exports.dadJoke = (message) => {
	fetch('https://icanhazdadjoke.com/')
		.then((res) => res.json())
		.then((data) => message.channel.send(data))
}
