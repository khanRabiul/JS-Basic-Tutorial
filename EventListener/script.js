

// eventListener = Listen for specific events to create interactive web pages
// events: click, mouseover, mouseout
// Syntax: .addEventListener(click, callback);


const myBox = document.getElementById('myBox');

function changeColor(event) {
    event.target.style.backgroundColor ="tomato";
    event.target.textContent ="Ops 😒";
}

myBox.addEventListener('click', changeColor);

// We don't need to create "function declaration". We can use "function experation" even "annonimous function"

// Function declaration
const myBox2 = document.getElementById('myBox2');

function changeColor2(event) {
    event.target.style.backgroundColor ="tomato";
    event.target.textContent ="Ops 😒";
}

myBox2.addEventListener('click', function changeColor2(event) {
    event.target.style.backgroundColor ="tomato";
    event.target.textContent ="Ops 😒";
});

// Function Experation
const myBox3 = document.getElementById('myBox3');

const funExp = function changeColor(event) {
    event.target.style.backgroundColor ="tomato";
    event.target.textContent ="Ops 😒";
}

myBox3.addEventListener('click', funExp);

// Annonimous function
const myBox4 = document.getElementById('myBox4');

myBox4.addEventListener('click', (function (event) {
    event.target.style.backgroundColor ="tomato";
    event.target.textContent ="Ops 😒";
}));


// Arrow function
const myBox5 = document.getElementById('myBox5');


myBox5.addEventListener('click', (event) => {
    event.target.style.backgroundColor ="tomato";
    event.target.textContent ="Ops 😒";
}
);
// We can add multiple event 
myBox5.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor ="yellow";
    event.target.textContent ="Please Noo!!! 😮";
}
);

myBox5.addEventListener('mouseout', event => {
    event.target.style.backgroundColor ="lightgreen";
    event.target.textContent ="Click Me 5 😊";
});


// Adding button and enentListener to change box
const myButtonBox = document.getElementById('myBox6');
const myButton = document.getElementById('btn');

myButton.addEventListener('mouseover', event =>{
    myButtonBox.style.backgroundColor = "yellow";
    myButtonBox.textContent = "Please Noo!!! 😮";
});

myButton.addEventListener('click', event =>{
    myButtonBox.style.backgroundColor = "tomato";
    myButtonBox.textContent = "Ops 😒";
});

myButton.addEventListener('mouseout', event =>{
    myButtonBox.style.backgroundColor = "lightgreen";
    myButtonBox.textContent = "Click Me 6 😊";
});

// as 'event' parameter not required now we can ommit it
/* myButton.addEventListener('mouseout', () =>{
    myButtonBox.style.backgroundColor = "lightgreen";
    myButtonBox.textContent = "Click Me 6 😊";
}); */
