// Task 15: JavaScript Code

const prompt = require("prompt-sync")(); // install prompt-sync first using: npm install prompt-sync

// 1. Check if given number is multiple of 3
let number = 10900;
if (number % 3 === 0) {
  console.log(number + " is a multiple of 3");
} else {
  console.log(number + " is not a multiple of 3");
}

// 2. Check if sub-word exists in a string
let mainString = "I am learning js";
let subWord = "js";

if (mainString.includes(subWord)) {
  console.log(`The word '${subWord}' exists in the string.`);
} else {
  console.log(`The word '${subWord}' does not exist in the string.`);
}

// 3. Calculate complex interest: ((P / R) * T) / 100
let p = parseFloat(prompt("Enter the principal amount: "));
let r = parseFloat(prompt("Enter the rate of interest: "));
let t = parseFloat(prompt("Enter the time period: "));

let ci = ((p / r) * t) / 100;

console.log(`The complex interest is: ${ci}`);
