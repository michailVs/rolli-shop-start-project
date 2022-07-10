const cartWrapper = document.querySelector('.cart-wrapper')
let totalPrice = document.querySelector('.total-price')

window.addEventListener('click', (e) => {
    if (e.target.hasAttribute('data-cart')) {

        const cart = e.target.closest('.card')

        const productInfo = {
            id: cart.dataset.id,
            imgSrc: cart.querySelector('.product-img').getAttribute('src'),
            title: cart.querySelector('.item-title').innerText,
            itemInBox: cart.querySelector('.text-muted').innerText,
            counter: cart.querySelector('[data-counter]').innerText,
            priceWeight: cart.querySelector('.price__weight').innerText,
            priceCurrency: cart.querySelector('.price__currency').innerText
        }

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)

        if (itemInCart) {
            const counterEl = itemInCart.querySelector('[data-counter]')
            counterEl.innerText = parseInt(counterEl.innerText) + parseInt(productInfo.counter)
            totalPrice.innerText = parseInt(totalPrice.innerText) + (parseInt(productInfo.priceCurrency) * parseInt(productInfo.counter))
            updateCartHtml()
        } else {
            const cartItemHtml = `
            <div class="cart-item" data-id="${productInfo.id}">
                <div class="cart-item__top">
                    <div class="cart-item__img">
                        <img src="${productInfo.imgSrc}" alt="">
                    </div>
                    <div class="cart-item__desc">
                        <div class="cart-item__title">${productInfo.title}</div>
                        <div class="cart-item__weight">${productInfo.itemInBox} / ${productInfo.priceWeight}</div>
                        <div class="cart-item__details">
                            <div class="items items--small counter-wrapper">
                                <div class="items__control" data-action="minus">-</div>
                                <div class="items__current" data-counter="">${productInfo.counter}</div>
                                <div class="items__control" data-action="plus">+</div>
                            </div>
                            <div class="price">
                                <div class="price__currency">${productInfo.priceCurrency}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml)
            totalPrice.innerText = (parseInt(totalPrice.innerText) + parseInt(productInfo.priceCurrency)) * parseInt(productInfo.counter)
            updateCartHtml()
        }
        cart.querySelector('[data-counter]').innerText = '1'
    }
})
function updateCartHtml() {
    const cartLength = document.querySelectorAll('.cart-item')
    let cartAlert = document.querySelector('.alert')
    if (cartLength.length > 0) {
        cartAlert.remove()
        cartDeliv = `
            <div id="order-form" class="card-body border-top">
                <h5 class="card-title">Оформить заказ</h4>
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Ваш номер телефона">
                    </div>
                    <button type="submit" class="btn btn-primary">Заказать</button>
                </form>
            </div>
        `
        document.querySelector('.cart-total').insertAdjacentHTML('afterend', cartDeliv)
    } else {
        cartAlert = `
        <div data-cart-empty class="alert alert-secondary" role="alert">
        Корзина пуста
        </div>`
        cartWrapper.insertAdjacentHTML('beforeend', cartAlert)
    }
}
updateCartHtml()