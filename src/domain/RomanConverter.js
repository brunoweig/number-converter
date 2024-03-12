const ROMAN = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

export class RomanConverter {
    /**
     * @param {String} value 
     */
    get(value) {
        let result = 0
        const formattedValue = value.toUpperCase()

        for (let i=formattedValue.length-1; i >= 0; i--) {
            const current = formattedValue[i]
            const next = formattedValue[i-1] ?? ''

            result += this._calculate(current, next)
        }

        return result
    }

    _calculate(value, next) {
        let result = ROMAN[value]

        if (value === next) return result

        if (next === 'I') result -= ROMAN.I * 2
        if (next === 'X') result -= ROMAN.X * 2
        if (next === 'C') result -= ROMAN.C * 2

        return result
    }
}
