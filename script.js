console.log("task 6");

const fullName="Ainara Aidyn";
let age=19;
const isStudent=true;
let favoriteColor="Pink";

console.log("Full name:", fullName);
console.log("Type:", typeof fullName);

console.log("Age:", age);
console.log("Type:", typeof age);

console.log("Student:", isStudent);
console.log("Type:", typeof isStudent);

console.log("Favorite color:", favoriteColor);
console.log("Type:", typeof favoriteColor);

age = 20;
console.log("New age:", age);



console.log("task 7");

const username = prompt("What is your name?");
alert("Hello, " + username + "! Welcome!");
const myGroup = prompt("What is your group?");
alert("Hi, "+username+" from "+myGroup+"! Nice to meet you!");
console.log("My name is " + username + " and I am from" + myGroup + ".");


console.log("task 8");

const firstNumber = Number(prompt("What is the first number?"));
const secondNumber = Number(prompt("What is the second number?"));

console.log("Sum:", firstNumber + secondNumber);
console.log("Difference:", firstNumber - secondNumber);
console.log("Product:", firstNumber * secondNumber);

if (secondNumber !== 0) {
    console.log("Quotient:", firstNumber / secondNumber);
    console.log("Remainder:", firstNumber % secondNumber);
} else {
    console.log("Cannot divide by zero.");
}



console.log("task 9");

console.log("Length:", fullName.length);
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First three characters:", fullName.slice(0, 3));

const firstPart = "I study";
const secondPart = "JavaScript.";

console.log("Combined sentence:", firstPart + " " + secondPart);




console.log("task 10");

let counter = 10;
console.log("Initial counter:", counter);

counter++;
console.log("After ++:", counter);

counter--;
console.log("After --:", counter);

counter += 5;
console.log("After += 5:", counter);

counter -= 3;
console.log("After -= 3:", counter);

counter *= 2;
console.log("After *= 2:", counter);

counter /= 4;
console.log("After /= 4:", counter);




console.log("task 11");

const dogAge = Number(prompt("What is the dog's age?"));
const humanAge = (dogAge - 2) * 4 + 21;

console.log("A dog age is " + dogAge + " years, it is equivalent to " + humanAge + " human years.");




console.log("task 12");

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

function calculateSum(a, b) {
    return a + b;
}

function calculateRectangleArea(width, height) {
    return width * height;
}


greetUser("Ainara");
greetUser("Alex");

const sum1=calculateSum(5,3);
console.log("Sum 1:", sum1);
const sum2=calculateSum(10,7);
console.log("Sum 2:", sum2);


console.log("Area 1:", calculateRectangleArea(4, 6));
console.log("Area 2:", calculateRectangleArea(5, 8));
