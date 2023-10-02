import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Voeg hier je eigen code in
let name = 'Senne';
let age = parseInt(20);
let favoriteGame = 'cs2'
console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');
process.exit();