const texto = `
- 600.567.851.15
- 554.345.987-12
- 254.261.875-25
- 351.723.856-90
- 875.637.345-85
`

console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));