const script = require('./../../index.js')

describe('вызов ф-ии action()', () => {
    it('ф-ия возвращает число', () => {
        const res = script.action('21+4');
        expect(res).toBe(Number)
    })
})