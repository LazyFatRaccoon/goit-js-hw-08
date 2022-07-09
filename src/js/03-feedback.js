import {throttle} from "throttle-debounce";

const form = document.querySelector('form')
console.log(form)
const FORM_CURRENT_INPUTS = 'formCurrentInputs';

if (localStorage.getItem(FORM_CURRENT_INPUTS)) {
     try { let obj = JSON.parse(localStorage.getItem(FORM_CURRENT_INPUTS));
        [...form.elements].filter(el=>el.type!=='submit').map(el=>el.value = obj[el.name])} 
    catch(err) {return err} 
   
    
}
    
let inputsObj = []

function updateLocalStorage() {
    inputsObj = Object.fromEntries([...form.elements].filter(el=>el.type!=='submit').map(el=>[el.name, el.value]))
    console.log(inputsObj)
    localStorage.setItem(FORM_CURRENT_INPUTS, JSON.stringify(inputsObj))
}

form.addEventListener('input', throttle(500, updateLocalStorage))

function onSubmit(e) {
e.preventDefault();
let formData = new FormData(form)
for (let pair of formData.entries()) {
    console.log(pair[0] + ' : ' + pair[1])
}
localStorage.removeItem(FORM_CURRENT_INPUTS);
form.reset();
}

form.addEventListener('submit', onSubmit)