const axios = require('axios')

exports.dadJoke = async () => {
	try {
		const config = { headers: { Accept: 'application/json' } }
		const res = await axios.get('https://icanhazdadjoke.com/', config)
		return res.data.joke
	} catch (e) {
		console.log('error: ', e)
		return 'no jokes. sorry'
	}
}
