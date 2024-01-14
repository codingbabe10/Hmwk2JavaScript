//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// let person3 = {
//     pizza:["Deep Dish","South Side Thin Crust"],
//     tacos:"Anything not from Taco bell",
//     burgers:"Portillos Burgers",
//     ice_cream:["Chocolate","Vanilla","Oreo"],
//     shakes:[{
//         oberwise:"Chocolate",
//         dunkin:"Vanilla",
//         culvers:"All of them",
//         mcDonalds:"Sham-rock-shake",
//         cupids_candies:"Chocolate Malt"
//     }]
// }





function FavoriteFood(person) {
    for (let favorite in person) {
        if (Array.isArray(person[favorite])) {
            console.log(`${favorite}:`);
            person[favorite].forEach(item => {
                console.log(`  - ${item}`);
            });
        } else if (typeof person[favorite] === 'object') {
            console.log(`${favorite}:`);
            for (let subFavorite in person[favorite][0]) {
                console.log(`  - ${subFavorite}: ${person[favorite][0][subFavorite]}`);
            }
        } else {
            console.log(`${favorite}: ${person[favorite]}`);
        }
    }
}

// Example usage with person3 object
let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
};

FavoriteFood(person3);






//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 



// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Use an arrow function to create the printInfo method
Person.prototype.printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age
Person.prototype.addAge = (years) => {
    this.age += years;
};

// Create two people using the 'new' keyword
let person1 = new Person("Bob", 16);
let person2 = new Person("Matt", 29);

// Print both of their infos
person1.printInfo();
person2.printInfo();

// Increment one person's age 
person1.addAge(3);

// Print the updated info
console.log("After incrementing age by 3 years:");
person1.printInfo();
person2.printInfo();








// 2 code wars problems for tonight as well. One that you've done previously in python, 
// one that you have not yet done. All must be produced in JavaScript.

// 1 codewars, previously completed in Python:

We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):

123  --> "123"
999  --> "999"
-100 --> "-100"

previous answer: 
def number_to_string(num):
return str(num)


Javascript answer: 
function numberToString(num) {
    // Return a string of the number here!
  }



//   2 Codewars 

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]




function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item));
}

// Test cases
console.log(arrayDiff([1, 2], [1]));             // Output: [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));    // Output: [1, 3]
