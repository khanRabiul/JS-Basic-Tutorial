
const display = document.getElementById('display');
const submitBtn = document.getElementById('submit-btn');
const h3 = document.getElementById('h3');

submitBtn.addEventListener('click', ()=> {
    let userInput = document.getElementById('user-input').value;
    userInput = Number(userInput);
    const result = Math.PI * 2 * userInput;
    h3.textContent = `${result} cm2`
});