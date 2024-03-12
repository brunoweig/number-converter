export class RomanConverter {
    /**
     * @param {String} value 
     */
    get(value) {
        let result = 0
        const reverted = this._revert(value)

        for (let i=0; i < reverted.length; i++) {
            const current = reverted[i]
            const next = reverted[i+1] ?? ''

            if (current === 'I') result += this._unit(next)
            if (current === 'V') result += this._five(next)
            if (current === 'X') result += this._tens(next)
        }

        return result
    }

    /**
     * @param {String} next
     * @returns {number} 
     */
    _unit(next) {
        return 1
    }

    /**
     * @param {String} next
     * @returns {number} 
     */
    _five(next) {
        if (next === 'I') {
            return 3;
        }

        return 5
    }

    /**
     * @param {String} next
     * @returns {number} 
     */
    _tens(next) {
        if (next === 'I') {
            return 8;
        }

        return 10
    }

    /**
     * @param {String} value
     * @returns {String}
     */
    _revert(value) {
        let result = ''

        for (let i=value.length-1; i >= 0; i--) {
            result += value[i]
        }

        return result.toUpperCase()
    }
}
