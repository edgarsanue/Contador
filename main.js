const countEl = document.getElementById('count-el')
const saveEl = document.getElementById('save-el')

let count = 0;

function incrementar() { 
    count++; // =>> count = count + 1 || count +=1
    countEl.textContent = count;  
}

function save() {
    countStr = count + " - "
    saveEl.textContent += countStr; 
}

function zerar() {
    countEl.textContent = 0;
    count = 0;
}