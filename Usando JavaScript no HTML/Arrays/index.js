// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
const hobbits = arr.slice(0, 4)
// Também pode ser usado com números negativos referenciar o final do array
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)