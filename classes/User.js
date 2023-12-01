export class User {
    #id;
    #name;
    #profile;
    #email;
    #password;
    #dateOfBirth;
    #CPF;
    #description;
    #graffitiStyle;
    #address;

    static users = [];
    static userPosts = [];


    constructor(id, name, profile, email, password, dateOfBirth, CPF, postalCode, complement) {
        validateCPF(CPF);
        validateEmail(email);
        validateStrongPassword(password);
    }

    get id() {
        return this.#id;
    }
    
    set id(newId) {
        this.#id = newId;
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

    get graffitiStyle() {
        return this.#graffitiStyle;
    }

    set graffitiStyle(newGraffitiStyle) {
        this.#graffitiStyle = newGraffitiStyle;
    }    
}