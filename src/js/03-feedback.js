const throttle = require('lodash.throttle')

const formEl = document.querySelector('form')
const STORAGE_KEY = "feedback-form-state";
let data = {}

formEl.addEventListener('input', throttle(onInput, 500))
formEl.addEventListener('submit', onSubmit)
window.addEventListener('load', localStorageHistory)


function onInput(evt) {
    data[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function onSubmit(evt) {
    evt.preventDefault();
   
        console.log(data);     
        evt.target.reset();
        localStorage.removeItem(STORAGE_KEY);
        data = {};         
};

function localStorageHistory() {
   
    try {
        const storageGetItem = localStorage.getItem(STORAGE_KEY);
        
    if (!storageGetItem) return;
        data = JSON.parse(storageGetItem);
        Object.entries(data).forEach(([key, val]) => {
            formEl.elements[key].value = val;
        })
        
    } catch (error) {
        console.log(error.message);
    }
}








