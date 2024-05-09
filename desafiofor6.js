/*Nome: Pedro Henrique Mendes de Jesus
6- Faça um programa que verifique e mostre os números entre
1.000 e 2.000 (inclusive) que, quando divididos por 11
produzam resto igual a 2. Utilizar o laço de repetição FOR*/
var teclado = require("prompt-sync")();
console.clear();
for (var i = 1000; i <= 2000; i++) {
    if (i % 11 == 2) {
        console.log("O Resto \u00E9 ".concat(i));
    }
}
