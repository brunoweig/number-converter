import { RomanConverter } from "../src/domain/RomanConverter"

describe('First', () => {
    const converter = new RomanConverter()

    const values = [
        ['I', 1],
        ['VI', 6],
        ['IV', 4],
        ['IX', 9],
    ]

    it.each(values)('units %s = %d', (input, expected) => {
        expect(converter.get(input)).toBe(expected)
    })
});