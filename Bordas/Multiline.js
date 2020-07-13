const texto = `
Leo é muito legal
Emmanuel foi jogar em Sergipe
Bianca é casada com habib
`

console.log(texto.match(/\n/g));
console.log(texto.match(/^(\w).+\1$/gi));
console.log(texto.match(/^(\w).+\1$/gim));
