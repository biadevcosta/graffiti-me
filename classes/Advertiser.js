const User = require('./User.js');

class Advertiser extends User {
    static allAdvertisers = [];

    constructor(name, profile, email, password, dateOfBirth, CPF, description, postalCode) {
        super(name, profile, email, password, dateOfBirth, CPF, description, postalCode);
    }

    getAllAdvertisers() {
        this.advertisers;
    }
}

const advertiser1 = new Advertiser('Talita Santos',
    2,
    'contato.talita@gmail.com',
    'SenhaF@rte123',
    '23/12/1996',
    '51984064819',
    'Busco artistas.',
    '06815435');

    console.log(advertiser1);
    console.log(advertiser1.name)

module.exports = Advertiser;
