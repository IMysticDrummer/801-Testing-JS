// const suma = require('./suma');
import suma from './suma';

describe('un test más', () => {
    it('should be 0 if both values are like a and -a', () => {
        expect(suma(3,-3)).toBe(0);
        expect(suma(4,-4)).toBe(0);
        // aunque es cierta la sentencia, lo escrito en el String de it, 
        // no se corresponde con la comprobación de la hipótesis vs resultado obtenido 
        expect(suma(5,-4)).toBe(1); 
    })
})

describe.only('tiene que dar error con un solo parametro', () => {
    it('should return NaN with only one input param', () => {
        expect(suma(3)).toBeNaN()
    })
    it('should return NaN with only one input param', () => {
        expect(suma(3, undefined)).toBeNaN()
    })
})

describe('Ejemplos malos de test', () => {
    it('test A', () => {
        expect(suma(3,4)).toBe(7);
    })
})

describe.only('test de la función suma con valores positivos', () => {
    test('sumar 1 + 2 es igual a 3', () => {
        expect(suma(1, 2)).toBe(3);
    });

    test('sumar 0 + 0 es igual a 0', () => {
        expect(suma(0, 0)).toBe(0);
    })

    test.todo('sumar 3.4 más 3.0 es igual a 6.4')
})

describe.skip('test de la función suma con valores negativos', () => {
    test('sumar -1 + -1 es igual a -2', () => {
        expect(suma(-1, -1)).toBe(-2);
    })

    describe('test de la función con valores negativos muy grandes', () => {
        test('sumar -10000000 + -20000000 es igual a -30000000', () => {
            expect(suma(-10000000, -20000000)).toBe(-30000000);

            // ESTO PETA PORQUE NO PODEMOS TENER TESTS DENTRO DE TESTS!!!!!!
            // describe('Otros tests', () => {
            //     test('sumar -30000000 + -30000000 es igual a -60000000', () => {
            //         expect(suma(-30000000, -30000000)).toBe(-60000000);
            //     })
            // })
        })
        test('sumar -30000000 + -30000000 es igual a -60000000', () => {
            expect(suma(-30000000, -30000000)).toBe(-60000000);
        })
    })
})