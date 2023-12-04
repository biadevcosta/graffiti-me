const User = require ("./User.js");
const  Post = require("./Post.js")

let user1;
let postUser1;

beforeEach(() => {
    user1 = new User('Ana Beatriz',1,'contato.anacosta@gmail.com', 'SenhaF@rte1', '05/10/2002', '51984064819', 'Artista graffiteira com 2 anos de experiência', '06815435');
    postUser1 = new Post(user1, 'Arte graffiti', 'Fiz essa arte em um evento de graffiti', '01/12/2023', 'www.pinterest.com.br/ana/arte');
})

describe('Should validate methodes of the Post class', () => {

    it('Should get user post', () => {
        expect(postUser1.postTitle).toEqual('Arte graffiti');
        expect(postUser1.user).toEqual(user1);
        expect(postUser1.postDescription).toEqual('Fiz essa arte em um evento de graffiti');
        expect(postUser1.postDate).toEqual('01/12/2023');
        expect(postUser1.postImage).toEqual('www.pinterest.com.br/ana/arte');
    })

})