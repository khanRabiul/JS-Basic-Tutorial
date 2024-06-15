//JavaScript Classes are templates for JavaScript Objects.
/* JavaScript Class Syntax
Use the keyword class to create a class
Always add a method named constructor() */

/* class ClassName {
    constructor() { ... }
  } */

/*    class Car {
       constructor(name, year) {
          this.name = name;
          this.year = year;
        }
 } */

        /* The Constructor Method
        The constructor method is a special method:
        
        It has to have the exact name "constructor"
        It is executed automatically when a new object is created
        It is used to initialize object properties
        If you do not define a constructor method, JavaScript will add an empty constructor method. */


       /*  Class Methods
Class methods are created with the same syntax as object methods.

Use the keyword class to create a class.

Always add a constructor() method.

Then add any number of methods. */

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // invocking into the same function don't requred to call the function 
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log9(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTaxt){
        return this.price + (this.price * salesTaxt) ;
    }

}


const salesTaxt = .30;

//Creating objects
const product1 = new Product ("Shirt", 20);
const product2 = new Product ("Pants", 22.50);
const product3 = new Product ("Shoes", 30.50);

console.log(product1);
console.log(product2);
console.log(product3);

// called the function or method with the parameter
const total1 = product1.calculateTotal(salesTaxt);
console.log(total1);
const total2 = product2.calculateTotal(salesTaxt);
console.log(total2);
const total3 = product3.calculateTotal(salesTaxt);
console.log(total3);