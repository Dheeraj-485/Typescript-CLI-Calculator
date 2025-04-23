// // console.log("CLI calculator working");

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
//       console.log("Please provide a valid value");
//   }
// };

// let result = calculate(2, 3, "/");
// console.log(result);

import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/" | "**";

function main() {
  const firstStr: string = question("Enter 1st number\n");

  //Instant error if a string or something else

  if (!isNumber(firstStr)) {
    console.log("\n Please enter a valid number");
    main();
  }
  const operator: string = question("Enter operator\n");

  if (!isOperator(operator)) {
    console.log("\nPlease enter a valid operator");
    main();
  }
  const secondStr: string = question("Enter 2nd number\n");

  if (!isNumber(secondStr)) {
    console.log("\nPlease enter a valid second number");
    main();
  }
  //   const validType =
  //     isNumber(firstStr) && isNumber(secondStr) && isOperator(operator);

  const firstNum: number = parseFloat(firstStr);

  const secondNum: number = parseFloat(secondStr);
  const result = calculate(firstNum, secondNum, operator as Operator);

  console.log(`Result: ${result}`);
  main();
}

function isNumber(str: string): boolean {
  const valid = !isNaN(parseFloat(str));
  return valid;
}

function isOperator(str: string): boolean {
  return ["+", "-", "*", "/", "**"].includes(str);
}

function calculate(a: number, b: number, operator: Operator) {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "**":
      return a ** b;
    default:
      console.log("Please enter valid operator");
  }
}

main();
