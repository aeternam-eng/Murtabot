module.exports = {
    name: 'eurico',
    description: 'Calango',
    execute(message, args) {
        const c = message.client.users.cache.get('247810715149271050');
        message.channel.send(`${c} O termo calango se refere a alguns lagartos, como os da família dos teídeos ou da família Tropiduridae, principalmente os de pequeno porte, Cnemidophorus, Tropidurus e outros que vivem geralmente no solo ou em pedreiras, alimentando-se de alguns artrópodes.`);
    },
};