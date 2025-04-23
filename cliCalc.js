"use strict";
// // console.log("CLI calculator working");
Object.defineProperty(exports, "__esModule", { value: true });
// let add = (a: number, b: number): number => {
//   return a + b;
// };
// let subtract = (a: number, b: number): number => {
//   return a - b;
// };
// let multiply = (a: number, b: number): number => {
//   return a * b;
// };
// let divide = (a: number, b: number): number => {
//   return a / b;
// };
// let power = (a: number, b: number): number => {
//   return a ** b;
// };
// type Operator = "+" | "-" | "*" | "/" | "**";
// const calculate = (a: number, b: number, operator: Operator) => {
//   switch (operator) {
//     case "+":
//       add(a, b);
//     case "-":
//       return subtract(a, b);
//           case "*":
//       multiply(a, b);
//       break;
//     case "/":
//       divide(a, b);
//       break;
//     case "**":
//        power(a, b);
//       break;
//     default:
//       console.warn("Please provide a valid value");
//   }
// };
// let result = calculate(2, 3, "/");
// console.warn(result);
const readline_sync_1 = require("readline-sync");
function main() {
    const firstStr = (0, readline_sync_1.question)("Enter 1st number\n");
    const operator = (0, readline_sync_1.question)("Enter operator\n");
    const secondStr = (0, readline_sync_1.question)("Enter 2nd number\n");
    const validType = isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);
    if (validType) {
        const firstNum = parseInt(firstStr);
        const secondNum = parseInt(secondStr);
        const result = calculate(firstNum, secondNum, operator);
        console.log(result);
        main();
    }
    else {
        console.log("\nPlease enter valid input");
        main();
    }
}
function isNumber(str) {
    return !isNaN(parseFloat(str));
}
function isOperator(str) {
    return ["+", "-", "*", "/", "**"].includes(str);
}
function calculate(a, b, operator) {
    switch (operator) {
        case "+":
            a + b;
            break;
        case "-":
            a - b;
            break;
        case "*":
            a * b;
            break;
        case "/":
            a / b;
            break;
        case "**":
            a ** b;
            break;
        default:
            throw new Error("Please enter valid operator");
    }
}
main();
