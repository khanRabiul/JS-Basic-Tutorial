
// ~~~~~~~~~~~~~~~~~~ Example 1 <h1> ~~~~~~~~~~~

// step 1: create the element(h1,h2...,p...)
const newH1 = document.createElement('h1');
const newH2 = document.createElement('h1');
// step 2: add attributes/properties (can compaire with value)
newH1.textContent = "I love Coding";
newH1.id = "myHeading"; // If we want to use id further uses we have to find it by "document.getElementBy...()"
newH1.style.color = "#528bff"

newH2.style.fontSize ="3rem"
newH2.style.textAlign = "center"
newH2.style.color = "red"
newH2.textContent = "I am a hard worker";

// step 3: append element to DOM(where the element will be added)
document.body.append(newH1); // append add element at the end of the content
// document.body.prepend(newH2);

// document.getElementById("box1").append(newH2)

// Remove HTML Element




const newH1 = document.createElement('h1');


newH1.textContent = " Hello there";

document.getElementById('box1').append(newH1);