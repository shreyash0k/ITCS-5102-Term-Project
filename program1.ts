import * as readlineSync from 'readline-sync';

// Function to handle Integer operations
function handleIntegerOperations() {
  const intNum1: number = 42;
  const intNum2: number = 18;

  const sum: number = intNum1 + intNum2;
  console.log(`1. Sum of ${intNum1} and ${intNum2} is: ${sum}`);

  const difference: number = intNum1 - intNum2;
  console.log(`2. Difference between ${intNum1} and ${intNum2} is: ${difference}`);
}

// Function to handle Float operations
function handleFloatOperations() {
  const floatNum1: number = 23.4567;
  const floatNum2: number = 5.67;

  const product: number = floatNum1 * floatNum2;
  console.log(`1. Product of ${floatNum1} and ${floatNum2} is: ${product.toFixed(2)}`);

  const division: number = floatNum1 / floatNum2;
  console.log(`2. Division of ${floatNum1} by ${floatNum2} is: ${division.toFixed(2)}`);
}

// Function to handle String operations
function handleStringOperations() {
  const originalString: string = "Hello, TypeScript!";
  
  const replacedString: string = originalString.replace("TypeScript", "World");
  console.log(`1. Replaced String: ${replacedString}`);

  const upperCaseString: string = originalString.toUpperCase();
  console.log(`2. Uppercase String: ${upperCaseString}`);
}

// Function to handle Boolean operations
function handleBooleanOperations() {
  const isTrue: boolean = true;
  const isFalse: boolean = false;

  console.log(`1. Boolean as string (true): ${isTrue.toString()}`);
  console.log(`2. Negation of true is: ${!isTrue}`);
}

// Function to display the menu and handle user input
export function displayMenu() {
  let choice: number;
  
  do {
    console.log("\n--- Menu ---");
    console.log("1. Integer Operations");
    console.log("2. Float Operations");
    console.log("3. String Operations");
    console.log("4. Boolean Operations");
    console.log("5. Exit");
    
    choice = readlineSync.questionInt("Enter your choice: ");
    
    switch (choice) {
      case 1:
        console.log("\nPerforming Integer Operations:");
        handleIntegerOperations();
        break;
      case 2:
        console.log("\nPerforming Float Operations:");
        handleFloatOperations();
        break;
      case 3:
        console.log("\nPerforming String Operations:");
        handleStringOperations();
        break;
      case 4:
        console.log("\nPerforming Boolean Operations:");
        handleBooleanOperations();
        break;
      case 5:
        console.log("Exiting the program.");
        break;
      default:
        console.log("Invalid choice. Please try again.");
    }
  } while (choice !== 5);
}

displayMenu();