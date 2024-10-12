import * as readlineSync from 'readline-sync';

// Data Structure 1: Array of numbers
let numbers: number[] = [10, 15, 20, 25, 30];

// Data Structure 2: Object (Struct equivalent in TypeScript)
interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

let person: Person = {
  name: "John Doe",
  age: 25,
  isStudent: true
};

// Function to handle Array operations using both for loop and if-else
function handleArrayOperations() {
  console.log("\n--- Array Operations (For Loop and If-Else) ---");

  // Using a for loop to iterate over the array and check if each number is even or odd
  for (let i = 0; i < numbers.length; i++) {
    console.log(`Number at index ${i}: ${numbers[i]}`);
    
    // Using if-else to determine if the number is even or odd
    if (numbers[i] % 2 === 0) {
      console.log(`-> ${numbers[i]} is even.`);
    } else {
      console.log(`-> ${numbers[i]} is odd.`);
    }
  }
}

// Function to handle Object operations using both for loop and if-else
function handleObjectOperations() {
  console.log("\n--- Object (Struct) Operations (For Loop and If-Else) ---");

  // Array of keys from the person object
  const keys: (keyof Person)[] = ['name', 'age', 'isStudent'];

  // Using a for loop to iterate over the object properties
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(`Property: ${key}, Value: ${person[key]}`);
  }

  // Using if-else to check if the person is a student or not
  if (person.isStudent) {
    console.log(`${person.name} is a student.`);
  } else {
    console.log(`${person.name} is not a student.`);
  }
}

// Function to display the menu and handle user input
export function displayMenu() {
  let choice: number;
  
  do {
    console.log("\n--- Menu ---");
    console.log("1. Array Operations (For Loop and If-Else)");
    console.log("2. Object Operations (For Loop and If-Else)");
    console.log("3. Exit");
    
    choice = readlineSync.questionInt("Enter your choice: ");
    
    switch (choice) {
      case 1:
        handleArrayOperations();
        break;
      case 2:
        handleObjectOperations();
        break;
      case 3:
        console.log("Exiting the program.");
        break;
      default:
        console.log("Invalid choice. Please try again.");
    }
  } while (choice !== 3);
}

displayMenu();