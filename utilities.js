const fs = require('fs')

// ############################
// NICKNAME GENERATION
// allow alternate ways to type commands
var nicknames = {
	cmg: 'coming',
	crk: 'crickets',
	fkr: 'faker',
	hyd: 'hydration',
	jef: 'jeff',
	quad: 'quadra',
	wide: 'wideputin',
	thin: 'thinputin',
	ev1: 'everyone',
	stb: 'sadtrombone',
	qak: 'quack',
	vnic: 'borat',
	brt: 'borat',
	bak: 'imback',
	dc: 'dontcare',
	grag: 'gragas',
}

exports.nicknameGen = code => {
	if (code in nicknames) {
		return nicknames[code]
	} else {
		return code
	}
}

// ############################
// MESSAGE COUNTER LOGGING
var msgCounts = {}

exports.incMsgCount = username => {
	var exists = false

	// read file in and check whether the user already exists
	fs.readFile('msgCounts.json', 'utf8', function (err, data) {
		if (err) {
			console.log('File msgCounts.json does not exist, creating...')
			msgCounts[username] = 1
			var json = JSON.stringify(msgCounts)

			fs.writeFile('msgCounts.json', json, 'utf8', err => {
				if (err) {
					console.log(err.message)
				}
			})
		} else {
			msgCounts = JSON.parse(data)
			if (username in msgCounts) {
				exists = true
			}

			//if they exist, just increment their number
			if (exists) {
				let numMsg = msgCounts[username]
				msgCounts[username] = ++numMsg
			}
			//otherwise, create a new entry for them
			else {
				msgCounts[username] = 1
			}

			// write the modified JSON object back to the log file
			var json = JSON.stringify(msgCounts)

			fs.writeFile('msgCounts.json', json, 'utf8', err => {
				if (err) {
					console.log(err.message)
				}
			})
		}
	})
}
