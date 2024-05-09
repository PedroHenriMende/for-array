console.clear();
var teclado = require("prompt-sync")();
var soma = 0;
for (var x = 0; x <= 50; x++) {
    soma = soma + x;
}
console.log("A soma de 0 a 50 \u00E9 ".concat(soma));
