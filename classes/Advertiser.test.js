const Advertiser = require("./Advertiser.js");

let advertiser1;

beforeEach(() => {
    advertiser1 = new Advertiser(
        'Talita Santos',
        'contato.talita@gmail.com',
        'SenhaF@rte123',
        '23/12/1996',
        '51984064819',
        'Busco artistas.',
        '06815435'
    );

    advertiser2 = new Advertiser(
        'Ana',
        'contato.talita@gmail.com',
        'SenhaF@rte123',
        '23/12/1996',
        '43265487612',
        'Busco artistas.',
        '06815435'
    );
});

describe('Should validate all methods from class Advertiser.', () => {

    it('Should validate an Advertiser profile creation.', () => {
        expect(advertiser1.name).toEqual('Talita Santos');
        expect(advertiser1.profile).toEqual(2);
        expect(advertiser1.email).toEqual('contato.talita@gmail.com');
        expect(advertiser1.password).toEqual('SenhaF@rte123');
        expect(advertiser1.dateOfBirth).toEqual('23/12/1996');
        expect(advertiser1.CPF).toEqual('51984064819');
        expect(advertiser1.description).toEqual('Busco artistas.');
        expect(advertiser1.address.postalCode).toEqual('06815435');
    });

    it('Should validate allAdvertiser array from class Advertiser.', () => {
        expect(Advertiser.allAdvertisers).toHaveLength(2);
        expect(Advertiser.allAdvertisers[0].name).toEqual('Talita Santos');
        expect(Advertiser.allAdvertisers[1].name).toEqual('Ana');
        expect(Advertiser.allAdvertisers[0].profile).toEqual(2);
        expect(Advertiser.allAdvertisers[1].profile).toEqual(2);
        expect(Advertiser.allAdvertisers[0].address).toEqual({"city": undefined, "neighborhood": undefined, "postalCode": "06815435", "state": undefined, "streetAddress": undefined});
        expect(Advertiser.allAdvertisers[1].address).toEqual({"city": undefined, "neighborhood": undefined, "postalCode": "06815435", "state": undefined, "streetAddress": undefined})
    })

    it('Should not create an Advertiser, because CPF is invalid', () => {
        expect(() => {
            new Advertiser('Talita Santos', 2, 'contato.talita@gmail.com', 'SenhaF@rte123', '23/12/1996', '1098765432A', 'Busco artistas', '06815435');
        }).toThrow(Error('Invalid CPF'));
    });


    afterEach(() => {
        Advertiser.allAdvertisers = []
    });

});