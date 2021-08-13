const axios = require('axios')

exports.dadJoke = async () => {
	try {
		const config = {
			headers: {
				Accept: 'application/json',
				'User-Agent':
					'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
			},
		}
		const res = await axios.get('https://icanhazdadjoke.com/', config)
		console.log(res)
		return res.data.joke
	} catch (e) {
		console.log('error: ', e)
		return 'no jokes. sorry'
	}
}
