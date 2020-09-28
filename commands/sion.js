const soundNames = [
    'Sion.R1.mp3',
    'Sion.R2.mp3',
    'Sion.R3.mp3',
    'Sion.R4.mp3',
    'Sion.R5.mp3',
    'Sion.R6.mp3',
    'Sion.R7.mp3',
    'Sion.R8.mp3',
    'Sion.R9.mp3',
    'Sion.R10.mp3'
];

exports.sion = async message => {
    const channel = message.member.voice.channel;
    if(channel){
        const connection = await message.member.voice.channel.join();

        var soundName = soundNames[Math.floor(Math.random() * soundNames.length)];

        const dispatcher = connection.play(`./commands/sionSounds/${soundName}`);
        dispatcher.on('start', () => {
            dispatcher.setVolume(0.10);
            console.log('sion.mp3 is now playing!');
        });
        dispatcher.on('finish', () => {
            console.log('sion.mp3 has finished playing!');
            connection.disconnect();
        });
        // Always remember to handle errors appropriately!
        dispatcher.on('error', console.error);
        
    } 
    else{
        message.reply('You must be in a voice channel to use this command!')
    }
}