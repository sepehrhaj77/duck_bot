const axios = require('axios')

exports.dadJoke = () => {
	const config = { headers: { Accept: 'application/json' } }
	console.log(
		axios
			.get('https://icanhazdadjoke.com/', config)
			.then((data) => {
				console.log(data.data.joke)
			})
			.catch((e) => console.log(e))
	)
}
