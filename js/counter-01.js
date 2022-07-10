const btnMinus = document.querySelector('[data-action="minus"]')
const btnPlus = document.querySelector('[data-action="plus"]')
const counter = document.querySelector('[data-counter]')
let count = 1
btnMinus.addEventListener('click', () => {
    if (count > 1) {
        counter.innerText = --count
    } else {
        counter.innerText = 1
    }
})
btnPlus.addEventListener('click', () => {
    counter.innerText = ++count
})