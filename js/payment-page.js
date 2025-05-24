// payment-page.js
// Handles payment form logic, payment method selection, and delivery details

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('payment-form');
    const paymentSuccess = document.getElementById('payment-success');
    // Payment method selection logic
    const paymentMethodSelect = document.getElementById('payment-method');
    const cardFields = document.getElementById('card-fields');
    const upiField = document.getElementById('upi-field');
    const netbankingField = document.getElementById('netbanking-field');

    function updatePaymentFields() {
        if (!paymentMethodSelect) return;
        // Hide all by default
        cardFields.classList.add('hidden');
        upiField.classList.add('hidden');
        netbankingField.classList.add('hidden');
        // Show relevant
        if (paymentMethodSelect.value === 'card') {
            cardFields.classList.remove('hidden');
            // Set required attributes
            cardFields.querySelectorAll('input').forEach(i => i.required = true);
            if (upiField) upiField.querySelectorAll('input').forEach(i => i.required = false);
            if (netbankingField) netbankingField.querySelectorAll('input').forEach(i => i.required = false);
        } else if (paymentMethodSelect.value === 'upi') {
            upiField.classList.remove('hidden');
            upiField.querySelectorAll('input').forEach(i => i.required = true);
            cardFields.querySelectorAll('input').forEach(i => i.required = false);
            if (netbankingField) netbankingField.querySelectorAll('input').forEach(i => i.required = false);
        } else if (paymentMethodSelect.value === 'netbanking') {
            netbankingField.classList.remove('hidden');
            netbankingField.querySelectorAll('input').forEach(i => i.required = true);
            cardFields.querySelectorAll('input').forEach(i => i.required = false);
            if (upiField) upiField.querySelectorAll('input').forEach(i => i.required = false);
        } else {
            // Cash on Delivery: nothing extra required
            cardFields.querySelectorAll('input').forEach(i => i.required = false);
            if (upiField) upiField.querySelectorAll('input').forEach(i => i.required = false);
            if (netbankingField) netbankingField.querySelectorAll('input').forEach(i => i.required = false);
        }
    }

    if (paymentMethodSelect) {
        paymentMethodSelect.addEventListener('change', updatePaymentFields);
        updatePaymentFields(); // Initial call
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Clear cart in localStorage
            localStorage.removeItem('cart');
            form.classList.add('hidden');
            paymentSuccess.classList.remove('hidden');
            setTimeout(() => {
                window.close();
            }, 2000);
        });
    }
});
