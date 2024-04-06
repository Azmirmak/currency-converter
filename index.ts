#! /usr/bin/env node 

import inquirer from "inquirer";

const currencyRates : any = {
    USD: 1,
    PKR: 277.85,
    INR: 83.29,
    EUR: 0.92,
    GBP: 0.79,
    CNY: 7023,
};

let userInput = await inquirer.prompt([{
    name: "from",
    message: "Choose your currenecy: ",
    type: "list",
    choices: ["USD", "PKR", "INR", "EUR", "GBP", "CNY"], 
    },
    {
    name: "to",
    message: "Choose the currency you want",
    type: "list",
    choices: ["USD", "PKR", "INR", "EUR", "GBP", "CNY"], 
    },
    {
    name: "amount",
    message: "Enter your amount",
    type: "number",    
    }
]);

let fromCurrency= currencyRates[userInput.from];
let toCurrency= currencyRates[userInput.to];
let amount= userInput.amount;
let baseAmount= amount / fromCurrency;
let counvertedAmount = baseAmount * toCurrency;
console.log(`Converted Amount = ${counvertedAmount}`);