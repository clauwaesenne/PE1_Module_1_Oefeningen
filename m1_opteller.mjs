import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let num1 = parseFloat(await userInput.question('Wat is het eerste getal?'));
let num2 = parseFloat(await userInput.question('Wat is het tweede getal'));
let som;
let deling;
let verschil;
let product;
som = num1+num2;
deling = num1 / num2;
verschil = num1 - num2;
product = num1 * num2;

console.log('De som is: '+ som + ' De deling is: '+ deling + ' Het verschil is: '+ verschil + ' Het product is: '+ deling);

process.exit();