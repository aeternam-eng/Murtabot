module.exports = {
    name: 'tts',
    description: 'Gambiarra do TTS',
    execute(message, args) {
        message.channel.send(`/tts ${args[0]}`);
    },
};