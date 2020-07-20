const script = require('../src/module.js');

describe('Функция sum()', () => {
    it('Должна вернуть 5 при аргументах 3 и 2', () => {
        const res = script.sum(3, 2);
        expect(res).toBe(5);
    });
    it('Должна вернуть 1 при аргументах 3 и -2', () => {
        const res = script.sum(3, -2);
        expect(res).toBe(1);
    });

    it('Должна вернуть something wrong при аргументах 3 и null', () => {
        const res = script.sum(3, null);
        expect(res).toBe('something wrong');
    });
    it('Должна вернуть something wrong при аргументах null и 3', () => {
        const res = script.sum(null, 3);
        expect(res).toBe('something wrong');
    });

    it('Должна вернуть something wrong при аргументах undefined и 3', () => {
        const res = script.sum(3, undefined);
        expect(res).toBe('something wrong');
    });
    it('Должна вернуть calc something wrong при аргументах 3 и undefined', () => {
        const res = script.sum(undefined, 3);
        expect(res).toBe('something wrong');
    });

    it('Должна вернуть calc can\'t using string! при аргументах 3 и "S"', () => {
        const res = script.sum(3, 'S');
        expect(res).toBe('calc can\'t using string!');
    });
    it('Должна вернуть calc can\'t using string! при аргументах "S" и 3', () => {
        const res = script.sum('S', 3);
        expect(res).toBe('calc can\'t using string!');
    });
});

describe('Функция sub()', () => {
    it('Должна вернуть 1 при аргументах 3 и 2', () => {
        const res = script.sub(3, 2);
        expect(res).toBe(1);
    });
    it('Должна вернуть 5 при аргументах 3 и -2', () => {
        const res = script.sub(3, -2);
        expect(res).toBe(5);
    });

    it('Должна вернуть something wrong при аргументах 3 и null', () => {
        const res = script.sub(3, null);
        expect(res).toBe('something wrong');
    });
    it('Должна вернуть something wrong при аргументах null и 3', () => {
        const res = script.sub(null, 3);
        expect(res).toBe('something wrong');
    });

    it('Должна вернуть something wrong при аргументах undefined и 3', () => {
        const res = script.sub(3, undefined);
        expect(res).toBe('something wrong');
    });
    it('Должна вернуть calc something wrong при аргументах 3 и undefined', () => {
        const res = script.sub(undefined, 3);
        expect(res).toBe('something wrong');
    });

    it('Должна вернуть calc can\'t using string! при аргументах 3 и "S"', () => {
        const res = script.sub(3, 'S');
        expect(res).toBe('calc can\'t using string!');
    });
    it('Должна вернуть calc can\'t using string! при аргументах "S" и 3', () => {
        const res = script.sub('S', 3);
        expect(res).toBe('calc can\'t using string!');
    });

});

describe('Функция div()', () => {
    it('Должна вернуть 2 при аргументах 6 и 3', () => {
        const res = script.div(6, 3);
        expect(res).toBe(2);
    });
    it('Должна вернуть you can\'t divide by zero! при аргументах 3 и 0', () => {
        const res = script.div(3, 0);
        expect(res).toBe('you can\'t divide by zero!');
    });

    it('Должна вернуть something wrong при аргументах 3 и null', () => {
        const res = script.div(3, null);
        expect(res).toBe('something wrong');
    });
    it('Должна вернуть something wrong при аргументах null и 3', () => {
        const res = script.div(null, 3);
        expect(res).toBe('something wrong');
    });

    it('Должна вернуть something wrong при аргументах undefined и 3', () => {
        const res = script.div(3, undefined);
        expect(res).toBe('something wrong');
    });
    it('Должна вернуть calc something wrong при аргументах 3 и undefined', () => {
        const res = script.div(undefined, 3);
        expect(res).toBe('something wrong');
    });

    it('Должна вернуть calc can\'t using string! при аргументах 3 и "S"', () => {
        const res = script.div(3, 'S');
        expect(res).toBe('calc can\'t using string!');
    });
    it('Должна вернуть calc can\'t using string! при аргументах "S" и 3', () => {
        const res = script.div('S', 3);
        expect(res).toBe('calc can\'t using string!');
    });

});

describe('Функция mult()', () => {
    it('Должна вернуть 6 при аргументах 2 и 3', () => {
        const res = script.mult(2, 3);
        expect(res).toBe(6);
    });
    it('Должна вернуть 0 при аргументах 3 и 0', () => {
        const res = script.mult(3, 0);
        expect(res).toBe(0);
    });

    it('Должна вернуть something wrong при аргументах 3 и null', () => {
        const res = script.mult(3, null);
        expect(res).toBe('something wrong');
    });
    it('Должна вернуть something wrong при аргументах null и 3', () => {
        const res = script.mult(null, 3);
        expect(res).toBe('something wrong');
    });

    it('Должна вернуть something wrong при аргументах undefined и 3', () => {
        const res = script.mult(3, undefined);
        expect(res).toBe('something wrong');
    });
    it('Должна вернуть calc something wrong при аргументах 3 и undefined', () => {
        const res = script.mult(undefined, 3);
        expect(res).toBe('something wrong');
    });

    it('Должна вернуть calc can\'t using string! при аргументах 3 и "S"', () => {
        const res = script.mult(3, 'S');
        expect(res).toBe('calc can\'t using string!');
    });
    it('Должна вернуть calc can\'t using string! при аргументах "S" и 3', () => {
        const res = script.mult('S', 3);
        expect(res).toBe('calc can\'t using string!');
    });

});
