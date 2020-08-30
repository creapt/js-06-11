const script = require('../script.js');

describe('sum()', () => {
    it('возвращает 5 при аргументах 2 и 3', () => {
        const result = script.sum(3, 2)
        expect(result).toBe(5);
    })
    it('возвращает null при аргументах null и 3', () => {
        const result = script.subtraction(null, 4)
        expect(result).toBe(null);
    })
    it('возвращает null при аргументах 2 и null', () => {
        const result = script.subtraction(24, null)
        expect(result).toBe(null);
    })
})
describe('multiplication()', () => {
    it('возвращает 24 при аргументах 4 и 6', () => {
        const result = script.multiplication(4, 6)
        expect(result).toBe(24);
    })
    it('возвращает null при аргументах null и 4', () => {
        const result = script.subtraction(null, 4)
        expect(result).toBe(null);
    })
    it('возвращает null при аргументах 24 и null', () => {
        const result = script.subtraction(24, null)
        expect(result).toBe(null);
    })
})
describe('division()', () => {
    it('возвращает 6 при аргументах 24 и 4', () => {
        const result = script.division(24, 4)
        expect(result).toBe(6);
    })
    it('возвращает null при аргументах null и 4', () => {
        const result = script.subtraction(null, 4)
        expect(result).toBe(null);
    })
    it('возвращает null при аргументах 24 и null', () => {
        const result = script.subtraction(24, null)
        expect(result).toBe(null);
    })
})
describe('subtraction()', () => {
    it('возвращает 20 при аргументах 24 и 4', () => {
        const result = script.subtraction(24, 4)
        expect(result).toBe(20);
    })
    it('возвращает null при аргументах null и 4', () => {
        const result = script.subtraction(null, 4)
        expect(result).toBe(null);
    })
    it('возвращает null при аргументах 24 и null', () => {
        const result = script.subtraction(24, null)
        expect(result).toBe(null);
    })
})