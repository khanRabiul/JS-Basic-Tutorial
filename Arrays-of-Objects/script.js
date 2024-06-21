
const fruits = [
            {name:'apple', color: 'red', calories: 95},
            {name:'orange', color: 'orange', calories: 45},
            {name:'banana', color: 'yellow', calories: 105},
            {name:'coconut', color: 'whit', calories: 195},
            {name:'pineapple', color: 'yellow', calories: 35}
];

console.log(fruits[0].name);
console.log(fruits[2].calories);

fruits.push({name:'grapes', color: 'green', calories: 75});
console.log(fruits);
// we can do pop, shift, slice, splice methods

// loop
fruits.forEach(fruits=> console.log(fruits.name));
fruits.forEach(fruits=> console.log(fruits.calories));

// map
const fruitsName = fruits.map( fruit => fruit.name);
console.log(fruitsName);
const fruitsColors = fruits.map( color => color.color);
console.log(fruitsColors);

// filtes
const yelloFruits = fruits.filter( fruit => fruit.color === "yellow");
console.log(yelloFruits);

const lowCaloriesFruits = fruits.filter( fruit => fruit.calories < 100);
console.log(lowCaloriesFruits);

// reduce
const maxCalFruit = fruits.reduce((currentMax, current)=> current.calories > currentMax.calories ? current :  currentMax );
console.log(maxCalFruit)