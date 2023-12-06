const axios = require('axios');

class Address {
    #streetAddress
    #city
    #neighborhood
    #state
    #postalCode

    constructor(postalCode){
        if (!this.isValidPostalCode(postalCode)) {
            throw new Error('Invalid postal code. Make sure the postal code has 8 digits.');
        }

        this.#postalCode = postalCode;
    }

    async createAddres(){
        const response = await axios.get(`https://viacep.com.br/ws/${this.#postalCode}/json/`);

        if(response.data.erro) {
            throw new Error('Error while obtaining address data');
        }

        if (response.data) {
            this.#city = response.data.localidade;
            this.#streetAddress = response.data.logradouro;
            this.#neighborhood = response.data.bairro;
            this.#state = response.data.uf;
        }
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