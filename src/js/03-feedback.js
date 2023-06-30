const throttle = require('lodash.throttle')
const form = document.querySelector('form')

form.addEventListener('input', onInput)
const data = {}
function onInput() {
    data[evt.target.name] = evt.target.value;
    data[evt.target.email] = evt.target.value;

    localStorage.setItem('')
}

console.log('hello');