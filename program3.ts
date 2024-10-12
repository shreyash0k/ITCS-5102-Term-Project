import * as readlineSync from 'readline-sync';

// Function to showcase Exception Handling (Division by Zero)
function exceptionHandlingExample() {
  console.log("\n--- Exception Handling Example ---");
  
  // Intentionally causing an error (division by zero)
  try {
    let num1: number = 10;
    let num2: number = 0; // Intentional division by zero
    if (num2 === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    let result = num1 / num2;
    console.log(`Result: ${result}`);
  } catch (error: any) {
    // Handling the error by catching the exception
    console.log("Error caught: " + error.message);
  } finally {
    // The 'finally' block is always executed
    console.log("Finally block executed. Clean-up code can go here.");
  }
}

// Function to display the menu and handle user input
export function displayMenu() {
  let choice: number;
  
  do {
    console.log("\n--- Menu ---");
    console.log("1. Exception Handling (Division by Zero)");
    console.log("2. Exit");
    
    choice = readlineSync.questionInt("Enter your choice: ");
    
    switch (choice) {
      case 1:
        exceptionHandlingExample();
        break;
      case 2:
        console.log("Exiting the program.");
        break;
      default:
        console.log("Invalid choice. Please try again.");
    }
  } while (choice !== 2);
}

displayMenu();