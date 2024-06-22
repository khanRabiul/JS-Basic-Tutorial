
// closure = A function defined inside of another function, the     inner function has  access to the variables and scope of the outer function.
// Allow for private variables and state maintenance 
// Used frequently in JS frameworks: react, vue, angular
//Global variables can be made local (private) with closures.
//A closure is a function having access to the parent scope, even after the parent function has closed.

function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

// we have to call inner function here, because it is privet
//even variable into the parent function can not be changed from outside
    inner();
}

// As it is now a privet function it's value can not be change from outside
message = 'Goodbye';
// We can not call it here, it is a privet function
outer();

// Without closure

// If we create the variable globally any time can be changed

// let count = 0; // it can be changed from any where like below::
function increment() {
    let count = 0;
    count++;
    console.log(`Count increased to ${count}`);
}
increment();
increment();
increment();
increment();
// How many time we call the function the "count" variable's value will change

// Value of variable is changed
// let count = 1000; // Now count value is '1000' not '0'

//To solve we can create a function into another function means closure;

function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`Count increased to ${count}`);
    }

    // To get count variable value, we need get method
    function getCount(){
        return count;
    }

    // to get the createCounter() vale we have to return the inner function 
    // return an object
    //return {increment:increment}


    // return increment(); return increment; don't work like this

    // we can use method
    return{increment, getCount}
}

// we can use method
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

// to get the variable's value;
console.log(`Ther current count is ${counter.getCount()}`)
console.log(`Ther current count is ${counter.getCount()}`)