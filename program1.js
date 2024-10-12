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
// Function to handle Integer operations
function handleIntegerOperations() {
    const intNum1 = 42;
    const intNum2 = 18;
    const sum = intNum1 + intNum2;
    console.log(`1. Sum of ${intNum1} and ${intNum2} is: ${sum}`);
    const difference = intNum1 - intNum2;
    console.log(`2. Difference between ${intNum1} and ${intNum2} is: ${difference}`);
}
// Function to handle Float operations
function handleFloatOperations() {
    const floatNum1 = 23.4567;
    const floatNum2 = 5.67;
    const product = floatNum1 * floatNum2;
    console.log(`1. Product of ${floatNum1} and ${floatNum2} is: ${product.toFixed(2)}`);
    const division = floatNum1 / floatNum2;
    console.log(`2. Division of ${floatNum1} by ${floatNum2} is: ${division.toFixed(2)}`);
}
// Function to handle String operations
function handleStringOperations() {
    const originalString = "Hello, TypeScript!";
    const replacedString = originalString.replace("TypeScript", "World");
    console.log(`1. Replaced String: ${replacedString}`);
    const upperCaseString = originalString.toUpperCase();
    console.log(`2. Uppercase String: ${upperCaseString}`);
}
// Function to handle Boolean operations
function handleBooleanOperations() {
    const isTrue = true;
    const isFalse = false;
    console.log(`1. Boolean as string (true): ${isTrue.toString()}`);
    console.log(`2. Negation of true is: ${!isTrue}`);
}
// Function to display the menu and handle user input
function displayMenu() {
    let choice;
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
