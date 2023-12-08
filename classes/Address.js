class Address {
    #streetAddress
    #city
    #neighborhood
    #state
    #postalCode

    constructor(postalCode,streetAddress, city, neighborhood,state) {

        if (!this.isValidPostalCode(postalCode)) {
            throw new Error('Invalid postal code. Make sure the postal code has 8 digits.');
        }

        this.#streetAddress = streetAddress;
        this.#city = city;
        this.#neighborhood = neighborhood;
        this.#state = state;
        this.#postalCode = postalCode;
    }

    isValidPostalCode(postalCode) {
        const cepRegex = /^[0-9]{8}$/;
        return cepRegex.test(postalCode);
    }

    get streetAddress() {
        return this.#streetAddress;
    }

    get city() {
        return this.#city;
    }

    get neighborhood() {
        return this.#neighborhood;
    }

    get state() {
        return this.#state;
    }

    get postalCode() {
        return this.#postalCode;
    }
}

module.exports = Address