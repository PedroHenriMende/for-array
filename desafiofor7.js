/*Nome: Pedro Henrique Mendes de Jesus
6- Faça um programa que verifique e mostre os números entre
1.000 e 2.000 (inclusive) que, quando divididos por 11
produzam resto igual a 2. Utilizar o laço de repetição FOR*/
console.clear();
var teclado = require("prompt-sync")();
var y = 1;
var z = 1;
var maximo = -1;
maximo = maximo + parseInt(teclado("Digite um numero: "));
for (var x = 0; x <= maximo; x++) {
    y = y * z;
    z++;
    console.log(y);
}
