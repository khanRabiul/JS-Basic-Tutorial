
//The 'setTiimeout()' method calls a function after a number of milliseconds. 1sec = 1000ms.

// The setTimeout() is executed only once.
// If you need repeated executions, use 'setInterval()' instead.
// Use the 'clearTimeout()' method to prevent the function from starting.
// To clear a timeout, use the "id" returned from 'setTimeout()'

// syntax: myTimeout = setTimeout(function, milliseconds);
// syntax: clearTimeout(myTimeout);
// syntax: setTimeout(function, milliseconds, param1, param2, ...);

// Display an alert box after 3 seconds (3000 milliseconds):
// setTimeout(callback, delay);

/* function myFunction() {
  window.alert('Hello');
} */

// Or
// setTimeout(function(){window.alert('Hello')}, 3000);

//Or
setTimeout ( () => window.alert('Hello'), 3000);


// ClearTimeout(timeoutId) = can cancel a timeout before it triggers

// const timeoutId = setTimeout ( () => window.alert('Hello'), 3000);
clearTimeout(timeoutId)