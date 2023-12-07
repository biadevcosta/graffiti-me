const User = require ('./User.js')

class Artist extends User {
    #graffitiStyle;
    static allArtists = [];

    constructor(name, profile, email, password, dateOfBirth, CPF, description, postalCode,graffitiStyle){
        super(name, profile, email, password, dateOfBirth, CPF, description, postalCode);
        this.#graffitiStyle = graffitiStyle;
    }

    getAllArtists() {
        this.artists;
    }

    get graffitiStyle() {
        this.#graffitiStyle;
    }

    set graffitiStyle(newGraffitiStyle) {
        this.#graffitiStyle = newGraffitiStyle;
    }
}

module.exports = Artist