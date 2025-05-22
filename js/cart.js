// This file contains the JavaScript logic for the shopping cart. It manages the cart items, updates the cart section dynamically, and calculates the total cost.

let cart = [];

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    let totalCost = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalCost += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name} (x${item.quantity}) - $${itemTotal.toFixed(2)}</span>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    const totalElement = document.getElementById('cart-total');
    totalElement.innerText = `Total: $${totalCost.toFixed(2)}`;
}

function clearCart() {
    cart = [];
    updateCart();
}

// Example product structure
const exampleProduct = {
    id: 1,
    name: 'Sample Product',
    price: 19.99
};

// Example usage
addToCart(exampleProduct);