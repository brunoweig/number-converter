const input = document.getElementById('input')
const target = document.getElementById('target')

input.addEventListener('keyup', onKeyPress)

/**
 * @param {KeyboardEvent} e 
 */
function onKeyPress(e) {
    target.innerText = input.value;
}