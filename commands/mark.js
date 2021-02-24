module.exports = {
    name: 'mark',
    description: 'Esférico',
    execute(message, args) {
        message.channel.send('Hora da Missa, Esféricos', { files: ['https://imgur.com/a/g6EvDPl.jpg'] });
    },
};