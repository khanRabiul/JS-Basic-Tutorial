

function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,

    this.drive = function() {
        console.log(`You are driving the ${model}`)
    }
}

const car1 = new Car ("Ford", "Mustang", 2024, "red");
const car2 = new Car ("Chevrolet", "camaro", 2025, "blue");
const car3 = new Car ("Dodge", "Charger", 2026, "silver");


console.log(car1.make);
console.log(car1.color);

console.log(car2.year);

console.log(car3.model);


car1.drive();
car2.drive();
car3.drive();