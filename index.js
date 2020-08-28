const Discord = require('discord.js');
const client = new Discord.Client();

const {getRandomFact} = require('./commands/facts');
const {getRandomInsult} = require('./commands/insults');
const {commands} = require('./commands/commandList');
const {getRandomAdvice} = require('./commands/advice');
const { OpusEncoder } = require('@discordjs/opus');
const { quack } = require('./commands/quack');
const prefix = process.env.prefix;


// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// Create the encoder.
// Specify 48kHz sampling rate and 2 channel size.
const encoder = new OpusEncoder(48000, 2);

// login to Discord with your app's token
client.login(process.env.TOKEN);

// whenever a message is sent
client.on('message', async message => {
    //if the message doesn't begin with '!' or it is from a bot account, do not consider it as a possible command
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    //store the users command as an array of strings in 'args'
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    //take the first element to determine how to handle the command
    const command = args.shift().toLowerCase();

    //COMMANDS
    //help 
    if (command === 'help'){
        message.channel.send('List of commands')
        message.channel.send(commands);
    }
    //server info 
    else if(command === 'server'){
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    } 
    //fact 
    else if (command === 'fact') {
        message.channel.send(getRandomFact());
    }
    //insult 
    else if (command === 'insult') {
        //figure out which user was mentioned
        const user = message.mentions.users.first();
        message.channel.send(user.username + getRandomInsult());
    } 
    //jeff
    else if (command === 'jeff'){
        //name jeff
        message.channel.send('name jeff');
    }   

    //lolAdvice
    else if (command === 'loladvice'){
        message.channel.send(getRandomAdvice());
    }
   
    //quack
    else if (command === 'quack'){
        quack(message);
    }

    
});