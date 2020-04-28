// no início...
// Um byte (8 bits) - 256 caracteres
// Símboloes, pontuações, A-Z, a-z, 0-9

// Dois bytes (16 bits) - 65500+ caracteres
// + Símbolos, +pontuação, A-Z, a-z, 0-9
// Quantidade de Bytes variável - Expansível
// Suporta mais de 1 milhão de caracteres
// Atualmente tem mais de 100.000 caracteres atribuidos

// https://unicode-table.com/pt

const texto = 'aʬc௵d'
console.log(texto.match(/\u02AC|\u0BF5/g));