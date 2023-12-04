const Address = require ('./Address.js')
const uuid = require('uuid');

class User {
    #id;
    #name;
    #profile;
    #email;
    #password;
    #dateOfBirth;
    #CPF;
    #description;
    #address;
    #posts;
    static allPosts = [];
    static allUsers = [];

    constructor(name, profile, email, password, dateOfBirth, CPF, description, postalCode) {
        this.validateCPF(CPF);
        this.validateEmail(email);
        this.validateStrongPassword(password);
        this.#id = uuid.v4();
        this.#address = new Address(postalCode);
        this.#posts = [];
        User.allUsers.push({ id: this.#id, name, profile, email, password, dateOfBirth, CPF, description });
    }

    get id() {
        return this.#id;
    }
    
    get name() {
        return this.#name;
    }
    
    set name(newName) {
        this.#name = newName;
    }

    get profile() {
        return this.#profile;
    }
    
    get email() {
        return this.#email;
    }
    
    set email(newEmail) {
        if(this.validateEmail(newEmail)) {
            this.#email = newEmail;
        }
    }

    get password() {
        return this.#password;
    }
    
    set password(newPassword) {
        if(this.validateStrongPassword(newPassword)) {
            this.#password = newPassword;
        }
    }

    get dateOfBirth() {
        return this.#dateOfBirth;
    }

    set dateOfBirth(newDateOfBirth) {
        this.#dateOfBirth = newDateOfBirth;
    }

    get CPF() {
        return this.#CPF;
    }

    set CPF(newCPF) {
        if(this.validateCPF(newCPF)){
            this.#CPF = newCPF;
        }
    }

    get description() {
        return this.#description;
    }

    set description(newDescription) {
        this.#description = newDescription;
    } 

    get address() {
        this.#address;
    }

    set address(postalCode) {
        this.#address = new Address(postalCode);
    }

    get posts() {
        this.#posts;
    }

    set posts(newPost) {
        this.#posts = newPost;
    }

    validateCPF(cpf){
        const regexCPF = /^\d{11}$/;
        const cpfWithoutPunctuation = cpf.replace(/[.-]/g, '');
        if(!regexCPF.test(cpfWithoutPunctuation)) {
            throw new Error('Invalid CPF');
        }

        return true;
    }


    validateEmail(email){
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regexEmail.test(email)) {
            throw new Error('Invalid email');
        }
    
        return true;
    }

    validateStrongPassword(password){
        const regexStrongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(!regexStrongPassword.test(password)) {
            throw new Error('The password must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&).');
        }
        
        return true;
    }
}

module.exports = User
