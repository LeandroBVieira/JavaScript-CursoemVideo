var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()
console.log(`Agora São ${hora} horas, ${minutos} minutos e ${segundos} segundos`)
if (hora < 12) {
    console.log("Bom Dia")
} else if (hora <= 18) {
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}