const fs = require('fs')

exports.msgTypeCount = function () {
	try {
		let output = 'Msg count of each command since 07/20/24: \n'
		var data = fs.readFileSync('msgTypeCounts.json', 'utf8')
		var msgTypeCounts = JSON.parse(data)

		// go through each entry and append the command and value to the output string
		for (var entry in msgTypeCounts) {
			output += entry
			output += ' - ' + msgTypeCounts[entry] + '\n'
		}

		return output
	} catch (e) {
		return e.message
	}
}
