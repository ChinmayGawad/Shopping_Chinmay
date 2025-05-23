// This file contains the JavaScript logic for the shopping cart. It manages the cart items, updates the cart section dynamically, and calculates the total cost.

let cart = [];

// Load cart from localStorage if available
function loadCart() {
    const stored = localStorage.getItem('cart');
    cart = stored ? JSON.parse(stored) : [];
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Initialize cart from storage on page load
loadCart();

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateCart();
    // Always open the cart sidebar when an item is added
    const cartSidebar = document.querySelector('.cart-sidebar');
    if (cartSidebar) cartSidebar.style.display = 'block';
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCart();
}

function updateCart() {
    // Always reload cart from storage to sync between tabs/pages
    loadCart();
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    let totalCost = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<div class="text-center text-gray-400 py-8">Your cart is empty.</div>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalCost += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item flex items-center justify-between gap-2 py-2 px-2 rounded-lg bg-white shadow mb-2';
            cartItem.innerHTML = `
                <div class="flex-1">
                    <span class="font-semibold text-gray-800">${item.name}</span><br>
                    <span class="text-sm text-gray-500">₹${item.price.toLocaleString()} x </span>
                    <button class="decrease-qty px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 text-lg font-bold" data-id="${item.id}">-</button>
                    <span class="mx-1 font-semibold">${item.quantity}</span>
                    <button class="increase-qty px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 text-lg font-bold" data-id="${item.id}">+</button>
                    <span class="text-sm text-gray-500 ml-2">= ₹${itemTotal.toLocaleString()}</span>
                </div>
                <button class="remove-item text-red-500 hover:text-red-700 text-xl font-bold ml-2" data-id="${item.id}" title="Remove">×</button>
            `;
            cartContainer.appendChild(cartItem);
        });
    }

    const totalElement = document.getElementById('total-price');
    if (totalElement) totalElement.textContent = `₹${totalCost.toLocaleString()}`;

    // Add event listeners for quantity and remove buttons
    cartContainer.querySelectorAll('.increase-qty').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const item = cart.find(i => i.id === id);
            if (item) { item.quantity += 1; saveCart(); updateCart(); }
        });
    });
    cartContainer.querySelectorAll('.decrease-qty').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const item = cart.find(i => i.id === id);
            if (item && item.quantity > 1) { item.quantity -= 1; saveCart(); updateCart(); }
            else if (item && item.quantity === 1) { removeFromCart(id); }
        });
    });
    cartContainer.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            removeFromCart(id);
        });
    });
}

function clearCart() {
    cart = [];
    saveCart();
    updateCart();
}

// Keep cart in sync between tabs/pages
window.addEventListener('storage', function(e) {
    if (e.key === 'cart') {
        loadCart();
        updateCart();
    }
});

// On page load, always update cart display
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateCart);
} else {
    updateCart();
}