//let amigo = {nome:'Jose', sexo: 'm', peso: 85.4,engordar(p){}} //pode ser assim
let amigo1 = {nome:'Jose', 
sexo: 'm', //ou assim
peso: 85.4,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo1.engordar(2) //85.4 + 2 = 87.4
console.log(amigo1.nome) //jose
console.log(amigo1.sexo) //m
console.log(amigo1.peso) //87.4
console.log(`${amigo1.nome} pesa ${amigo1.peso}kg`)