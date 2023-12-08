const Address = require ('./Address.js');

class User {
    #id;
    #name;
    #profile;
    #email;
    #password;
    #dateOfBirth;
    #CPF;
    #description;
    #address = {};
    #posts = [];
    static allUsers = [];

    constructor(name, profile, email, password, dateOfBirth, CPF, description, postalCode, streetAddress, city, neighborhood, state) {
        this.validateCPF(CPF);
        this.validateEmail(email);
        this.validateStrongPassword(password);
        this.#name = name;
        this.#profile = profile;
        this.#email = email;
        this.#password = password;
        this.#dateOfBirth = dateOfBirth;
        this.#CPF = CPF;
        this.#description = description;
        this.#id = User.allUsers.length + 1;

        const addressInstance = new Address(postalCode, streetAddress, city, neighborhood, state);

        this.#address = {
            postalCode: addressInstance.postalCode,
            streetAddress: addressInstance.streetAddress,
            city: addressInstance.city,
            neighborhood: addressInstance.neighborhood,
            state: addressInstance.state
        };

        User.allUsers.push({
            id: this.#id,
            name,
            profile,
            email,
            password,
            dateOfBirth,
            CPF,
            description,
            address: { ...this.#address }
        });
    }

    createPost(post){
        this.#posts.push({
            postId: this.#posts.length + 1,
            postTitle: post.postTitle,
            postDescription: post.postDescription,
            postDate: post.postDate,
            postImage: post.postImage,

        });
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
        return this.#address;
    }

    set address(address) {
        this.#address = address;
    }

    get posts() {
        return this.#posts;
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
