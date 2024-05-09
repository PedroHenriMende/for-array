/*Nome: Pedro Henrique Mendes de Jesus
2 – Faça um laço de repetição que contenha uma operação
aritmética qualquer , esse laço vai se repetir 10x utilizando
entrada de dados (prompt Sync), os resultados de cada operação
será armazenado em um vetor, após o termino do laço de
repetição os resultados de cada operação armazenada deve ser
exibido (com laço de repetição ou não).*/
console.clear();
var teclado = require("prompt-sync")();
var vetor = [];
var soma = 0;
for (var g = 0; g < 10; g++) {
    var num1 = +teclado("Digite um n\u00FAmero: ");
    var num2 = +teclado("Digite outro n\u00FAmero: ");
    soma = num1 + num2;
}
console.log(vetor);
