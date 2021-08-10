const axios = require('axios')

const getJoke = async () => {
	try {
		const config = {
			headers: {
				Accept: 'application/json',
			},
		}
		const res = await axios.get('https://icanhazdadjoke.com/', config)
		if (!res) {
			throw 'no response'
		}
		return res.data.joke
	} catch (e) {
		console.log(e)
	}
}

exports.dadJoke = () => {
	getJoke()
}
