const Post = require("./Post.js");
const User = require("./User.js");

let user1;

beforeEach(() => {
    user1 = new User(
        'Ana Beatriz',
        1,
        'contato.anacosta@gmail.com',
        'SenhaF@rte1',
        '05/10/2002',
        '51984064819',
        'Artista graffiteira com 2 anos de experiência',
        '06815435',
        'Avenida Juruna',
        'Embu das Artes',
        'Parque Pirajussara',
        'SP'
    );

    user2 = new User(
        'Talu',
        2,
        'talu@gmail.com',
        'S3nhaF@rte2',
        '23/12/1996',
        '48016278913',
        'Tenho serviços para artistas',
        '06815150',
        'Avenida Paulista',
        'São Paulo'
    );
})

describe('Should validate all methods from class User.', () => {

    it('Should validate a User profile creation.', () => {
        expect(user1.name).toEqual('Ana Beatriz');
        expect(user1.profile).toEqual(1);
        expect(user1.email).toEqual('contato.anacosta@gmail.com');
        expect(user1.password).toEqual('SenhaF@rte1');
        expect(user1.dateOfBirth).toEqual('05/10/2002');
        expect(user1.CPF).toEqual('51984064819');
        expect(user1.description).toEqual('Artista graffiteira com 2 anos de experiência');
        expect(user1.address.postalCode).toEqual('06815435');
        expect(user1.address.streetAddress).toEqual('Avenida Juruna'),
        expect(user1.address.city).toEqual('Embu das Artes'),
        expect(user1.address.neighborhood).toEqual('Parque Pirajussara'),
        expect(user1.address.state).toEqual('SP')
    });

    it('Should validate the allUsers array from class User', () => {
        expect(User.allUsers).toEqual(
            [
                {
                    "CPF": "51984064819",
                    "address": {
                        "city": "Embu das Artes",
                        "neighborhood": "Parque Pirajussara",
                        "postalCode": "06815435",
                        "state": "SP",
                        "streetAddress": "Avenida Juruna"
                    },
                    "dateOfBirth": "05/10/2002",
                    "description": "Artista graffiteira com 2 anos de experiência",
                    "email": "contato.anacosta@gmail.com",
                    "id": 1,
                    "name": "Ana Beatriz",
                    "password": "SenhaF@rte1",
                    "profile": 1
                },
                {
                    "CPF": "48016278913",
                    "address": {
                        "city": "São Paulo",
                        "neighborhood": undefined,
                        "postalCode": "06815150",
                        "state": undefined,
                        "streetAddress": "Avenida Paulista"
                    },
                    "dateOfBirth": "23/12/1996",
                    "description": "Tenho serviços para artistas",
                    "email": "talu@gmail.com",
                    "id": 2,
                    "name": "Talu",
                    "password": "S3nhaF@rte2",
                    "profile": 2
                }
            ]
        )
    });

    it('should create post', () => {

        newUser = new User(
            'Ana Beatriz',
            1,
            'contato.anacosta@gmail.com',
            'SenhaF@rte1',
            '05/10/2002',
            '51984064819',
            'Artista graffiteira com 2 anos de experiência',
            '06815435',
            'Avenida Juruna',
            'Embu das Artes',
            'Parque Pirajussara',
            'SP'
        ); 

        const post = new Post(
            newUser,
            'Meu primeiro mural', 
            'terminei meu primeiro mural de graffiti na avenida Paulista',
            '07/12/2023', 
            'https://i.pinimg.com/originals/23/16/ea/2316ea9397c5b91ed388988c9aa588dc.jpg'
        )

        newUser.createPost(post)
        expect(newUser.posts[0]).toEqual(
            {
                "postDate": "07/12/2023", 
                "postDescription": "terminei meu primeiro mural de graffiti na avenida Paulista", 
                "postId": 1, 
                "postImage": "https://i.pinimg.com/originals/23/16/ea/2316ea9397c5b91ed388988c9aa588dc.jpg", 
                "postTitle": "Meu primeiro mural"
            }
        );
    })


    afterEach(() => {
        User.allUsers = []
    });

});