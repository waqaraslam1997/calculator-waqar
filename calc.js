#! /usr/bin/env node
import inquirer from "inquirer";
import { sum } from "./operations/add.js";
import { sub } from "./operations/Subtract.js";
import { multiply } from "./operations/multiply.js";
import { divide } from "./operations/divide.js";
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "What type of calculation do you want? ",
    },
    {
        type: "number",
        name: "one",
        message: "Enter first Number: ",
    },
    {
        type: "number",
        name: "two",
        message: "Enter second Number: ",
    },
]);
const { one, two, operator } = answer;
let result = 0;
if (one && two && operator) {
    if (operator === "+") {
        result = sum(one, two);
    }
    else if (operator === "-") {
        result = sub(one, two);
    }
    else if (operator === "*") {
        result = multiply(one, two);
    }
    else if (operator === "/") {
        result = divide(one, two);
    }
    console.log(`Your result of: ${one} ${operator} ${two} = ${result}`);
}
else {
    console.log("Please enter valid arguments.");
}
