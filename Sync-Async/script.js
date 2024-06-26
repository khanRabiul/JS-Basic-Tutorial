
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

