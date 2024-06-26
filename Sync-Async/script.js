
// Callbacks
// A callback is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.

// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined/created.

function myFirst() {
    myDisplayer("Hello");
  }
  
function mySecond() {
    myDisplayer("Goodbye");
  }
  
mySecond();
myFirst();


function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

// NB: When you pass a function as an argument, remember not to use parenthesis. Wrong: myCalculator(5, 5, myDisplayer());


// Asynchronous JavaScript

// Functions running in parallel with other functions are called "asynchronous". A good example is JavaScript "setTimeout()"

// IN the real world, callbacks are most often used with asynchronous functions.

// Instead of passing the name of a nunction as an argument to another function, you can always pass a whole function instead;
//Examples: 
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}

// In the example above, function(){ myFunction("I love You !!!"); } is used as a callback. It is a complete function. The complete function is passed to setTimeout() as an argument.

function func1 (callback) {
    setTimeout(() => {console.log("Task 1");
        callback(), 3000
    });
}

function func2() {
    console.log('Task 2');
    console.log('Task 3');
    console.log('Task 4');
    console.log('Task 5');
}

func1(func2);

// Synchronous = Executes line by line consecutively in a sequntial manner code that waits for an operation to complete.

//Asynchronous = Allows multiple operations to be performed concurrently without waiting. Deesn't block the execution flow and allows the propram to continue (Input/Output opereations, network requests, and fetching data)
// Handeled with: Callbaks, Promises, Async/Await