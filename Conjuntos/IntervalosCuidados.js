const texto = 'ABC [abc] a-c 1234'
console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g)); // Não define um range

console.log(texto.match(/[A-z]/g)); // Intervalos usam a ordem da tabela UNICODE

// Tem que respeitar a ordem da tabela UNICODE
// console.log(texto.match(/[a-Z]/g));
// console.log(texto.match(/4-1/G));

