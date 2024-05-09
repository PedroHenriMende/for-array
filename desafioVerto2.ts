/*Nome: Pedro Henrique Mendes de Jesus
2 – Faça um laço de repetição que contenha uma operação
aritmética qualquer , esse laço vai se repetir 10x utilizando
entrada de dados (prompt Sync), os resultados de cada operação
será armazenado em um vetor, após o termino do laço de
repetição os resultados de cada operação armazenada deve ser
exibido (com laço de repetição ou não).*/

console.clear();
const teclado = require (`prompt-sync`)();

let entradaDados: number [] = new Array(10);
let soma = 0

for(let en = 0; en <= 9; en++){
    entradaDados[en] = Number(teclado(`Digite o número: `));
    soma = soma + entradaDados[en];
    console.log(`A soma dos números é: ${soma}`);
}





