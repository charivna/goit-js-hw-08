const throttle = require('lodash.throttle')

const form = document.querySelector('form')
const button = document.querySelector('button')
const mail = document.querySelector('input')
const text = document.querySelector('textarea')

let data = {}

form.addEventListener('input', throttle(onInput, 500))
button.addEventListener('submit', onSubmit)
localStorageHistory()


function onInput(evt) {
    data[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(data))
}

function onSubmit(evt) {
    evt.preventDefault();
        if(!data.email || !data.message){
        alert('Заповніть форму повністю, будь-ласка.')
    } else {
        console.log(data);     
        evt.target.reset();
        localStorage.removeItem("feedback-form-state");
        data = {};       
    }    
};

function localStorageHistory() {
    const storageGetItem = localStorage.getItem("feedback-form-state");
    if (storageGetItem) {
        data = JSON.parse(storageGetItem);
        mail.value = data.email ?? '';
        text.value = data.message ?? '';
    }
}









// const STORAGE_KEY = "feedback-form-state";
// let obj = {};

// const refs = {
//     feedbackForm: document.querySelector('.feedback-form'),
//     inputEmail: document.querySelector('.feedback-form input'),
//     textarea: document.querySelector('.feedback-form textarea')
// };

// refs.feedbackForm.addEventListener('submit', onSubmitForm);
// refs.feedbackForm.addEventListener('input', throttle(onInputForm, 500));
// localStorageHistory();

// function onInputForm(event) {    
//     obj[event.target.name] = event.target.value;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));    
//  }

// function onSubmitForm(event) {
//     event.preventDefault();
   
//     if(!obj.email || !obj.message){
//         alert('Заполните все поля, пожалуйста) 🍀')
//     } else {
//         console.log(obj);     
//          event.target.reset();
//         localStorage.removeItem(STORAGE_KEY);
//         obj = {};       
//     }    
// };

// function localStorageHistory() {
//     const storageGetItem = localStorage.getItem(STORAGE_KEY);
  
//     if (storageGetItem) {
//         obj = JSON.parse(storageGetItem);
        
//         refs.textarea.value = obj.message ?? '';
//         refs.inputEmail.value = obj.email ?? '';
//     }
// }