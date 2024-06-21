
// destructuring - extract values from arrays and objects, then assign them to variables in a convenient way]
// [] = to perform array destructuring;
// {} = to perform object destructurin

// Example 1
// SWAP the value of two variables
let a = 1;
let b = 2;
 [a, b] = [b, a];
 console.log(a);
 console.log(b);

 // Examlple 2
 // SWAP 2 elements in an array

 const colors = ['red', 'green', 'blue', 'black', 'white'];
 // changing the value orders using destructuring
 [colors[0], colors[4]] = [colors[4], colors[0]];
 console.log(colors);

 // Example 3
 // Assing array elements to variables
  const newColors = ['red', 'green', 'blue', 'black', 'white'];
  const [firstColor, secondColor, thirdColor, ...moreColors] = newColors;
  console.log(firstColor);
  console.log(secondColor);
  console.log(thirdColor);
  console.log(moreColors);

  // Example 4
  // Extract values from objects
  const student1 = {
    firstName: "khan",
    lastName: 'Suliman',
    age: 26,
    job: 'privet employee'
  }
  const student2 = {
    firstName: 'Md',
    lastName: 'Mehadi',
    age: 25,
  }

  const {firstName, lastName, age, job} = student1;
  console.log(firstName);
  console.log(typeof lastName, lastName);
  console.log(typeof age, age);
  console.log(job);


//As the both objects has same property during destructuring it conflicts
/* const {firstName2, lastName2, age2, job2="Unemployed"} = student2;
console.log(firstName2);
console.log(typeof lastName2, lastName2);
console.log(typeof age2, age2);
console.log(job2); */


// to solve we can use this method;

const {firstName: firstName2,lastName: lastName2, age: age2, job: job2='Unemployed'} = student2;

console.log(firstName2);
console.log(typeof lastName2, lastName2);
console.log(typeof age2, age2);
console.log(job2);