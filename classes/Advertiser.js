const User = require('./User.js');

class Advertiser extends User {
    static allAdvertisers = [];

    constructor(name, email, password, dateOfBirth, CPF, description, postalCode, streetAddress, city, neighborhood, state ) {
        super(name, 2, email, password, dateOfBirth, CPF, description, postalCode, streetAddress, city, neighborhood, state);
        Advertiser.allAdvertisers.push(this);
    }
}

module.exports = Advertiser;
