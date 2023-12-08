const User = require ('./User.js')

class Artist extends User {
    #graffitiStyle;
    static allArtists = [];

    constructor(name, email, password, dateOfBirth, CPF, description, graffitiStyle, postalCode, streetAddress, city, neighborhood, state){
        super(name, 1, email, password, dateOfBirth, CPF, description, postalCode, streetAddress, city, neighborhood, state);
        this.#graffitiStyle = graffitiStyle;
        Artist.allArtists.push(this);
    }

    get graffitiStyle() {
        return this.#graffitiStyle;
    }

    set graffitiStyle(newGraffitiStyle) {
        this.#graffitiStyle = newGraffitiStyle;
    }
}

module.exports = Artist