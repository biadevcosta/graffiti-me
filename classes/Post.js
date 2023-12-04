const validateInstance = require("../utils/validateInstance.js");
const User = require("./User.js");

class Post {
    #user;
    #postTitle;
    #postDescription;
    #postDate;
    #postImage;

    constructor(user, postTitle, postDescription, postDate,postImage) {
        validateInstance(user, User);
        this.#user = user;
        this.#postTitle = postTitle;
        this.#postDescription = postDescription;
        this.#postDate = postDate;
        this.#postImage = postImage;
    }

    get user() {
        return this.#user;
    }

    get postTitle() {
        return this.#postTitle;
    }

    set postTitle(newPostTitle) {
        this.#postTitle = newPostTitle;
    }

    get postDescription() {
        return this.#postDescription;
    }

    set postDescription(newPostDescription) {
        this.#postDescription = newPostDescription;
    }

    get postDate() {
        return this.#postDate;
    }

    set postDate(newPostDate) {
        this.#postDate = newPostDate
    }

    get postImage() {
        return this.#postImage;
    }

    set postImage(newPostImage) {
        this.#postImage = newPostImage
    }
}

module.exports = Post