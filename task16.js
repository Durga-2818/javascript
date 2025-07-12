const prompt = require("prompt-sync")();

// 1. Display even numbers up to n
let n = parseInt(prompt("Enter a number to display even numbers up to n: "));
console.log(`Even numbers up to ${n}:`);
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    process.stdout.write(i + " ");
  }
}
console.log("\n");

// 2. Check if a character is vowel or consonant
let char = prompt("Enter a character: ").toLowerCase();
if (char.length !== 1 || !/[a-z]/.test(char)) {
  console.log("Please enter a single alphabet character.");
} else {
  if (["a", "e", "i", "o", "u"].includes(char)) {
    console.log(`${char} is a vowel.`);
  } else {
    console.log(`${char} is a consonant.`);
  }
}

// 3. Count even and odd numbers from 1 to 999
let evenCount = 0;
let oddCount = 0;
for (let i = 1; i <= 999; i++) {
  if (i % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
console.log(`Count of even numbers from 1 to 999: ${evenCount}`);
console.log(`Count of odd numbers from 1 to 999: ${oddCount}`);

// 4. Count occurrence of a particular character in a string
let str = prompt("Enter a string: ");
let searchChar = prompt("Enter a character to count: ");
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === searchChar) {
    count++;
  }
}
console.log(`Count of '${searchChar}' in "${str}" is: ${count}`);

// 5. Sum and average of array elements
let arr = [1, 9, 8];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let avg = sum / arr.length;
console.log(`Sum of array elements: ${sum}`);
console.log(`Average of array elements: ${avg}`);

// 6. Largest number in an array (using loop)
let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(`Largest number in the array: ${largest}`);
