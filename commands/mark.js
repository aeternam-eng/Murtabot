module.exports = {
    name: 'mark',
    description: 'Esférico',
    execute(message, args) {
        message.channel.send('Hora da Missa, Esféricos', { files: ['https://i.imgur.com/GHoq95X.png'] });
    },
};