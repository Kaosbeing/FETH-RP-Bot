const { Command } = require('discord-akairo');
const fs = require('fs');

const img = ('src/utils/unknown.png');

class TestCommand extends Command {
    constructor() {
        super('test', {
            aliases: ['test']
        });
    }



    exec(message) {
        let identity = this.client.utils.embed()
            .setTitle('IDENTITÉ')
            .addFields(
                {name:"Nom", value:"Anna Roussillon", inline:true},
                {name:"Sekse", value:"\\♀", inline:true},
                {name:"Naissance", value:"29/02 Canet-En-Roussillon"},
                {name:"Poids", value:"67 kg", inline:true},
                {name:"Taille", value:"178 cm", inline:true},
                {name:"Statut/Titre", value:"Petite Bourgeoisie"},
                {name:"Maison", value:"Maison 1 jsp", inline:true},
                {name:"Nationalité", value:"Française on va dire", inline:true},
                {name:"Occupation", value:"Tout supprimer AHAHAHAH LOL"}
            )
            .setTimestamp()
            .setFooter(message.author.username, message.author.avatarURL());


        return message.reply({ embeds: [identity], components: [] });
    }
}

module.exports = TestCommand;