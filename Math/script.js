const myButton = document.getElementById('btn');
const myLabel = document.getElementById('label');
const myLabel1 = document.getElementById('label2');
const myLabel2 = document.getElementById('label3');
const min = 1;
const max = 6;
let randomNumber;
let randomNumber1;
let randomNumber2;

myButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * max) + min;
    randomNumber1 = Math.floor(Math.random() * max) + min;
    randomNumber2 = Math.floor(Math.random() * max)+ min;
    myLabel.textContent = randomNumber;
    myLabel1.textContent = randomNumber1;
    myLabel2.textContent = randomNumber2;
});