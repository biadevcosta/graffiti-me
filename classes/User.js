export class User {
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
    static allUsers = [];

    constructor(id, name, profile, email, password, dateOfBirth, CPF, description, postalCode) {
        validateCPF(CPF);
        validateEmail(email);
        validateStrongPassword(password);
        this.#posts = [];
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
        if(validateEmail(newEmail)) {
            this.#email = newEmail;
        }
    }

    get password() {
        return this.#password;
    }
    
    set password(newPassword) {
        if(validateStrongPassword(newPassword)) {
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
        if(validateCPF(newCPF)){
            this.#CPF = newCPF;
        }
    }

    get description() {
        return this.#description;
    }

    set description(newDescription) {
        this.#description = newDescription;
    } 
}
