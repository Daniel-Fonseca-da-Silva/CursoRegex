const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>';

// Quantificadores são GULOSOS (greedy)...

console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>.*<\/div>/g));
console.log(texto.match(/<div>.{0,100}<\/div>/g));


// Usando quantificadores NÃO GULOSOS(lazzy)...

console.log(texto.match(/<div>.+?<\/div>/g));
console.log(texto.match(/<div>.*?<\/div>/g));
console.log(texto.match(/<div>.{0,100}?<\/div>/g));