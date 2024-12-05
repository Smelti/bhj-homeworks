document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
    const cart = document.querySelector('.cart__products');

    products.forEach((product) => {
        const decrementButton = product.querySelector('.product__quantity-control_dec');
        const incrementButton = product.querySelector('.product__quantity-control_inc');
        const quantityValue = product.querySelector('.product__quantity-value');
        const addButton = product.querySelector('.product__add');

        decrementButton.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityValue.textContent, 10);
            if (currentQuantity > 1) {
                quantityValue.textContent = currentQuantity - 1;
            }
        });

        incrementButton.addEventListener('click', () => {
            let currentQuantity = parseInt(quantityValue.textContent, 10);
            quantityValue.textContent = currentQuantity + 1;
        });

        addButton.addEventListener('click', () => {
            const productId = product.dataset.id;
            const productImage = product.querySelector('.product__image').src;
            const productQuantity = parseInt(quantityValue.textContent, 10);
            const existingProduct = cart.querySelector(`.cart__product[data-id="${productId}"]`);

            if (existingProduct) {
                const productCount = existingProduct.querySelector('.cart__product-count');
                productCount.textContent = parseInt(productCount.textContent, 10) + productQuantity;
            } 
            else {
                const cartProduct = document.createElement('div');
                cartProduct.classList.add('cart__product');
                cartProduct.dataset.id = productId;

                const productImageElement = document.createElement('img');
                productImageElement.classList.add('cart__product-image');
                productImageElement.src = productImage;

                const productCountElement = document.createElement('div');
                productCountElement.classList.add('cart__product-count');
                productCountElement.textContent = productQuantity;

                cartProduct.appendChild(productImageElement);
                cartProduct.appendChild(productCountElement);
                cart.appendChild(cartProduct);
            }
        });
    });
});
