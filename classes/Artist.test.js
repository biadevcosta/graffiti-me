const Artist = require('./Artist.js');

let artist1

beforeEach(() => {
    artist1 = new Artist('Nenê Surreal',
        2,
        'contato.nene@gmail.com',
        'SenhaF@rte123',
        '01/01/1980',
        '51984064819',
        'Sou artista há mais de dez anos.',
        '06815435');
});

describe('Should validate all methods from class Artist.', () => {

    it('Should validate an Artist profile creation.', () => {
        expect(artist1.name).toEqual('Nenê Surreal');
        expect(artist1.profile).toEqual(2);
        expect(artist1.email).toEqual('contato.nene@gmail.com');
        expect(artist1.password).toEqual('SenhaF@rte123');
        expect(artist1.dateOfBirth).toEqual('01/01/1980');
        expect(artist1.CPF).toEqual('51984064819');
        expect(artist1.description).toEqual('Sou artista há mais de dez anos.');
        // expect(artist1.postalCode).toEqual('06815435');
        // console.log(advertiser1.address)
        // expect(advertiser1.address.postalCode).toEqual('06815435');
    });

    it('Should not create an Artist, because CPF is invalid', () => {
        expect(() => {
            new Artist('Nenê Surreal',
                2,
                'contato.nene@gmail.com',
                'SenhaF@rte123',
                '01/01/1980',
                '1098765432A',
                'Sou artista há mais de dez anos.',
                '06815435');
        }).toThrow(Error('Invalid CPF'));
    });
});