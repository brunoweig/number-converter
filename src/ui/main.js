import { RomanConverter } from "../domain/RomanConverter.js"

const converter = new RomanConverter()

const input = document.getElementById('input')
const target = document.getElementById('target')

input.addEventListener('keyup', onKeyPress)

/**
 * @param {KeyboardEvent} e 
 */
function onKeyPress(e) {
    try {
        const result = converter.get(input.value)
        target.innerText = result
    } catch (e) {
        target.innerText = 'Invalid number'
    }
}