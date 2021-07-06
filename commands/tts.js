module.exports = {
    name: 'tts',
    description: 'Gambiarra do TTS',
    execute(message, args) {
        message.channel.send(`Murtabot diz: ${args[0]}`, {
            tts: true,
        });
    },
};