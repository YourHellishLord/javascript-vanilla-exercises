const clamp = (val, min, max) => Math.max(Math.min(val, max), min)


const bodyEl = document.querySelector('body');
const counterEl = document.getElementById('count');
let counter = 0;

const updateCounter = () => {
    counterEl.textContent = counter
    counterEl.style.color = counter > 0 ? 'green' : counter < 0 ? 'red' : 'black';
    bodyEl.style.backgroundColor = counterEl.style.color;
    bodyEl.style.filter = 'invert()';
} 


document.getElementById('btn-increase').addEventListener('click', () => {counter++; updateCounter();});
document.getElementById('btn-decrease').addEventListener('click', () => {counter--; updateCounter();});
document.getElementById('btn-reset').addEventListener('click', () => {counter=0; updateCounter();});

updateCounter();