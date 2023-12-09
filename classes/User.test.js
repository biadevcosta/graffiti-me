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
        expect(user1.id).toEqual(1);
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

    describe('Should validate set methodes of the class User', () => {
        it('Should validate set name', () => {
            user1.name = 'Maria';
            expect(user1.name).toEqual('Maria');
        });

        it('Should validate set email', () => {
            user1.email = 'maria@gmail.com';
            expect(user1.email).toEqual('maria@gmail.com');
        });

        it('Should validate set password', () => {
            user1.password = 'S3nhafo@te3';
            expect(user1.password).toEqual('S3nhafo@te3')
        });

        it('Should validate set date of Birth', () => {
            user1.dateOfBirth = '23/09/1990';
            expect(user1.dateOfBirth).toEqual('23/09/1990');
        });

        it('Should validate set CPF', () => {
            user1.CPF = '48016588816';
            expect(user1.CPF).toEqual('48016588816');
        });

        it('Should validate set description', () => {
            user1.description = 'descrição atualizada';
            expect(user1.description).toEqual('descrição atualizada');
        });

        it('Should validate set adress', () => {
            user1.address = { postalCode: '06815234' };
            expect(user1.address).toEqual({ postalCode: '06815234' });
        });
    })

    describe('Validation of validation methods in the class', () => {
        it('Should not create user, because email is invalid', () => {
            expect(() => {
                new User(
                    'Nenê Surreal',
                    1,
                    'contato.nene',
                    'SenhaF@rte123',
                    '01/01/1980',
                    '51984064819',
                    'Sou artista há mais de dez anos.',
                    'graffiti',
                    '06815435'
                );
            }).toThrow(Error('Invalid email'));
        })

        it('Should not create an Artist, because CPF is invalid', () => {
            expect(() => {
                new User(
                    'Nenê Surreal',
                    1,
                    'contato.nene@gmail.com',
                    'SenhaF@rte123',
                    '01/01/1980',
                    '1098765432A',
                    'Sou artista há mais de dez anos.',
                    'graffiti',
                    '06815435'
                );
            }).toThrow(Error('Invalid CPF'));
        });

        it('Should not create user, because password is invalid', () => {
            expect(() => {
                new User(
                    'Nenê Surreal',
                    1,
                    'contato.nene@gmail.com',
                    'senhafraca',
                    '01/01/1980',
                    '51984064819',
                    'Sou artista há mais de dez anos.',
                    'graffiti',
                    '06815435'
                );
            }).toThrow(Error('The password must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&).'));
        });

        it('Should not set new email, because email is invalid', () => {
            expect(() => {
                user1.email = 'email'
            }).toThrow(Error('Invalid email'));
        });


        it('Should not set new CPF, because CPF is invalid', () => {
            expect(() => {
                user1.CPF = 'cpf'

            }).toThrow(Error('Invalid CPF'));
        });

        it('Should not set new password, because password is invalid', () => {
            expect(() => {
                user1.password = 'password'
            }).toThrow(Error('The password must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, one number, and one special character (@$!%*?&).'));
        });

    })


    afterEach(() => {
        User.allUsers = []
    });

});