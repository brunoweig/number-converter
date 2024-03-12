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
        const formattedValue = value.toUpperCase()

        this.validate(formattedValue)

        let result = 0

        for (let i=formattedValue.length-1; i >= 0; i--) {
            const current = formattedValue[i]
            const next = formattedValue[i-1] ?? ''

            result += this._calculate(current, next)
        }

        return result
    }

    /**
     * @param {String} value 
     */
    validate(value) {
        /**
         * @type {RegExp[]}
         */
        const tests = [
            // Invalid chars
            /[^IVXLCDM]/,

            // Exceeded
            /I{4,}/,
            /V{2,}/,
            /X{4,}/,
            /L{2,}/,
            /C{4,}/,
            /D{2,}/,

            // Invalid sucessors
            /I[^IVX]/,
            /V[^I]/,
        ]

        tests.forEach(function (regex) {
            if (regex.test(value)) {
                throw new SyntaxError('Número incorreto')
            }
        })
    }

    _calculate(value, next) {
        const currentValue = ROMAN[value]
        const nextValue = ROMAN[next] ?? 0

        if (nextValue >= currentValue) return currentValue

        return currentValue - nextValue * 2
    }
}
