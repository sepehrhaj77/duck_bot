const fs = require('fs')

exports.msgCount = function () {
	try {
		let output = ''
		var data = fs.readFileSync('msgCounts.json', 'utf8')
		var msgCounts = JSON.parse(data)

		// go through each entry and append the name and value to the output string
		for (var entry in msgCounts) {
			output += entry
			output += ' - ' + msgCounts[entry] + '\n'
		}

		return output
	} catch (e) {
		return e.message
	}
}
