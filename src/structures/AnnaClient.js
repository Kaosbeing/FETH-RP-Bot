const { AkairoClient, CommandHandler } = require('discord-akairo');

module.exports = class AnnaClient extends AkairoClient {
    constructor(config = {}) {
        super(
            { ownerID: '375993904446701568' },
            {
                allowedMentions: {
                    parse: ['everyone', 'roles', 'users'],
                    repliedUser: false
                },
                partials: ['CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION', 'USER'],
                presence: {
                    status: 'online',
                    activities: [
                        {
                            name: 'TOUT SUPPRIMER LOL AHAHAHAHAHAHH',
                            type: 'PLAYING',
                            url: 'https://github.com/Kaosbeing/FETHRP'
                        }
                    ]
                },
                intents: 32767
            }
        );

        this.commandHandler = new CommandHandler(this, {
            allowMention: true,
            prefix: config.prefix,
            defaultCooldown: 500,
            directory: './src/commands/'
        });

        this.commandHandler.loadAll();
    }
}