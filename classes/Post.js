const User = require("./User.js");

class Post {
    #user;
    #postTitle;
    #postDescription;
    #postDate;
    #postImage;
    static allPosts = [];

    constructor(user, postTitle, postDescription, postDate, postImage) {
        if (!(user instanceof User)) {
            throw new Error('Invalid user. User parameter must be an instance of User class.');
        }
        this.#user = user;
        this.#postTitle = postTitle;
        this.#postDescription = postDescription;
        this.#postDate = postDate;
        this.#postImage = postImage;
        Post.allPosts.push(this);
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