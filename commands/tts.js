module.exports = {
    name: 'tts',
    description: 'Gambiarra do TTS',
    execute(message, args) {
        message.channel.send(`${args.join(' ')}`, {
            tts: true,
        });
    },
};