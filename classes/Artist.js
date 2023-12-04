const User = require ('./User.js')

export class Artist extends User {
    #graffitiStyle;
    static allArtists = [];

    constructor(){}

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