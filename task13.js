// Task 1: Create an object for animal and car
const animal = {
    name: "Dog",
    color: "Brown",
    sound: function() {
        console.log("Woof!");
    }
};

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        console.log("Car started!");
    }
};

console.log("Animal object:", animal);
animal.sound();

console.log("Car object:", car);
car.start();

// Task 2 (optional): Find duplicates in a string using array
const inputStr = "programming";
const strArr = inputStr.split("");
const duplicates = [];

strArr.forEach((char, index) => {
    if (strArr.indexOf(char) !== index && !duplicates.includes(char)) {
        duplicates.push(char);
    }
});
console.log("Duplicate characters:", duplicates);

// Task 3: Reverse a string using array methods
const strToReverse = "Hello World";
const reversed = strToReverse.split("").reverse().join("");
console.log("Reversed string:", reversed);

// Task 4: Find highest and lowest value in an array
const numbers = [10, 50, 3, 76, 25];
const highest = Math.max(...numbers);
const lowest = Math.min(...numbers);
console.log("Highest value:", highest);
console.log("Lowest value:", lowest);

// Task 5 (optional): Sorting of an array
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("Sorted array:", sortedNumbers);

// Task 6: Display first 3 elements in UI (Here, using console as UI simulation)
const firstThree = numbers.slice(0, 3);
console.log("First 3 elements:", firstThree);

// Task 7: Remove 4th element (index 3) and add 2 elements there
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log("Original array:", fruits);

fruits.splice(3, 1, "Fig", "Grapes"); // remove 1 element at index 3, add "Fig" & "Grapes"
console.log("Updated array after splice:", fruits);
