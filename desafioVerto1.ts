/*Nome: Pedro Henrique Mendes de Jesus
1 – Faça dois vetores, um que contenha cada dia da semana,
o outro que contenha sete atividades/hobby. Crie uma frase
para cada dia da semana usando todos os índices dos dois vetores.*/

console.clear();
const teclado = require (`prompt-sync`)();

let semanas: string [] = [`Segunda-Feira`, `Terca-Feira`, `Quarta-Feira`, `Quinta-Feira`, `Sexta-Feira`, `Sabado`, `Domingo`];
let hobby: string [] = [`Ler`, `Assistir Séries`, `Jogar video-game`, `Assistir filmes`, `Estudar`, `Ler livros de terror`, `Dormir`];

console.log(`--------------------------------------------------`)
console.log(`|Para ${semanas[0]} eu tenho de hobby ${hobby[0]}|`)
console.log(`|Para ${semanas[1]} eu tenho de hobby ${hobby[1]}|`)
console.log(`|Para ${semanas[2]} eu tenho de hobby ${hobby[2]}|`)
console.log(`|Para ${semanas[3]} eu tenho de hobby ${hobby[3]}|`)
console.log(`|Para ${semanas[4]} eu tenho de hobby ${hobby[4]}|`)
console.log(`|Para ${semanas[5]} eu tenho de hobby ${hobby[5]}|`)
console.log(`|Para ${semanas[6]} eu tenho de hobby ${hobby[6]}|`)
console.log(`--------------------------------------------------`)
