const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!';
const texto2 = 'There is a big fog in NYC';
const texto3 = 'Era uma vez uma garota que sonhava em ser uma princesa diversas vezes';

// * -> zero ou mais)
const regex = /fogo*/gi;

console.log(texto1.match(regex));
console.log(texto2.match(regex));
