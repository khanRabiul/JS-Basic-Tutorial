const decreaseBtn = document.getElementById('decrease-btn');
const resetBtn = document.getElementById('reset-btn');
const increaseBtn = document.getElementById('increase-btn');
const displayBtn = document.getElementById('count-label');

increaseBtn.addEventListener('click', () => {
    let value = parseInt(displayBtn.innerText);
    value++;
    displayBtn.innerText = value;
    // console.log(value)
});

decreaseBtn.addEventListener('click', () => {
    let value = displayBtn.innerText;
    // value--;
    value -= 1;
    displayBtn.innerText = value;
    // console.log(value);
});

resetBtn.addEventListener('click', () => {
    let value = 0;
    displayBtn.innerText = value
});
