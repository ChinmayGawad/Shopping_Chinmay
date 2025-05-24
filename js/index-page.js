// index-page.js
// Handles cart sidebar open/close and checkout button logic for index.html
document.addEventListener('DOMContentLoaded', function () {
    const openCartBtn = document.getElementById('open-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const closeCartBtn = cartSidebar ? cartSidebar.querySelector('.close-cart') : null;
    // Open sidebar
    if (openCartBtn && cartSidebar) {
        openCartBtn.addEventListener('click', function () {
            cartSidebar.classList.add('show');
        });
    }
    // Close sidebar
    if (closeCartBtn && cartSidebar) {
        closeCartBtn.addEventListener('click', function () {
            cartSidebar.classList.remove('show');
        });
    }
    // Hide cart sidebar when pressing Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cartSidebar.classList.remove('show');
        }
    });
    // Hide cart sidebar when clicking outside
    document.addEventListener('mousedown', function(e) {
        if (!cartSidebar.contains(e.target) && e.target !== openCartBtn && cartSidebar.classList.contains('show')) {
            cartSidebar.classList.remove('show');
        }
    });
    // Add checkout button handler
    const checkoutBtn = document.getElementById('checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('payment.html', '_blank', 'width=500,height=700');
        });
    }
});
