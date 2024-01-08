const prompt = require("prompt-sync")();

const valor1 = Number(prompt('valor 1 : '));
const valor2 = Number(prompt('valor 2 : '));
const valor3 = Number(prompt('valor 3 : '));
const valor4 = Number(prompt('valor 4 : '));

resultado = (valor1+valor2+valor3+valor4)/4;

console.log('O resultado da media anual é '+ resultado);