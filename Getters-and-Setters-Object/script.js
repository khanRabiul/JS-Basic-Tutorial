
/* Getters and Setters Methods in JS Object
JavaScript Accessors (Getters and Setters) */

// Getter /get
/* const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  }; */


// In JavaScript, getters and setters are methods used to get and set the values of an object's properties. They provide a way to intercept property access and modification, allowing for control over how properties are read and written.

//Define a class 'Person'
class Person {
//Constructor to initialize the name
constructor(name) {
    this._name = name; // the undescore to indicate a privat variable
}

// Getter method for 'name'
get name(){
    // The gatter method is called when the property 'name' is accessed
    return this._name;
}

//Setter method for 'name'
set name(newName){
    //The setter method is called when the property 'name' is assigned a value
    // Adding a condition to controll the assignment
      if(typeof newName === 'string' && newName.length > 0) {
        this._name = newName;
      } else {
        console.error('Invalid name');
      }
}
}

//Create an instance of the Person class
const person = new Person('John Doe');
// Access the 'name' property using the getter
console.log(person.name); // Output: John Doe

// Set a new value for the 'name' property using the setter
person.name= 'Jane Smith';
//Access the 'name' property again to see the updated value
console.log(person.name); // Outputs: Jane Smith

//Try to set an invalid value for the 'name' property
person.name = ''; // Output: Invalid name;



/* Explanation
Class Definition and Constructor

The Person class is defined with a constructor that initializes the _name property.
The underscore (_) is a naming convention to indicate that _name is intended to be a private variable.
Getter Method

The get name() method is a getter.
It allows access to the _name property.
When person.name is called, the getter method is executed, returning the value of _name.
Setter Method

The set name(newName) method is a setter.
It allows assignment to the _name property.
When person.name = 'Jane Smith' is executed, the setter method is called with newName as 'Jane Smith'.
Inside the setter, there is a condition to ensure that newName is a non-empty string. If the condition is met, _name is updated. Otherwise, an error message is logged.
Usage

An instance of the Person class is created with the name 'John Doe'.
The name property is accessed, triggering the getter and logging 'John Doe'.
The name property is set to 'Jane Smith', triggering the setter to update _name.
The name property is accessed again, showing the updated value 'Jane Smith'.
An attempt to set an invalid name (empty string) triggers the error condition in the setter.
Advantages of Getters and Setters
Encapsulation: They help encapsulate the internal representation of the properties, providing controlled access.
Validation: Setters can include validation logic to ensure the property values are valid.
Computed Properties: Getters can compute and return values dynamically.
This approach helps maintain the integrity of the data within an object and provides a way to manage how properties are accessed and modified. */