

const person = {
    fullName: "Ahmed Shejad",
    age: 25,
    isStudent: true,
    hobbies: ['cricked', 'football', 'gamming'],
    address: {
        street: '124 Banani',
        city: 'Dhaka',
        country: 'Bangladesh'
    }
};

// Accessing the property
console.log(person.fullName);
console.log(person.age);
console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.address);
console.log(person.address.country);

// Loop through the methods
for (const property in person.address) {
    console.log(person.address[property]);
};



class Student {
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const student1 = new Student ('Arian', 15, '1200 Mirpur', 'Dhaka', 'Bangladesh');
const student2 = new Student ('Sadia', 17, '1208 Mirpur', 'Dhaka', 'Bangladesh');
const student3 = new Student ('Mariam', 14, '1210 Uttara', 'Dhaka', 'Bangladesh');

console.log(student1.name);
console.log(student1.address);

console.log(student3.name);
console.log(student3.address.country);