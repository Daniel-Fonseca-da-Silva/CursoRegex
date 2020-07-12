const texto = 'Romário era um excelente jogador, mas hoje é um político questionador'

console.log(texto.match(/r/gi));
console.log(texto.match(/^r/gi)); // ^ significa inicio da linha ou string
console.log(texto.match(/r$/gi)); // significa final da linha ou string
console.log(texto.match(/^r.*r$/gi)); // problema do dotall

