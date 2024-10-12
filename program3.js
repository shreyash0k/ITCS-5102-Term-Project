"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayMenu = displayMenu;
const readlineSync = __importStar(require("readline-sync"));
// Function to showcase Exception Handling (Division by Zero)
function exceptionHandlingExample() {
    console.log("\n--- Exception Handling Example ---");
    // Intentionally causing an error (division by zero)
    try {
        let num1 = 10;
        let num2 = 0; // Intentional division by zero
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        let result = num1 / num2;
        console.log(`Result: ${result}`);
    }
    catch (error) {
        // Handling the error by catching the exception
        console.log("Error caught: " + error.message);
    }
    finally {
        // The 'finally' block is always executed
        console.log("Finally block executed. Clean-up code can go here.");
    }
}
// Function to display the menu and handle user input
function displayMenu() {
    let choice;
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
