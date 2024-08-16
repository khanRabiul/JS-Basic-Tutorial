
const students = [ 
    { rollNo: 21, name: 'Alpha' }, 
    { rollNo: 22, name: 'Beta' }, 
    { rollNo: 23, name: 'Gamma' }, 
    { rollNo: 24, name: 'Delta' }, 
    { rollNo: 25, name: 'Omega'} 
]; 

// Using forEach()
let forEachStudentsRoll = [];
students.forEach(function (student) {
    forEachStudentsRoll.push(student.rollNo)
});
console.log(forEachStudentsRoll);

// Using map()
const mapStudentsRoll = students.map(function(student) {
    return student.rollNo;
});
console.log(mapStudentsRoll);

// Using map() and Arrow function
const mappedArrowStudentsRoll = students.map(student => student.rollNo);
console.log(mappedArrowStudentsRoll);


const students1 = [ 
    { rollNo: 21, name: 'Alpha', prizesWon: 1 }, 
    { rollNo: 22, name: 'Beta', prizesWon: 3 }, 
    { rollNo: 23, name: 'Gamma', prizesWon: 0 }, 
    { rollNo: 24, name: 'Delta', prizesWon: 0 }, 
    { rollNo: 25, name: 'Omega', prizesWon: 1} 
]; 
// Using reduce ()
const redTotalPrizeFd = students1.reduce(function(accu, student) {
    return accu += student.prizesWon;
}, 0);
console.log(redTotalPrizeFd);
// Using reduce() and arrow function
const redTotalPrize = students1.reduce((acc, student) => acc += student.prizesWon,0);
console.log(redTotalPrize);

// Data level 3
const students3 = [ 
    { rollNo: 21, name: 'Alpha', prizesWon: 4 }, 
    { rollNo: 22, name: 'Beta', prizesWon: 3 }, 
    { rollNo: 23, name: 'Gamma', prizesWon: 0 }, 
    { rollNo: 24, name: 'Delta', prizesWon: 4 }, 
    { rollNo: 24, name: 'Max', prizesWon: 5 }, 
    { rollNo: 25, name: 'Omega', prizesWon: 1} 
]; 

// Using find()
const getTopAchive = students3.find(function (student) {
    return student.prizesWon === 4;
});
console.log(getTopAchive);

// Finding the winner's name using higher order function

function getTopAchivetopAchiveName (prizes) {
    const winner = students3.find(function (student) {
        return student.prizesWon === 4;
    });

    if(winner) {
        return winner.name;
    } else {
        return 'No student found' + prizes + 'prize.';
    }
}

const topAchiveName = getTopAchivetopAchiveName(4);
console.log(topAchiveName);

// Get the maximum prizesWinners
const maximumPrizeWinner = students3.reduce(function (max, currentStudent) {
    return (currentStudent.prizesWon > max.prizesWon) ? currentStudent : max;
});
const maximumPrizeWinnerName = maximumPrizeWinner.name;
console.log(maximumPrizeWinner);
console.log(maximumPrizeWinnerName);



// Higher Order Function

// Higher order functions are functions that take one or more functions as arguments, or return a function as their result.


// Want to calcualte the area and diameter of a circle

// Traditional way
const radius = [1, 2, 3];

// Traditional step 1: function to calculate area of the circle
const calculateArea = function (radius) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));
// Traditional step 2: function to calculate diameter of the circle
const calcualteDiameter = function(radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
}
console.log(calcualteDiameter(radius));

// As logic and funciton is almost same so we can make the function reusable (Higher Order Function)

// Logic 1: Calculate the area
const area = function(radius) {
    return Math.PI * Math.pow(radius, 2);
}
// Logic 2: Calculate the diameter
const diameter = function (radius) {
    return 2 *  radius;
}
// Making a reusalble function to calculate area, diameter, etc
const calculate = function (radius, logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, diameter));