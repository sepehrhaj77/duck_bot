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
	vb: 'vineboom',
	mc: 'msgcount',
	mtc: 'msgtypecount',
}

exports.nicknameGen = code => {
	if (code in nicknames) {
		return nicknames[code]
	} else {
		return code
	}
}

// ############################

// MESSAGE TYPE COUNTER LOGGING
var msgTypeCounts = {}

exports.incMsgTypeCount = msg => {
	// message type increment
	fs.readFile('msgTypeCounts.json', 'utf8', function (err, data) {
		var exists = false
		if (err) {
			console.log('File msgTypeCounts.json does not exist, creating...')
			msgTypeCounts[msg] = 1
			var json = JSON.stringify(msgTypeCounts)

			fs.writeFile('msgTypeCounts.json', json, 'utf8', err => {
				if (err) {
					console.log(err.message)
				}
			})
		} else {
			msgTypeCounts = JSON.parse(data)
			if (msg in msgTypeCounts) {
				exists = true
			}

			//if it exists, just increment the number
			if (exists) {
				let num = msgTypeCounts[msg]
				msgTypeCounts[msg] = ++num
			}
			//otherwise, create a new entry for them
			else {
				msgTypeCounts[msg] = 1
			}

			// write the modified JSON object back to the log file
			var json = JSON.stringify(msgTypeCounts)

			fs.writeFile('msgTypeCounts.json', json, 'utf8', err => {
				if (err) {
					console.log(err.message)
				}
			})
		}
	})
}

// MESSAGE COUNTER LOGGING
var msgCounts = {}

exports.incMsgUsrCount = username => {
	// user count increment
	fs.readFile('msgCounts.json', 'utf8', function (err, data) {
		var exists = false
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
