const texto = `
Os e-mails dos convidades são:

nikolai@gmail.com
marcos.lima@yahoo.com
tudopode@empresa.info.br
jhon-hendrix@mail.com.us
fernando_portugal@registro.pt
`
console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g));
console.log(texto.match(/\w+@\w+\.\w{2,4}/g));
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g));
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g));