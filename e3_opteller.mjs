// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden
let num1 = parseFloat(await userInput.question('Wat is het eerste getal?'));
let num2 = parseFloat(await userInput.question('Wat is het tweede getal'));
let som;
som = num1 + num2;
console.log('De som van deze getallen is: '+ som);
// Voeg hier je eigen code in
process.exit();
