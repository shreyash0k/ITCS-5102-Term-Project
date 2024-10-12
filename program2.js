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
// Data Structure 1: Array of numbers
let numbers = [10, 15, 20, 25, 30];
let person = {
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
        }
        else {
            console.log(`-> ${numbers[i]} is odd.`);
        }
    }
}
// Function to handle Object operations using both for loop and if-else
function handleObjectOperations() {
    console.log("\n--- Object (Struct) Operations (For Loop and If-Else) ---");
    // Array of keys from the person object
    const keys = ['name', 'age', 'isStudent'];
    // Using a for loop to iterate over the object properties
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        console.log(`Property: ${key}, Value: ${person[key]}`);
    }
    // Using if-else to check if the person is a student or not
    if (person.isStudent) {
        console.log(`${person.name} is a student.`);
    }
    else {
        console.log(`${person.name} is not a student.`);
    }
}
// Function to display the menu and handle user input
function displayMenu() {
    let choice;
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
