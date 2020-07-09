const texto = `
    Lista telefônica:
    - (11) 97123-2456
    - (15) 87512-1598
    - (24) 75621-1872
    - (32) 86235-6125
`

console.log(texto.match(/\d{2}\d{5}-\d{4}/g));
console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/g));