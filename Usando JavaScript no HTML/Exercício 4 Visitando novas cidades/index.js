const turista = prompt("e aí, yutista! qual é o seu nome?")
let cidades =""
let contagem = 0

let continuar = prompt("voce visitou alguma cidade? (sim/não")

while (continuar === "sim"){

    let cidade = prompt("qual é a cidade visitada")
    cidades += " - " + cidade + "\n"
    contagem ++
    continuar = prompt ("voce visitou alguma outra cidade? (sim/não)")
}
alert(
    "turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
  )