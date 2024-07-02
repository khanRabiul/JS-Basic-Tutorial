
// .firstElementChild
// .lastElementChild
// .nextElementChild
// .previousElementChild
// .parentElement
// .children


//~~~~~~~~~~  .firstElementChild ~~~~~~~~~~~

/* const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";
 */

const ulElements = document.querySelectorAll('ul');
// querySelectorAll() has own buit in methods
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = 'red';
})
console.log(ulElements);


//~~~~~~~~~~~~~~ .lastElementChild ~~~~~~~~~~~~~~~~~

/* const element = document.getElementById('desserts');
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = 'orange' */

const lastUlEelments = document.querySelectorAll('ul');
lastUlEelments.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor ='orange';
});


//~~~~~~~~~~~~~~~   .nextElementSibling     ~~~~~~~~~~~~~

const element = document.getElementById('mango');
const nextSiblings = element.nextElementSibling;
nextSiblings.style.backgroundColor = "green";


// ~~~~~~~~~~~~~~~  .previousElementSibling ~~~~~~~~~~~~~~~~~~~~~~~

const targetElement = document.getElementById("banana");
const previousSiblingElemnet = targetElement.previousElementSibling;
previousSiblingElemnet.style.backgroundColor = "yellow"



// ~~~~~~~~~~~~~~~  .parentElement ~~~~~~~~~~~~~~~~~~~~~~~

const tarElement = document.getElementById('apple');
const parent = tarElement.parentElement;
parent.style.backgroundColor = "blue";

const tarElementB = document.getElementById('fruits');
const parentB = tarElementB.parentElement;
parentB.style.backgroundColor = "#282c34";



// ~~~~~~~~~~~~~~~  .children ~~~~~~~~~~~~~~~~~~~~~~~

const elementTar = document.getElementById('vegitables');
const children = elementTar.children;

// .children retruns html list. so it does not hava a built in for each method;

Array.from(children).forEach(child => {
    child.style.color = "white";
})

// and from list we can access by index number;

children[1].style.fontSize = "2rem";