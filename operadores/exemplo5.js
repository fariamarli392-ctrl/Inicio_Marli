const produto = "Notebook"
const preco = 3500.00

//concatenando
const resumo = "o valor do " + produto + " é R$ " + preco

//Interpolação de Testo (String) com crase

 resumo = `o valor do $ {produto} é R$ ${preco.toFixed(2)}`

console.log(resumo)
