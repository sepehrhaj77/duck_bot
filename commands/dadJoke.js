const axios = require('axios')

exports.dadJoke = async () => {
	try {
		const config = { headers: { Accept: 'application/json' } }
		const res = await axios.get('https://icanhazdadjoke.com/', config)
		console.log('response object: ', res)
		console.log('response.data: ', res.data)
		console.log('response.data.joke: ', res.data.joke)
		return res.data.joke
	} catch (e) {
		return 'no jokes. sorry'
	}
}
