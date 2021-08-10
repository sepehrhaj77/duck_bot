const axios = require('axios')

const getJoke = async () => {
	try {
		const config = { headers: { Accept: 'application/json' } }
		const res = await axios.get('https://icanhazdadjoke.com/', config)
		console.log(res.data.joke)
	} catch (e) {
		console.log(e)
	}
}

exports.dadJoke = () => {
	getJoke()
}
