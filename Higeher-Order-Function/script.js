
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