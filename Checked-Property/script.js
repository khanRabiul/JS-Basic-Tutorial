const myCheckBox = document.getElementById('check-box');
const visaCard = document.getElementById('visa-btn');
const masterCard = document.getElementById('mastercard-btn');
const paypalCard = document.getElementById('paypal-btn');
const submitBtn = document.getElementById('submit-btn');
const subResult = document.getElementById('sub-result');
const paymentResult = document.getElementById('payment-result');

submitBtn.addEventListener('click', ()=> {
    if (myCheckBox.checked) {
        subResult.textContent = `You have Subscribed!`;
    } else {
        subResult.textContent = `You are not a Subscriber`;
    }

    if(visaCard.checked) {
        paymentResult.textContent = `You are paying with visa card`;
    } else if (masterCard.checked) {
        paymentResult.textContent = `You are paying with visa card`;
    } else if (paypalCard.checked) {
        paymentResult.textContent = `You are paying with paypal card`;
    } else {
        paymentResult.textContent = `Must select a payment method`;
    }
});