const User = require("./User.js");
const Post = require("./Post.js")

let user1;
let postUser1;

beforeEach(() => {
    user1 = new User('Ana Beatriz', 1, 'contato.anacosta@gmail.com', 'SenhaF@rte1', '05/10/2002', '51984064819', 'Artista graffiteira com 2 anos de experiência', '06815435');
    postUser1 = new Post(user1, 'Arte graffiti', 'Fiz essa arte em um evento de graffiti', '01/12/2023', 'www.pinterest.com.br/ana/arte');
});

describe('Should validate methods of the Post class', () => {

    it('Should get user post', () => {
        expect(postUser1.postTitle).toEqual('Arte graffiti');
        expect(postUser1.user).toEqual(user1);
        expect(postUser1.postDescription).toEqual('Fiz essa arte em um evento de graffiti');
        expect(postUser1.postDate).toEqual('01/12/2023');
        expect(postUser1.postImage).toEqual('www.pinterest.com.br/ana/arte');
    });

    it('Should set postTitle', () => {
        postUser1.postTitle = 'Titulo atualizado';
        expect(postUser1.postTitle).toEqual('Titulo atualizado');
    });

    it('Should set postDescription', () => {
        postUser1.postDescription = 'Description atualizada';
        expect(postUser1.postDescription).toEqual('Description atualizada');
    });

    it('Should set postDate', () => {
        postUser1.postDate = '04/12/2023';
        expect(postUser1.postDate).toEqual('04/12/2023');
    });

    it('Should set postImage', () => {
        postUser1.postImage = 'image.png';
        expect(postUser1.postImage).toEqual('image.png');
    });

    it('Should not create post, because user is invalid', () => {
        expect(() => {
            new Post('invalid user', 'Arte graffiti', 'Fiz essa arte em um evento de graffiti', '01/12/2023', 'www.pinterest.com.br/ana/arte');
        }).toThrow(Error('Invalid user. User parameter must be an instance of User class.'));
    });

});