
// Simple JavaScript console.log statement
// Remember that the JavaScript syntax uses console.log instead of print
function printHello() {
    console.log("Hello there!");
}

// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }

console.log(addition(4, 5));

// Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

// Plug in numbers 
console.log(doubleAddition(4,5));

// (Code Above) using Arrow Functions
doubleAddition = (c,d) => addition(c,d) * 2;

// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }

// (Code Above) using Arrow functions
printHello = () => "Hello there!";


// Original addition function
function addition(a, b) {
    return a + b;
  }

// (Code Above) Converted to an arrow function
addition = (a, b) => a + b;


let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }

 // Print the array "friends"
listLoop(friends)

// A 'for' loop to iterate through an array of vegetables
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

// Add a console.log to print each item in the array
// " i < 5 " determines the number of iterations
for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}

// Loop through numbers without using an array
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }