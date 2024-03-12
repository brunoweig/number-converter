import { RomanConverter } from "../src/domain/RomanConverter"

describe('First', () => {
    const converter = new RomanConverter()

    const valid_cases = [
        ['I', 1],
        ['VI', 6],
        ['IV', 4],
        ['IX', 9],
        ['LX', 60],
        ['XL', 40],
        ['CC', 200],
        ['XC', 90],
        ['DC', 600],
        ['CD', 400],
        ['MM', 2000],
        ['CM', 900],
    ]

    it.each(valid_cases)('valid %s = %d', (input, expected) => {
        expect(converter.get(input)).toBe(expected)
    })
});