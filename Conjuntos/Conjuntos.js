const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// Para se definir uma classe (ou conjunto) de caracteres usa-se []
const regexPares = /[02468]/g
console.log(texto.match(regexPares))

const texto2 = 'João não vai passear na moto.'
const regexComeSemAcento = /nã[o]/g
console.log(texto2.match(regexComeSemAcento));

const texto3 = 'Marcela tomou chá com café logo depois.'
const achandoAcento = /ch[á]/g
console.log(texto3.match(achandoAcento));
