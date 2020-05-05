const texto = '.$+*?-';

console.log(texto.match(/[+.?*$]/g)); // Não precisa de escape dentro dentro do conjunto
console.log(texto.match(/[$-?]/g)); // Isto é um intervalo válido(range)

// NÃO são um intervalo(range)...
console.log(texto.match(/[$\-?]/g));
console.log(texto.match(/[-?]/g));


// Podem precisar de scape: - [ ] ^  