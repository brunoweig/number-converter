import { RomanConverter } from "../src/domain/RomanConverter"

describe('First', () => {
    const converter = new RomanConverter()

    const valid_cases = [
        ['I', 1],
        ['VI', 6],
        ['IV', 4],
        ['IX', 9],
        ['XIX', 19],
        ['LX', 60],
        ['XL', 40],
        ['CC', 200],
        ['XC', 90],
        ['DC', 600],
        ['CD', 400],
        ['MM', 2000],
        ['CM', 900],
    ]

    const invalid_cases = [
        ['ASD'],
        ['IIII'],
        ['VV'],
        ['XXXX'],
        ['LL'],
        ['CCCC'],
        ['DD'],
        ['VX'],
        ['IC'],
    ]

    it.each(valid_cases)('valid %s = %d', (input, expected) => {
        expect(converter.get(input)).toBe(expected)
    })

    it.each(invalid_cases)('invalid %s', input => {
        expect(() => converter.get(input)).toThrow(SyntaxError)
    })
});