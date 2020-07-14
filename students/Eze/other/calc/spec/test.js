

const operations = require('../operations.js');



describe('Функция add()', () => {
    it('должна вернуть 5 при аргументах 3 и 2', () => {
        const res = script.add(3, 2);
        expect(res).toBe(5);
    });
});

describe('Функция sub()', () => {
    it('должна вернуть 1 при аргументах 3 и 2', () => {
        const res = script.sub(3, 2);
        expect(res).toBe(1);
    });
});

describe('Функция mult()', () => {
    it('должна вернуть 6 при аргументах 3 и 2', () => {
        const res = script.mult(3, 2);
        expect(res).toBe(6);
    });
});

describe('Функция divide()', () => {
    it('должна вернуть 2 при аргументах 6 и 2', () => {
        const res = script.divide(6, 2);
        expect(res).toBe(2);
    });
});

    it('должна вернуть null при аргументах null и 5', () => {
        const res = script.pow(null, 5);
        expect(res).toBe(null);
    });

    it('должна вернуть null при аргументах 5 и null', () => {
        const res = script.pow(5, null);
        expect(res).toBe(null);
    });
});
