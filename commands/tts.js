module.exports = {
    name: 'kombi',
    description: 'Invoca esse garai',
    execute(message, args) {
        message.channel.send(`/tts ${args[0]}`);
    },
};