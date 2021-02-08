module.exports = {
    name: 'eurico',
    description: 'Calango',
    execute(message, args) {
        const c = message.client.users.cache.get('247810715149271050');
        message.channel.send(`${c} Calango é o nome genérico que se dá a vários tipos de lagartos de pequeno porte. Normalmente, é um tipo de réptil que não passa dos 30 centímetros de comprimento.`);
    },
};