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

    set streetAddress(newStreet) {
        this.#streetAddress = newStreet;
    }

    get city() {
        return this.#city;
    }

    set city(newCity) {
        this.#city = newCity;
    }

    get neighborhood() {
        return this.#neighborhood;
    }

    set neighborhood(newNeighborhood) {
        this.#neighborhood = newNeighborhood
    }

    get state() {
        return this.#state;
    }

    set state(newState) {
        this.#state = newState;
    }

    get postalCode() {
        return this.#postalCode;
    }

    set postalCode(newPostalCode) {
        this.#postalCode = newPostalCode;
    }
}

module.exports = Address