// Methods one
/* const easyMethod = window.prompt('what is your name?');
console.log(easyMethod);
 */
// Methods two- professional way
let userInput = document.getElementById('userText');
let displayEl = document.getElementById('display');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', ()=> {
    userInput = userInput.value;
    console.log(userInput);
    displayEl.textContent = `Hello ${userInput}`;
}
);


//Or

let userName;

document.getElementById('submit-btn').onclick = function () {
    userName = document.getElementById('userText').value;
    console.log(userName);
    // document.getElementById('display').textContent = `Hello ${userName}`;
}