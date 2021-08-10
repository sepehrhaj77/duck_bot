const axios = require('axios')

const getJoke = async () => {
	try {
		const config = {
			headers: {
				Accept: 'text/plain',
			},
		}
		const res = await axios.get('https://icanhazdadjoke.com/', config)
		console.log(res)
		return res
	} catch (e) {
		console.log(e)
	}
}

exports.dadJoke = () => {
	getJoke()
}
