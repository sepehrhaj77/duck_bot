var num = Math.floor(Math.random() * 12)

const insults = [
	' is gay💅',
	` needs to buy more control wards🔱, ${num} vision score lookin headass`,
	' has a micropenis🤏🍆',
	' thinks McDonalds®™ is fine dining🍽',
	' frontlines badger🦡 with a kangaroo🦘 behind',
	' puts melon armor🍈 on their scorpion🦂',
	', you are so ugly that when your mom dropped you off at school🏫, she got a ticket for littering🚮',
	", you've only got 2 brain🧠cells and they are both fighting for 3rd place🥉",
	' is about as useful as an ashtray🚬 on a motorcycle🛵',
	', you’re the reason the gene🧬pool🏊‍♂️ needs a lifeguard',
	", you're as useless as the 'ueue' in queue🗿",
]

exports.getRandomInsult = () => {
	return insults[Math.floor(Math.random() * insults.length)]
}
