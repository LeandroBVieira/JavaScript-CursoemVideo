var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log("Não vota")
} else  if (idade < 18 || idade > 65) {
        console.log("Voto opcional")
    } else {
        console.log("Voto obrigatório")
    }
// O código acima verifica a idade de uma pessoa e imprime se ela pode votar ou não.