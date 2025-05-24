// product-page.js
// Handles product detail rendering, cart sidebar logic, and checkout button handler for product.html

document.addEventListener('DOMContentLoaded', function () {
    // Ensure window.products is available
    if (!window.products && typeof products !== 'undefined') {
        window.products = products;
    }
    // Find the product from the URL
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));
    const product = (window.products || []).find(p => p.id === productId) || (window.products ? window.products[0] : null);
    if (product) {
        // Set product image
        const img = document.querySelector('.product-details img');
        if (img) img.src = product.image;
        // Set product name
        const name = document.querySelector('.product-info h1');
        if (name) name.textContent = product.name;
        // Set product description
        const desc = document.querySelector('.product-info p');
        if (desc) desc.textContent = product.description;
        // Set product price
        const price = document.querySelector('.product-info span.text-3xl');
        if (price) price.textContent = `₹${product.price.toLocaleString()}`;
        // Set badges
        const badgesDiv = document.querySelector('.product-info > div.flex');
        if (badgesDiv && product.badges) {
            badgesDiv.innerHTML = product.badges.map(badge => `<span class='inline-block bg-[var(--primary)] text-black text-xs font-semibold px-3 py-1 rounded-full shadow'>${badge}</span>`).join(' ');
        }
    }
    const addToCartBtn = document.querySelector('.add-to-cart');
    if (addToCartBtn && product) {
        addToCartBtn.addEventListener('click', function () {
            addToCart(product);
            // Show a simple confirmation
            addToCartBtn.textContent = 'Added!';
            addToCartBtn.disabled = true;
            setTimeout(() => {
                addToCartBtn.textContent = 'Add to Cart';
                addToCartBtn.disabled = false;
            }, 1200);
        });
    }
    // Cart sidebar open/close logic
    const openCartBtn = document.getElementById('open-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = cartSidebar ? cartSidebar.querySelector('.close-cart') : null;
    if (openCartBtn && cartSidebar) {
        openCartBtn.addEventListener('click', function () {
            cartSidebar.classList.remove('translate-x-full');
        });
    }
    if (closeCartBtn && cartSidebar) {
        closeCartBtn.addEventListener('click', function () {
            cartSidebar.classList.add('translate-x-full');
        });
    }
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && cartSidebar) cartSidebar.classList.add('translate-x-full');
    });
    document.addEventListener('mousedown', function(e) {
        if (cartSidebar && !cartSidebar.contains(e.target) && e.target !== openCartBtn && !cartSidebar.classList.contains('translate-x-full')) {
            cartSidebar.classList.add('translate-x-full');
        }
    });
    // Checkout button handler
    const checkoutBtn = document.getElementById('checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('payment.html', '_blank', 'width=500,height=700');
        });
    }
});
