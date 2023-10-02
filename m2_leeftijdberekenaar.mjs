import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let geboortejaar = parseInt(await userInput.question('Wat is je geboortejaar?'));
let toekomstJaar = parseFloat(await userInput.question('Toekomstjaar?'));
let leeftijdToekomst = toekomstJaar - geboortejaar;
let leeftijdToekomst2 = leeftijdToekomst + 1;
console.log('In '+ toekomstJaar + ' zal ik '+ leeftijdToekomst +' of '+ leeftijdToekomst2 +' jaar oud zijn.');
process.exit();
