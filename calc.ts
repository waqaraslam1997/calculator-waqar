import inquirer from "inquirer";

const answer : {
    one: number;
    two: number;
    operator: string;
}= await inquirer.prompt([
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
])

const  {one, two, operator} =  answer ;

if(one && two && operator){
    let result: number = 0;
    if(operator === "+"){
        result = one + two;
    }
    else if(operator === "-"){
        result = one - two;
    }
    else if(operator === "*"){
        result = one * two;
    }
    else if(operator === "/"){
        result = one / two;
    }


    console.log(`Your result of: ${one} ${operator} ${two} = ${result}`);
    
}else{
    console.log("Please enter valid arguments.");
}

