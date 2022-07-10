const cartWrapper = document.querySelector('.cart-wrapper')
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
    }
})