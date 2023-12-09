const Address = require("./Address.js");


describe('Should validate methods of the Address class', () => {

    let address1;

    beforeEach(async () => {
        address1 = new Address(
            '06815150', 
            'Avenida Juruna', 
            'Embu das Artes', 
            'Parque Pirajussara',
            'SP'
        )
    });

    it('Should create Address success', () => {
        expect(address1.city).toEqual("Embu das Artes");
        expect(address1.streetAddress).toEqual('Avenida Juruna');
        expect(address1.neighborhood).toEqual('Parque Pirajussara');
        expect(address1.state).toEqual('SP');
        expect(address1.postalCode).toEqual('06815150');
    });

    it('Should not create Address', () => {
        expect(() => {
            new Address('0');
        }).toThrow(Error('Invalid postal code. Make sure the postal code has 8 digits.'));
    });

    describe('Shoul validate set methods', () => {

        it('should validate set new street', () => {
            address1.streetAddress = 'Oiapoque';
            expect(address1.streetAddress).toEqual('Oiapoque');
        });

        it('should validate set new city', () => {
            address1.city = 'Taboão';
            expect(address1.city).toEqual('Taboão');
        });

        it('should validate set new neighborhood', () => {
            address1.neighborhood = 'Valo Verde';
            expect(address1.neighborhood).toEqual('Valo Verde');
        });

        it('should validate set new state', () => {
            address1.state = 'DF';
            expect(address1.state).toEqual('DF');
        });

        it('should validate set new postalCode', () => {
            address1.postalCode = '06815435';
            expect(address1.postalCode).toEqual('06815435')
        });
    })
});

