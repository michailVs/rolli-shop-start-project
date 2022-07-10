let totPrice = document.querySelector('.total-price')
const counterWrap = document.querySelector('.cart-wrapper')
window.addEventListener('click', (e) => {
    let counter
    let itemInBoxed
    const orderForm = document.querySelector('#order-form')

    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
        const counterWrapper = e.target.closest('.counter-wrapper')
        counter = counterWrapper.querySelector('[data-counter]')
        itemInBoxed = parseInt(document.querySelector('.text-muted').innerText)
    }

    if (e.target.dataset.action === 'plus') {
        if (counter.innerText < itemInBoxed) {
            counter.innerText = ++counter.innerText
        } else {
            counter.innerText = itemInBoxed
        }
        if (e.target.closest('.cart-wrapper')) {
            totPrice.innerText = parseInt(totPrice.innerText) + parseInt(counterWrap.querySelector('.price__currency').innerText)
        }
    }

    if (e.target.dataset.action === 'minus') {
        if (e.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            totPrice.innerText = parseInt(totPrice.innerText) - parseInt(counterWrap.querySelector('.price__currency').innerText)
            e.target.closest('.cart-item').remove()
            updateCart()
            orderForm.remove()
        }

        if (e.target.closest('.cart-wrapper')) {
            totPrice.innerText = parseInt(totPrice.innerText) - parseInt(counterWrap.querySelector('.price__currency').innerText)
        }
        
        if (counter.innerText > 1) {
            counter.innerText = --counter.innerText
        } else {
            counter.innerText = 1
        }
    }
})
function updateCart() {
    const cartLeng = document.querySelectorAll('.cart-item')
    let cartAle = document.querySelector('.alert')
    if (cartLeng.length > 0) {
        cartAle.remove()
    } else {
        cartAle = `
        <div data-cart-empty class="alert alert-secondary" role="alert">
        Корзина пуста
        </div>`
        counterWrap.insertAdjacentHTML('beforeend', cartAle)
    }
}