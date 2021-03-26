module.exports = {
    name: 'instagram',
    description: 'Me sugue',
    execute(message, args) {
        const c = message.client.users.cache.get('689210077860593778');
        message.channel.send(`${c} Me sugue la no instagran flaviaa_s2`);
    },
};