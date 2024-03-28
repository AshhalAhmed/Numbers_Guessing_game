#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6);
const numberGuess = await inquirer.prompt([
    {
        message: "Enter a Number between 0 - 6",
        name: 'numberGuessing',
        type: 'number'
    }
]);
if (numberGuess.numberGuessing === randomNumber) {
    console.log("Congtratulations!! You guessed Right number ");
}
else {
    console.log(`You guessed the wrong number. The correct number was ${randomNumber} `);
}
