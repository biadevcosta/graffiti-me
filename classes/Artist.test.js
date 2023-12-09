const Artist = require('./Artist.js');

let artist1

beforeEach(() => {
    artist1 = new Artist (
        'Nenê Surreal',
        'contato.nene@gmail.com',
        'SenhaF@rte123',
        '01/01/1980',
        '51984064819',
        'Sou artista há mais de dez anos.',
        'graffiti',
        '06815435',
        'Avenida Ipiranga'
    );

    artist2 = new Artist (
        'Molão',
        'contato.molao@gmail.com',
        'SenhaF@rte123',
        '01/01/1970',
        '48016523416',
        'Artista independente com anos de carreira',
        'graffiti geral',
        '06815150',
        'Avenida Aimará'
    );

});

describe('Should validate all methods from class Artist.', () => {

    it('Should validate an Artist profile creation.', () => {
        expect(artist1.name).toEqual('Nenê Surreal');
        expect(artist1.profile).toEqual(1);
        expect(artist1.email).toEqual('contato.nene@gmail.com');
        expect(artist1.password).toEqual('SenhaF@rte123');
        expect(artist1.dateOfBirth).toEqual('01/01/1980');
        expect(artist1.CPF).toEqual('51984064819');
        expect(artist1.description).toEqual('Sou artista há mais de dez anos.');
        expect(artist1.graffitiStyle).toEqual('graffiti');
        expect(artist1.address.postalCode).toEqual('06815435');
        expect(artist1.address.streetAddress).toEqual('Avenida Ipiranga')
    });

    it('Should not create an Artist, because CPF is invalid', () => {
        expect(() => {
            new Artist(
                'Nenê Surreal',
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

    it('Should validate set graffitiStyle method', () => {
        artist1.graffitiStyle = 'graffiti atualizado';
        expect(artist1.graffitiStyle).toEqual('graffiti atualizado');
    });

    it('Should validate allArtists array from class Artist', () => {
        expect(Artist.allArtists).toHaveLength(2);
        expect(Artist.allArtists[0].name).toEqual('Nenê Surreal');
        expect(Artist.allArtists[1].name).toEqual('Molão');
        expect(Artist.allArtists[0].description).toEqual('Sou artista há mais de dez anos.');
        expect(Artist.allArtists[1].description).toEqual('Artista independente com anos de carreira');
    });

    afterEach(()=> {
        Artist.allArtists = [];
    })
});