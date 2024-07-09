// Basics
let myName = "Mr Lam";
const myAge = 18;
let myPhone = 1234567;
myPhone = 7654321;
let myArr = [1, 2, 3, 4 ,5];
let isHuman = true;     // true or false in lowercase

console.log(myName);
console.log(myAge);
console.log(myPhone);
console.log(myArr);
console.log(isHuman);

// Playing with numbers
let a = (5 + 7) * 2;
let b = (5 - 7) / 3;
let c = 5 ** 7;     // power
let d = 123 % 45;   // remainder
console.log(a, b, c, d);

let e = Math.random();
let f = Math.round(123.456789);
let g = Math.cos(Math.PI);
let h = Math.E ** 2;
console.log(e);
console.log(f);
console.log("cos(pi) = " + g);
console.log("e-squared = " + h);

// Strings
let firstName = "Andrew";
let lastName = "Tay";
let fullName = firstName + " " + lastName;
let nameLength = fullName.length;
console.log(fullName + ", Length: " + nameLength);

let language = "JavaScript";
console.log(language[0]);
console.log(language.substring(2, 5));
console.log(language.toUpperCase());
console.log(language.replace("Java", "Type"));
console.log(language.includes("Java"));     // true or false

// use string literalss
console.log(`But I also like ${language.toLowerCase()}!`)

------------------------------------------------------------
// if... else
let age = parseInt(prompt("Please enter your age: "));

if (age <= 12) {
    console.log("Hello kid.")
}
else if (age <= 18) {
    console.log("Hello teen.")
}
else if (age > 18) {
    console.log("Hello adult.")
}

// for loop
let fruits = ["apple", "mango", "pineapple", "banana", "coconut"];
for (let i = 0; i < fruits.length; i ++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

// while loop
let counter = 10;
while (counter > 0) {
    console.log(counter);
    counter--;
}
console.log("Happy New Year!!")

// Arrays (similar to Python list)
let numbers = [123, 456, 789];
let schools = ["RI", "ASR", "EJC", "ACJC", "HCI"]
let mixed = [1.23, "Happy", [4, 5, 6]];

console.log(numbers[0]);
console.log(schools.length);

schools.push("TMJC")
schools.push("JPJC")
console.log(schools)
schools.pop();
console.log(schools)

for (let i = 0; i < schools.length; i++) {
    console.log(schools[i]);
}

// Objects (dictionary in Python, also exactly the same)
let person = {
    firstName: "Maadhesh",
    lastName: "Vetrimani",
    age: 17,
    isStudent: true
};

person["age"] = 18;
person["isStudent"] = false;
console.log(person.age);        // alternative to using [], n dont need use "" !!
console.log(person["firstName"], person["lastName"]);

// Functions
function cube(x) {
    return x ** 3;
}

// Arrow functions (shorter)
let magnitude = (x, y, z) => Math.sqrt(x**2 + y**2 + z**2);
console.log(magnitude(3, 4, 5));
