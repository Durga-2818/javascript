// --20.1--//
const arr1 = [10, 15, 22, 5, 30];
const firstGreaterThan20 = arr1.find((num) => num > 20);
console.log("First element greater than 20:", firstGreaterThan20);

// --20.2--//
const firstLessThan20 = arr1.find((num) => num < 20);
console.log("First element less than 20:", firstLessThan20);

// --20.3--//
const data = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "David" },
];

// Choose random id to filter (example: id = 3)
const filteredData = data.filter((item) => item.id === 3);
console.log("Filtered data with id=3:", filteredData);

// --20.4--//
const arr2 = [90, 89, 56, 45];
arr2.forEach((num) => {
  if (num % 2 === 0) {
    console.log(num, "is Even");
  } else {
    console.log(num, "is Odd");
  }
});

//---20.5-----//
class Book {
  constructor(typeOfBook, numPages, typeOfPages, author) {
    this.typeOfBook = typeOfBook;
    this.numPages = numPages;
    this.typeOfPages = typeOfPages;
    this.author = author;
  }

  displayDetails() {
    console.log(`Book Type: ${this.typeOfBook}`);
    console.log(`Number of Pages: ${this.numPages}`);
    console.log(`Type of Pages: ${this.typeOfPages}`);
    console.log(`Author: ${this.author}`);
  }
}

const myBook = new Book("Fiction", 350, "Glossy", "Durga");
myBook.displayDetails();

// -------------------------
// Task 20.6 - Create class Animal
// -------------------------
class Animal {
  constructor(name, gender, disease) {
    this.name = name;
    this.gender = gender;
    this.disease = disease;
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  climb() {
    console.log(`${this.name} is climbing.`);
  }

  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`Disease: ${this.disease}`);
  }
}

const myAnimal = new Animal("Monkey", "Male", "None");
myAnimal.walk();
myAnimal.eat();
myAnimal.climb();
myAnimal.displayInfo();
