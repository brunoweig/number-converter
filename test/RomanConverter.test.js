import { RomanConverter } from "../src/RomanConverter";

describe('First', () => {
    const converter = new RomanConverter()

    it('units', () => {
        expect(converter.get('I')).toBe(1)
        expect(converter.get('VI')).toBe(6)
        expect(converter.get('IV')).toBe(4)
        expect(converter.get('IX')).toBe(9)
    })
});